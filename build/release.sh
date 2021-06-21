#!/usr/bin/env sh
###
 # @Author: your name
 # @Date: 2021-06-06 13:18:40
 # @LastEditTime: 2021-06-21 18:13:04
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: /element/build/release.sh
### 
echo '执行release.sh'
set -e

# git checkout main&&
# git merge dev

VERSION=`npx select-version-cli`
# 设置组件库的版本信息
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run dist

  # ssr test
  # node test/ssr/require.test.js            

  # publish theme 打包css样式
  # echo "Releasing theme-chalk $VERSION ..."
  # cd packages/theme-chalk
  # npm version $VERSION --message "[release] $VERSION"
  # if [[ $VERSION =~ "beta" ]]
  # then
  #   npm publish --tag beta
  # else
  #   npm publish
  # fi
  # cd ../..

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push origin main&&
  git push origin refs/tags/v$VERSION
  # git checkout dev
  # git rebase main&&
  # git push origin dev

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
