This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).You can find the most recent version of guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# bash_profile
1. `vim ~/.bash_profile`
1. paste the following config
```
# Show branch name in color
function parse_git_branch () {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
RED="\[\033[0;31m\]"
YELLOW="\[\033[0;33m\]"
GREEN="\[\033[0;32m\]"
NO_COLOR="\[\033[0m\]"
PS1="$GREEN\u@\h$NO_COLOR:\w$YELLOW\$(parse_git_branch)$NO_COLOR\$ "
```

# .gitconfig
1. `vim ~/.gitconfig`
1. paste the following config
```
# This is Git's per-user configuration file.
[user]
        name = %YOUR_NAME%
        email = %YOUR_EMAIL%

[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
  type = cat-file -t
  dump = cat-file -p
  unstage = reset HEAD --
  last = log -1 HEAD
```