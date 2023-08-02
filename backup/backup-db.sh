#!/bin/bash

DB_USER=${DB_USER: -${MYSQL_ENV_DB_USER}}
DB_PASS=${DB_PASS: -${MYSQL_ENV_DB_PASS}} 
DB_HOST=${DB_HOST: -${MYSQL_ENV_DB_HOST}}

if [[ ${DB_USER} =="" ]]; then 
    echo "Missing DB_USER env variable" 
        exit 1
fi
if [[ ${DB_PASS} =="" ]]; then 
    echo "Missing DB_PASS env variable"
    exit 1
fi
if [[ ${DB_HOST} =="" ]]; then 
    echo "Missing DB_HOST env variable" 
        exit 1
fi
