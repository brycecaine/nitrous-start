#!/bin/bash

ssh -p $NITROUS_PORT action@$NITROUS_REGION.nitrousbox.com  <<'ENDSSH'
touch arrived
ENDSSH
echo 'done'
