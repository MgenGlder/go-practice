import * as core from '@actions/core';
import * as gh from '@actions/github'
import { createAppAuth } from "@octokit/auth-app";

const auth = createAppAuth({
    appId: 385501,
    privateKey: process.env.PRIVATE_KEY,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
  
  const installationAuthentication = await auth({
    type: "installation",
    installationId: 41452144,
  });

  const octokit = gh.getOctokit(installationAuthentication.token)

 let {data} = await octokit.rest.issues.create({
    owner: 'MgenGlder',
    repo: 'go-practice',
    title: 'testing-issue',
    body: 'This is a test issue, written from an action!',
    
  });

core.setOutput('outputKey', JSON.stringify(data.number));

console.log('testin ')
