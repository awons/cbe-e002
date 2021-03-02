# UserPool

## Prerequisites

* node >= 14
* TypeScript >= 4
* CDK == 1.83.0
* Configured AWS credentials

For part 3 you will additionally need Python 3 with the following dependencies:

* click = 7.1.2
* boto3= = 1.17.3

If you are using VSCode there is a [`.devcontainer`](https://github.com/awons/cbe-e002/tree/main/.devcontainer) setup you can use to open this project in a container. All tooling is already installed. It requires your AWS credentials to be configured in `~/.aws`.

## Setting up

To build and deploy the stack run:

```bash
cd cdk
npm install
npm run build
cdk deploy STACK-NAME
```

You will find the stack in CloudFormation under the name `CBE-E002-UserPoolUsername`.

### CLI commands

### **Part 1 - User Pool; the basics**

Create stack:
```bash
cdk deploy CBE-E002-UserPoolUsername
```

Sign up new user:
```bash
aws cognito-idp sign-up --client-id <value> --username your_username --password 123456qwerty
```

Confirm sign up by User Pool administrator:
```bash
aws cognito-idp admin-confirm-sign-up --user-pool-id <value> --username your_username
```

Add user to a group:
```bash
aws cognito-idp admin-add-user-to-group --user-pool-id <value> --group-name myusergroup1 --username your_username
```

Sign in:
```bash
aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --client-id <value> --auth-parameters USERNAME=your_username,PASSWORD=123456qwerty
```

Get user data:
```bash
aws cognito-idp get-user --access-token <value>
```

Sign out:
```bash
aws cognito-idp global-sign-out --access-token <value>
```

Destroy stack:
```bash
cdk destroy CBE-E002-UserPoolUsername
```

### **Part 2 - User Pool; authenticating with username and password**

### **Authenticating with username and password**

Create stack:

```bash
cdk deploy CBE-E002-UserPoolUsername
```

Sign up user:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username --password 123456qwerty
```

Confirm user:

```bash
aws cognito-idp admin-confirm-sign-up --user-pool-id <value> --username my_unique_username
```

Get user information by admin:

```bash
aws cognito-idp admin-get-user --user-pool-id <value> --username my_unique_username
```

Sign in:

```bash
aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --client-id <value> --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

### **Using an email as an alias to the username**

Create stack:

```bash
cdk deploy CBE-E002-UserPoolEmailAlias
```

Sign up user:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username --password 123456qwerty --user-attributes Name=email,Value=email@example.com
```

Confirm signup:

```bash
aws cognito-idp confirm-sign-up --client-id <value> --username my_unique_username --confirmation-code <value>
```

Sign in with username:

```bash
aws cognito-idp initiate-auth --client-id <auth> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

Sign in with email address:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=email@example.com,PASSWORD=123456qwerty
```

Sign up again with the same username:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username --password 123456qwerty --user-attributes Name=email,Value=email@example.com
```

Sign up with another username but the same email address:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username_2 --password 123456qwerty --user-attributes Name=email,Value=email@example.com
```

Sign in:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=email@example.com,PASSWORD=123456qwerty
```

Get current user details:

```bash
aws cognito-idp get-user --access-token <value>
```

Try to confirm the second account:

```bash
aws cognito-idp confirm-sign-up --client-id <value> --username my_unique_username_2 --confirmation-code <value>
```

Force confirm the second account:

```bash
aws cognito-idp confirm-sign-up --client-id <value> --username my_unique_username_2 --force-alias-creation --confirmation-code <value>
```

Get data of the first user:

```bash
aws cognito-idp admin-get-user --user-pool-id <value> --username my_unique_username
```

Get data of the second user:

```bash
aws cognito-idp admin-get-user --user-pool-id <value> --username my_unique_username_2
```

Sign in:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=email@example.com,PASSWORD=123456qwerty
```

Get current user details:

```bash
aws cognito-idp get-user --access-token <value>
```

Try to sign a user up with an email as a username:

```bash
aws cognito-idp sign-up --client-id <value> --username email_2@example.com --password 123456qwerty --user-attributes Name=email,Value=email_2@example.com
```

Destroy the stak:

```bash
cdk destroy CBE-E002-UserPoolEmailAlias
```

### **Using preferred username as an alias to the username**

Create stack:

```bash
cdk deploy CBE-E002-UserPoolPreferredUsernameAlias
```

Sign up:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username --password 123456qwerty
```

Try to sign in:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

Confirm the account as an administrator:

```bash
aws cognito-idp admin-confirm-sign-up --user-pool-id <value> --username my_unique_username
```

Sign user in:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

Try to sign up with preferred username specified:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username_2 --password 123456qwerty --user-attributes Name=preferred_username,Value=my_unique_preferred_username
```

Set up the preferred username:

```bash
aws cognito-idp update-user-attributes --user-attributes Name=preferred_username,Value=my_unique_preferred_username --access-token <value>
```

Get details of currently signed in user:

```bash
aws cognito-idp get-user --access-token <value>
```

Sign user in using the preferred username:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_preferred_username,PASSWORD=123456qwerty
```

Sign user up:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username_2 --password 123456qwerty
```

Confign new user by administrator:

```bash
aws cognito-idp admin-confirm-sign-up --user-pool-id <value> --username my_unique_username_2
```

Sign new user in:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username_2,PASSWORD=123456qwerty
```

Try to update preferred username:

```bash
aws cognito-idp update-user-attributes --user-attributes Name=preferred_username,Value=my_unique_preferred_username --access-token <value>
```

Destroy stak:

```bash
cdk destroy CBE-E002-UserPoolPreferredUsernameAlias
```

### **Using both email address, phone number and preferred username as an alias to the username**

Create stack:

```bash
cdk deploy CBE-E002-UserPoolAllAliases
```

Sign user up:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username --password 123456qwerty --user-attributes Name=email,Value=email@example.com Name=phone_number,Value=+1234567890
```

Confirm sign up:

```bash
aws cognito-idp confirm-sign-up --client-id <value> --username my_unique_username --confirmation-code <value>
```

Sign user in:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

Set preferred username:

```bash
aws cognito-idp update-user-attributes --user-attributes Name=preferred_username,Value=my_unique_preferred_username --access-token <value>
```

Sign user in with preferred username:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_preferred_username,PASSWORD=123456qwerty
```

Sign user in using email address:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=+1234567890,PASSWORD=123456qwerty
```

Try to sign user in user email address:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=email@example.com,PASSWORD=123456qwerty
```

Get user datails as administrator:

```bash
aws cognito-idp admin-get-user --user-pool-id <value> --username my_unique_username
```

Sign user in:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

Set verification token to email address:

```bash
aws cognito-idp get-user-attribute-verification-code --attribute-name email --access-token <value>
```

Verify email address:

```bash
aws cognito-idp verify-user-attribute --attribute-name email --code <value> --access-token <value>
```

Get current user's data:

```bash
aws cognito-idp get-user --access-token <value>
```

### **Part 3 - User Pool; authenticating with username and SRP**

#### **Additional reqirements**

For this example to work you need to have python3

Create the stack:

```bash
cdk deploy CBE-E002-UserPoolSrp
```

Sign up new user:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username --password 123456qwerty
```

Confirm the account:

```bash
aws cognito-idp admin-confirm-sign-up --user-pool-id <value> --username my_unique_username
```

Authenticate:

```bash
../srp/test_aws_srp.py\
    --username my_unique_username\
    --password 123456qwerty\
    --pool-id <value>\
    --client-id <value>\
    --region <value>
```

Destroy stack:

```bash
cdk destroy CBE-E002-UserPoolSrp
```

Deploy stack with username and password authentication:

```bash
DO_NOT_USE_SRP=1 cdk deploy CBE-E002-UserPoolSrp
```

Sign up new user:

```bash
aws cognito-idp sign-up --client-id <value> --username my_unique_username --password 123456qwerty
```

Confirm the account:

```bash
aws cognito-idp admin-confirm-sign-up --user-pool-id <value> --username my_unique_username
```

Sign in with username and password:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

Change stack to use only SRP:

```bash
cdk deploy CBE-E002-UserPoolSrp
```

Try againto authenticate with username and password:

```bash
aws cognito-idp initiate-auth --client-id <value> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=my_unique_username,PASSWORD=123456qwerty
```

Authenticate with SRP

```bash
../srp/test_aws_srp.py\
    --username my_unique_username\
    --password 123456qwerty\
    --pool-id <value>\
    --client-id <value>\
    --region <value>
```

Destroy stack:

```bash
cdk destroy CBE-E002-UserPoolSrp
```
