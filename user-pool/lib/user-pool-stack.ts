import * as cdk from '@aws-cdk/core';
import { UserPool, UserPoolDomain, UserPoolClient } from '@aws-cdk/aws-cognito';

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

    new UserPoolDomain(this, 'my-user-pool-domain', {
      userPool: userPool,
      cognitoDomain: {
        domainPrefix: process.env.DOMAIN_REFIX ? process.env.DOMAIN_REFIX : 'my-test-domain'
      }
    });

    new UserPoolClient(this, 'my-user-pool-client', {
      userPool: userPool,
      userPoolClientName: 'my-test-client',
      authFlows: {
        userPassword: true
      },
      oAuth: {
        flows: {
          authorizationCodeGrant: true
        }
      }
    });
  }
}
