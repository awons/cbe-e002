# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Setting up

Copy `.env.dist` to `.env` like this:
```bash
cp user-pool/.env.dist user-pool/.env
```

and set put a domain prefix for a hosted UI in `.env`.

To build and deploy the stacj run:
```bash
npm install
npm run build
cdk deploy
```
