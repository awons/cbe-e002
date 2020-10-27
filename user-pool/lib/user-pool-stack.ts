import * as cdk from '@aws-cdk/core';
import { UserPool, UserPoolDomain, UserPoolClient, CfnUserPoolGroup } from '@aws-cdk/aws-cognito';

export class UserPoolStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new UserPool(this, 'my-user-pool', {
      userPoolName: 'MyTestUserPoolOnly',
      standardAttributes: {
        email: {
          mutable: true,
          required: true
        }
      },
      signInAliases: {
        email: true
      },
      selfSignUpEnabled: true,
      autoVerify: {
        email: true
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

    const group1 = new CfnUserPoolGroup(this, 'my-user-group-1', {
      userPoolId: userPool.userPoolId,
      groupName: 'myusergroup1'
    });

    const group2 = new CfnUserPoolGroup(this, 'my-user-group-2', {
      userPoolId: userPool.userPoolId,
      groupName: 'myusergroup2'
    });

    new cdk.CfnOutput(this, 'output-user-pool-id', {
      value: userPool.userPoolId,
      description: 'User Pool ID'
    });
    new cdk.CfnOutput(this, 'output-client-id', {
      value: userPoolClient.userPoolClientId,
      description: 'Client ID'
    });
    new cdk.CfnOutput(this, 'group1-name', {
      value: group1.groupName ? group1.groupName : '',
      description: 'ID of group 1'
    });
    new cdk.CfnOutput(this, 'group2-name', {
      value: group2.groupName ? group2.groupName : '',
      description: 'ID of group 2'
    });
  }
}
