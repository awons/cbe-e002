#!/usr/bin/python3

import aws_srp
import json


import click

@click.command()
@click.option('--username')
@click.option('--password')
@click.option('--pool-id')
@click.option('--client-id')
@click.option('--region')
def srp_test(username, password, pool_id, client_id, region):
    awssrp = aws_srp.AWSSRP(username=username, password=password, client_id=client_id, pool_id=pool_id)
    print(json.dumps(awssrp.authenticate_user(), indent=4))

if __name__ == '__main__':
    srp_test()


