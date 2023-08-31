#!/bin/bash


cp -rf /Users/yangyang/data/githubs/uniswap-v3/build/* ./cdn
cp /Users/yangyang/data/githubs/uniswap-v3/build/index.html ./

git add .
git commit -m "mod"
git push origin master