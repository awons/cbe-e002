import * as cdk from '@aws-cdk/core';
import { UserPool, UserPoolClient } from '@aws-cdk/aws-cognito';

export class UserPoolEmailAlias extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new UserPool(this, 'my-user-pool-email-alias', {
      userPoolName: 'MyTestUserPool',
      standardAttributes: {
        email: {
          mutable: true,
          required: true
        }
      },
      signInAliases: {
        username: true,
        email: true
      },
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

export class UserPoolPreferredUsernameAlias extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new UserPool(this, 'my-user-pool-preferred-username-alias', {
      userPoolName: 'MyTestUserPool',
      standardAttributes: {
        preferredUsername: {
          mutable: true,
          required: false
        }
      },
      signInAliases: {
        username: true,
        preferredUsername: true
      },
      selfSignUpEnabled: true,
      passwordPolicy: {
        requireLowercase: false,
        requireUppercase: false,
        requireDigits: false,
        requireSymbols: false
      },
    });

    const userPoolClient = new UserPoolClient(this, 'my-user-pool-client', {
      userPool: userPool,
      userPoolClientName: 'my-test-client',
      authFlows: {
        userPassword: true,
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

export class UserPoolAllAliases extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new UserPool(this, 'my-user-pool-all-aliases', {
      userPoolName: 'MyTestUserPool',
      standardAttributes: {
        preferredUsername: {
          mutable: true,
          required: false
        },
        email: {
          mutable: true,
          required: true
        },
        phoneNumber: {
          mutable: true,
          required: true
        }
      },
      signInAliases: {
        username: true,
        preferredUsername: true,
        phone: true,
        email: true
      },
      selfSignUpEnabled: true,
      passwordPolicy: {
        requireLowercase: false,
        requireUppercase: false,
        requireDigits: false,
        requireSymbols: false
      },
    });

    const userPoolClient = new UserPoolClient(this, 'my-user-pool-client', {
      userPool: userPool,
      userPoolClientName: 'my-test-client',
      authFlows: {
        userPassword: true,
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
