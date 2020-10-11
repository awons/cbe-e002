import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as UserPool from '../lib/user-pool-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new UserPool.UserPoolStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
