# UserPool

## Prerequisites
* node >= 12
* TypeScript >= 4
* CDK == 1.67.0
* Configures AWS credentials

If you are using VSCode there is a [`.devcontainer`](https://github.com/awons/cbe-e002/tree/main/.devcontainer) setup you can use to open this project in a container. All tooling is already installed. It requires your AWS credentials to be configured in `~/.aws`.

## Setting up

Copy `.env.dist` to `.env`:
```bash
cp user-pool/.env.dist user-pool/.env
```

and set put a domain prefix for a hosted UI in `.env`. It's a prefix within `auth.{region}.amazoncognito.com` domain so make sure you pick a random prefix that is available.

To build and deploy the stack run:
```bash
npm install
npm run build
cdk deploy
```

You will find the stack in CloudFormation under the name `CBE-E002-UserPoolStack`.
