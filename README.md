This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).You can find the most recent version of guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Global packages

```
npm install -g create-react-app
npm install -g serve
```

# Unit test

Using three main package

1. [jest](https://facebook.github.io/jest/docs/en/getting-started.html)
1. [enzyme](http://airbnb.io/enzyme/)
1. [jest-enzyme](https://github.com/blainekasten/enzyme-matchers)

## Run unit test

* Run tests in watch mode `npm test`
* Run test to produce coverage `npm run test:coverage`
* To open coverage HTML report in app root do `open coverage/index.html`

## Debug unit test in Chrome

1. Place `debugger;` in your unit test
1. Do `npm run test:debug`
1. Open `about:inspect` in Chrome
1. Click on `inspect` link
1. Chrome Developer Tools will be open, click `play` button
1. Now test will start running and will stop on your `debugger;`
1. You know the rest ;)

# Formatting Code

[Prettier](https://prettier.io/) is an opinionated code formatter with support for JavaScript, CSS and [more](https://prettier.io/docs/en/language-support.html). It's setup to run as `precommit` in this repo, you also can do [editor integration](https://prettier.io/docs/en/editors.html) and activate on save auto format in your IDE. [Options](https://prettier.io/docs/en/options.html) can be set in `.prettierrc.json` file

# ESLint

create-react-app comes with ESLint already setup in this repo we just make sure ESLint and Prettier are integrated correctly. To display lint output in your editor just install the plugin and you are good to go. Use `.eslintrc` file to configure more rules and plugings.

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
