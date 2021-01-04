import * as cdk from '@aws-cdk/core';
import { UserPool, UserPoolClient, CfnUserPoolGroup } from '@aws-cdk/aws-cognito';

export class UserPoolUsername extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new UserPool(this, 'my-user-pool-username', {
      userPoolName: 'MyTestUserPool',
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
        userPassword: true,
      },
      disableOAuth: true
    });

    new CfnUserPoolGroup(this, 'my-user-group-1', {
      userPoolId: userPool.userPoolId,
      groupName: 'myusergroup1'
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
