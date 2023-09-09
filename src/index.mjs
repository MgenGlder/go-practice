import * as core from '@actions/core';
import * as gh from '@actions/github'
import { createAppAuth } from "@octokit/auth-app";

const auth = createAppAuth({
    appId: 385501,
    privateKey: process.env.PRIVATE_KEY,
    clientId: "Iv1.d4cb843505e5dc98",
    clientSecret: "60d4b8b790004f48d0953b05841eb0f83c922dd5",
  });
  
  const installationAuthentication = await auth({
    type: "installation",
    installationId: 41452144,
  });

  const octokit = gh.getOctokit(installationAuthentication.token)

 let response = await octokit.rest.issues.create({
    owner: 'MgenGlder',
    repo: 'go-practice',
    title: 'testing-issue',
    body: 'This is a test issue, written from an action!',
    
  });

core.setOutput('outputKey', JSON.stringify(response));

console.log('testin ')