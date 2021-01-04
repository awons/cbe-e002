#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UserPoolUsername } from '../lib/user-pool-username-stack';
import { UserPoolEmailAlias, UserPoolPreferredUsernameAlias, UserPoolAllAliases } from '../lib/user-pool-aliases-stack';

require('dotenv').config();

const app = new cdk.App();
new UserPoolUsername(app, 'CBE-E002-UserPoolUsername');
new UserPoolEmailAlias(app, 'CBE-E002-UserPoolEmailAlias');
new UserPoolPreferredUsernameAlias(app, 'CBE-E002-UserPoolPreferredUsernameAlias');
new UserPoolAllAliases(app, 'CBE-E002-UserPoolAllAliases');
