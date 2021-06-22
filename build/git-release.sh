#!/usr/bin/env sh
###
 # @Author: your name
 # @Date: 2021-06-06 13:18:40
 # @LastEditTime: 2021-06-22 22:30:12
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: /element/build/git-release.sh
### 
echo '执行git-release.sh'
git checkout dev

if test -n "$(git status --porcelain)"; then
  echo 'Unclean working tree. Commit or stash changes first.' >&2;
  exit 128;
fi

if ! git fetch --quiet 2>/dev/null; then
  echo 'There was a problem fetching your branch. Run `git fetch` to see more...' >&2;
  exit 128;
fi

if test "0" != "$(git rev-list --count --left-only @'{u}'...HEAD)"; then
  echo 'Remote history differ. Please pull changes.' >&2;
  exit 128;
fi

echo 'No conflicts.' >&2;
