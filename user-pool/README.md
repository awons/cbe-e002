# UserPool

## Prerequisites
* node >= 12
* TypeScript >= 4
* CDK == 1.67.0
* Configures AWS credentials

If you are using VSCode there is a [`.devcontainer`](https://github.com/awons/cbe-e002/tree/main/.devcontainer) setup you can use to open this project in a container. All tooling is already installed. It requires your AWS credentials to be configured in `~/.aws`.

## Setting up

To build and deploy the stack run:
```bash
npm install
npm run build
cdk deploy
```

You will find the stack in CloudFormation under the name `CBE-E002-UserPoolStack`.

### CLI commands

Sign up new user:
```bash
aws cognito-idp sign-up --client-id your-client-id --username your-email@example.com --password your-password
```

Confirm user's account:
```bash
aws cognito-idp confirm-sign-up --client-id your-client-id --username your-email@example.com --confirmation-code your-confirmation-code
```

Assign user to a group:
```bash
aws cognito-idp admin-add-user-to-group --user-pool-id your-pool-id --group-name your-group-name --username your-email@example.com
```

Initiate authentication:
```bash
aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --client-id your-client-id --auth-parameters USERNAME=your-email@example.com,PASSWORD=your-password
```

Get user data:
```bash
aws cognito-idp get-user --access-token here-comes-your-access-token
```

Global sign out:
```bash
aws cognito-idp global-sign-out --access-token here-comes-your-access-token
```
