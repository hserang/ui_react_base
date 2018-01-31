This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).You can find the most recent version of guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Motivation

Team decided to use `create-react-app` as our react boilerplate, to make sure everybody can setup and get stated on in no time here we are adding missing components like routing, state managing and localization.
Here try to keep it simple and stay focus only on essentials. This repo can be used as

## Base for new project

* `git clone git@github.com:ripple/ui_react_base.git`
* `npm install`
* `npm start`
* `happy coding ...`

## Step by Step toturial

if you are new to react and/or want to know how to setup base packages you can follow the pull requests

1. [Setting express](https://github.com/ripple/ui_react_base/pull/1)
1. [Unit test and Prettier](https://github.com/ripple/ui_react_base/pull/2)
1. [ESLint & Prettier](https://github.com/ripple/ui_react_base/pull/3)
1. [Routing with react-router](https://github.com/ripple/ui_react_base/pull/4)
1. [Code spliting and chunking](https://github.com/ripple/ui_react_base/pull/5)
1. [Redux and Async API call](https://github.com/ripple/ui_react_base/pull/6)
1. [Manage Document head with Helmet](https://github.com/ripple/ui_react_base/pull/7)
1. [Bundle analyze](https://github.com/ripple/ui_react_base/pull/8)
1. [Basic security for react and node](https://github.com/ripple/ui_react_base/pull/9)
1. [Localization with i18next](https://github.com/ripple/ui_react_base/pull/10)

# Further improvements

Because each team/project has different requirements would be useful to consultant knowledge and experience in UI development here.

# TBD

* Integration with GraphQL
* Integration with Spring
* Integration with Apollo
* Integration with CI
* Automation on E2E testing
* Server Side rendering
* Improve SEO

# Important documentation

* Most updated documentation for [create-react-app](https://github.com/facebook/create-react-app)
* Latest news in [react blog](https://reactjs.org/blog)
* [React documentation](https://reactjs.org/docs)
* [How to think in react](https://reactjs.org/docs/thinking-in-react.html) and break down components

# Basic requirements

## xcode

1. Install xcode from app store
1. Open xcode and agree to license and finish the installation

## Install node.js and npm

### Install with [homebrew](https://brew.sh/)

1. `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
1. `brew doctor`
1. `brew install node`

### Install with [nvm](https://github.com/creationix/nvm)

1. `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`
1. `nvm install node`
1. `nvm alias default node`

### Install with [n](https://github.com/tj/n)

1. Follow [readme](https://github.com/tj/n)

## [create-react-app](https://github.com/facebookincubator/create-react-app)

1. `npm install -g create-react-app`

## [serve](https://github.com/zeit/serve)

1. `npm install -g serve`

## [watchman](https://facebook.github.io/watchman/)

1. `brew install watchman`

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

# Client side routing

We use [react-router](https://reacttraining.com/react-router/) which is very simple to use and setup. Basic setups are done, enjoy routing in development and production enviroments.

# Code Splitting

There are two ways to split your code and create chunks for production. First way is to use [dynamic import](https://reactjs.org/docs/code-splitting.html) and the second way is to use react-router and [react-loadable](https://github.com/thejameskyle/react-loadable) as it's described [here](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html). In this repo the second approach is used. Using react-loadable you can load your async component base on events like route changes or you can preload them base on event like mouse over or even on first time app load. Code spliting helps with load performance and caching.

# State managment with Redux

[Redux](https://redux.js.org/) been used in this repo to have a single source of truth for app state. This is very important to make sure all components manage thier internal state and in same time data can be shared and styed immutable. To harvest redux power following packages are used in this repo

* [react-redux](https://github.com/reactjs/react-redux)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [redux-persit](https://github.com/rt2zz/redux-persist)
* [localForage](https://github.com/localForage/localForage)
* [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)

# Async request

In this repo [axios](https://github.com/axios/axios) is been used, it's a promise based HTTP client for the browser and node. For mocking the calls in unit test [moxios](https://www.npmjs.com/package/moxios) is been used.

# Document head

Manage all changes to the document head using [helmet](https://github.com/nfl/react-helmet)

# Basic security

## Update module dependencies

1. `npm install -g npm-check-updates`
1. to see the available updates `ncu`
1. to update the package.json `ncu -u`
1. [documantation](https://www.npmjs.com/package/npm-check-updates)

## Node Security (nsp)

1. `npm install -g nsp`
1. to check for security issues run `nsp check --output summary`
1. [documantation](https://www.npmjs.com/package/nsp)

## Snyk Security for Node.js

1. `npm install -g snyk`
1. `snyk auth`
1. to test for vulnerabilities run `snyk test`
1. follow the steps to fix issues
1. [documantation](https://snyk.io/)

## Helmetjs

For nodejs and express try to implement all modules suggested by [helmetjs](https://helmetjs.github.io/docs/). The default modules has been implemented in this repo for the rest HTTPS is required

# Localization

There are two options [react-intl](https://github.com/yahoo/react-intl) and [i18next](https://www.i18next.com/) in this repo i18next is been setup you can use it localize in react and nodejs.

# Useful Chrome add-on

* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
* [Dom listener](https://chrome.google.com/webstore/detail/domlistener/jlfdgnlpibogjanomigieemaembjeolj?hl=en)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=en)

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
