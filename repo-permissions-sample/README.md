# Azure DevOps Permissions

## Retrieve Azure DevOps Repo Permissions 

### Download or Clone 
We can either download the repo direclty as shown below or we can clone it
<ul>
  <img src="https://res.cloudinary.com/dcqrxsgq8/image/upload/v1551993461/github-example/download-git.jpg" />
</ul>

or

`git clone https://github.com/PremierDeveloper/Azure-DevOps.git`

### Navigate to local folder

`cd Azure-DevOps/repo-permissions-sample`

### Installation & run 

`npm install` </br>
`node index.js`

### Result

```
Permissions: {
  "identity": {
    "IdentityType": "team",
    "FriendlyDisplayName": "RayProject Team",
    "DisplayName": "[RayProject]\RayProject Team",
    "SubHeader": "[RayProject]",
    "TeamFoundationId": "73544b31-8d7d-47c0-a474-f0bd7db7c5b2",
    "EntityId": "vss.ds.v1.ims.group.73544b318d7d47c0a474f0bd7db7c5b2",
    "Errors": [],
    "Warnings": [],
    "IsWindowsGroup": false,
    "IsAadGroup": false,
    "Description": "The default project team.",
    "Scope": "RayProject",
    "MemberCountText": "1",
    "IsTeam": true,
    "IsProjectLevel": true
  }
}
Permissions: {
  "identity": {
    "IdentityType": "team",
    "FriendlyDisplayName": "Bing Team",
    "DisplayName": "[Bing]\Bing Team",
    "SubHeader": "[Bing]",
    "TeamFoundationId": "432f4d89-46aa-4072-84e9-6ccc59c4a3f3",
    "EntityId": "vss.ds.v1.ims.group.432f4d8946aa407284e96ccc59c4a3f3",
    "Errors": [],
    "Warnings": [],
    "IsWindowsGroup": false,
    "IsAadGroup": false,
    "Description": "The default project team.",
    "Scope": "Bing",
    "MemberCountText": "2",
    "IsTeam": true,
    "IsProjectLevel": true
  }
}
Org: {
  "RayProject": {
    "RayProject Team": "Sidi Merzouk"
  },
  "Bing": {
    "Bing Team": "Kevin Kraus, Sidi Merzouk"
  }
}

```

### Blog Link

<link>coming up soon </link>

### Contributors
Brian Blackman </br>
Sidi Merzouk

