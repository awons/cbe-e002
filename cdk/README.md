# UserPool

## Prerequisites
* node >= 12
* TypeScript >= 4
* CDK == 1.67.0
* Configured AWS credentials

If you are using VSCode there is a [`.devcontainer`](https://github.com/awons/cbe-e002/tree/main/.devcontainer) setup you can use to open this project in a container. All tooling is already installed. It requires your AWS credentials to be configured in `~/.aws`.

## Setting up

To build and deploy the stack run:
```bash
cd cdk
npm install
npm run build
cdk deploy STACK-NAME
```

You will find the stack in CloudFormation under the name `CBE-E002-UserPoolUsername`.

### CLI commands

#### Part 1 - User Pool; the basics

Create stack:
```bash
cdk deploy CBE-E002-UserPoolUsername
```

Sign up new user:
```bash
aws cognito-idp sign-up --client-id <value> --username your_username --password 123456qwerty
```

Confirm sign up by User Pool administrator:
```bash
aws cognito-idp admin-confirm-sign-up --user-pool-id <value> --username your_username
```

Add user to a group:
```bash
aws cognito-idp admin-add-user-to-group --user-pool-id <value> --group-name myusergroup1 --username your_username
```

Sign in:
```bash
aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --client-id <value> --auth-parameters USERNAME=your_username,PASSWORD=123456qwerty
```

Get user data:
```bash
aws cognito-idp get-user --access-token <value>
```

Sign out:
```bash
aws cognito-idp global-sign-out --access-token <value>
```

Destroy stack:
```bash
cdk destroy CBE-E002-UserPoolUsername
```
