#!/bin/bash

set -e

function validate {
  ARE_VARIABLES_VALID=true

    if [ -z "$SURGE_TOKEN" ]; then
        echo "Error! SURGE_TOKEN secret variable not set!"
        echo "You can set it in https://travis-ci.org -> More Options -> Settings -> Environment Variabless"
        echo ""
        ARE_VARIABLES_VALID=false
    fi

    if [ -z "$SURGE_LOGIN" ]; then
        echo "Error! SURGE_LOGIN secret variable not set!"
        echo "You can set it in https://travis-ci.org -> More Options -> Settings -> Environment Variabless"
        echo ""
        ARE_VARIABLES_VALID=false
    fi

    if [ "$ARE_VARIABLES_VALID" = false ]; then
        echo "Configuration problems found, please contact smugers@gmail.com"
        exit 1
    fi
}

# Check if required variables are set before runing anything
validate

# install
npm install --global surge@0.21.6

# build
npm run storybook:build

# Deploy
surge --project ./storybook-static --domain vue-snap.surge.sh
