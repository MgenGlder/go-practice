const core = require('@actions/core');
const gh = require('@actions/github');
const { createAppAuth } = require("@octokit/auth-app");

const auth = createAppAuth({
    appId: 385501,
    privateKey: procoess.env.PRIVATE_KEY,
    clientId: "Iv1.d4cb843505e5dc98",
    clientSecret: "60d4b8b790004f48d0953b05841eb0f83c922dd5",
  });
  
  const installationAuthentication = await auth({
    type: "installation",
    installationId: 41452144,
  });

  const octokit = github.getOctokit(installationAuthentication.token)

  await octokit.rest.issues.create({
    owner: 'MgenGlder',
    repo: 'go-practice',
    title: 'testing-issue',
  });

core.setOutput('outputKey', 'We da best');

console.log('testin ')