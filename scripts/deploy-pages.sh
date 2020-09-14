#!/bin/bash

set -e

function validate {
  ARE_VARIABLES_VALID=true

    if [ -z "$GITHUB_TOKEN" ]; then
        echo "Error! GITHUB_TOKEN secret variable not set!"
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

# build
npm run docs:build

# Deploy
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:bartdominiak/vue-snap.git master:gh-pages

cd -
