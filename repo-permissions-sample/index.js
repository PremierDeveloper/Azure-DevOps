const request =  require('request');
const vsoNodeApi = require('azure-devops-node-api');
// Create a personal from azure devops
const token = "<INSERT TOKEN>";
// Url to your organization
const serverUrl = '<INSERT REPO URL>'; 
let authHandler = vsoNodeApi.getPersonalAccessTokenHandler(token); 
let vsts = new vsoNodeApi.WebApi(serverUrl, authHandler, undefined);

async function run() {
  var constructedTeams = {}
  try {
    var coreApi = await vsts.getCoreApi(); 
    var teams = await coreApi.getAllTeams();
    var i;
      for (i = 0; i < teams.length; i++) { 
        const team = teams[i]
        const obj = {
          url: team['url'],
          projectId: team['projectId'],
          teamName: team['name'],
          teamId: team['id']
        }
        if (!constructedTeams[team['projectName']]){
          constructedTeams[team['projectName']] = [obj]
        } else {
          constructedTeams[team['projectName']].push(obj)
        }
      }
      const teamsToUse = await constructedTeams
      const finalConstruct = await constructTeams(teamsToUse)
      return finalConstruct
  } catch(err) {
    console.log(`err ${JSON.stringify(err, null, 2)}`)
  }
}

const constructTeams = async (teams) => {
  const obj = {}
  var coreApi = await vsts.getCoreApi(); 
  const ids = Object.keys(teams)
  await asyncForEach(ids, async (key) => {
    await asyncForEach(teams[key], async (el) => {
      const temp = {}
      const {projectId, teamId} = el
      const url = `https://<INSERT TOKEN>@<INSERT URL>/${projectId}/_api/_identity/Display?__v=5&tfid=${teamId}`
      request.get(url
      , function(error, response, body) {
          const parsedBody = JSON.parse(body)
          if (parsedBody && parsedBody['security'] && parsedBody['security']['permissions']) {
            delete parsedBody['security']
            console.log(`Permissions: ${JSON.stringify(parsedBody, null, 2)}`)
          } else {
            console.log(`not found`)
          }
      } );
      const members = await coreApi.getTeamMembersWithExtendedProperties(el.projectId, el.teamId);
      const NameMembers = await members.map(member => member.identity.displayName).join(', ')
      temp[el.teamName] = NameMembers
      if (!obj[key] || Object.keys(obj[key]).length == 0) {
        obj[key] = temp
      } else {
        Object.assign(obj[key], temp) 
      }
    })
  })
  console.log(`Org: ${JSON.stringify(obj, null, 2)}`)
  return obj
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

run()