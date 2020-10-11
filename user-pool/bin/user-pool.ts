#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UserPoolStack } from '../lib/user-pool-stack';

require('dotenv').config();

const app = new cdk.App();
new UserPoolStack(app, 'CBE-E002-UserPoolStack');
