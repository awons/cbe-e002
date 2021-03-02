import * as cdk from '@aws-cdk/core';
import { UserPool, UserPoolClient } from '@aws-cdk/aws-cognito';

export class UserPoolSrp extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const userPool = new UserPool(this, 'my-user-pool-srp', {
            userPoolName: 'MyTestUserPoolSrp',
            selfSignUpEnabled: true,
            passwordPolicy: {
                requireLowercase: false,
                requireUppercase: false,
                requireDigits: false,
                requireSymbols: false
            }
        });

        const userPoolClient = new UserPoolClient(this, 'my-user-pool-client', {
            userPool: userPool,
            userPoolClientName: 'my-test-client',
            authFlows: {
                userPassword: process.env['DO_NOT_USE_SRP']? true : false,
                userSrp: process.env['DO_NOT_USE_SRP']? false : true,
            },
            disableOAuth: true
        });

        new cdk.CfnOutput(this, 'output-user-pool-id', {
            value: userPool.userPoolId,
            description: 'User Pool ID'
        });
        new cdk.CfnOutput(this, 'output-client-id', {
            value: userPoolClient.userPoolClientId,
            description: 'Client ID'
        });
    }
}
