#!/bin/bash


cp -rf /Users/yangyang/data/githubs/uniswap-v3/build/* ./cdn
cp -rf /Users/yangyang/data/githubs/uniswap-v3/build/index.html ./
cp -rf /Users/yangyang/data/githubs/uniswap-v3/build/index.html ./swap/index.html
cp -rf /Users/yangyang/data/githubs/uniswap-v3/build/index.html ./pools/index.html

git add .
git commit -m "mod"
git push origin master