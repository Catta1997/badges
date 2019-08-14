# Badges

> Automatically render project badges into readme and documentation files.

##### Publishing Status

![Status](https://img.shields.io/badge/status-production-green.svg?style=flat) [![npm](https://img.shields.io/npm/v/@thebespokepixel/badges.svg?logo=npm)](https://www.npmjs.com/package/@thebespokepixel/badges "npm") [![David](https://david-dm.org/thebespokepixel/badges/master/status.svg)](https://david-dm.org/thebespokepixel/badges/master "David") [![Travis](https://img.shields.io/travis/com/thebespokepixel/badges/master?style=flat&logo=travis)](https://travis-ci.com/thebespokepixel/badges "Travis") [![Rollup](https://img.shields.io/badge/es6-module%3Amjs_%E2%9C%94-64CA39.svg?&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZmlsbD0iI0ZGMzMzMyIgZD0iTTEwLjkwNDI4MjQsMy4wMDkxMDY4MyBDMTEuMjM4NzA1NSwzLjU4MjgzNzEzIDExLjQyODU3MTQsNC4yNDQ4MzM2MyAxMS40Mjg1NzE0LDQuOTUwOTYzMjIgQzExLjQyODU3MTQsNi40MTc4NjM0IDEwLjYwODY5NTcsNy42OTU2MjE3MiA5LjM5MTgyNzM5LDguMzc2NTMyNCBDOS4zMDU1MjQ2OCw4LjQyNDg2ODY1IDkuMjczMTYxMTYsOC41MzIwNDkwNCA5LjMxODQ3MDA5LDguNjE4MjEzNjYgTDExLjQyODU3MTQsMTMgTDUuMjU4NjgyODEsMTMgTDIuMzM5Nzc3MjMsMTMgQzIuMTUyMTIzNDUsMTMgMiwxMi44NDgyNzU3IDIsMTIuNjUzODA0OCBMMiwxLjM0NjE5NTIyIEMyLDEuMTU0OTk2ODggMi4xNDgzMTU0MywxIDIuMzM5Nzc3MjMsMSBMNy42NjAyMjI3NywxIEM3LjcwMTU0MTQ5LDEgNy43NDExMzc2NCwxLjAwNzM1NTg4IDcuNzc3NzY2NTgsMS4wMjA5MDQyOSBDOS4wNjQ1MzgyOCwxLjE0NDU0MDA0IDEwLjE3MzM4ODQsMS44NTM4NTI5MSAxMC44MjIyOTQ5LDIuODcyNTA0MzggQzEwLjc5OTE5NTMsMi44NDQ4NDgwNiAxMC44NDQ0OTkxLDIuOTQ5MTc0NzYgMTAuOTA0MjgyNCwzLjAwOTEwNjgzIFoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjMxIiBkPSJNOC44NTcxNDI4NiwzLjU3MTQyODU3IEw2LjcxNDI4NTcxLDYuNTcxNDI4NTcgTDkuMjg1NzE0MjksNS4yODU3MTQyOSBDOS4yODU3MTQyOSw1LjI4NTcxNDI5IDkuNzE0Mjg1NzEsNC44NTcxNDI4NiA5LjI4NTcxNDI5LDQuNDI4NTcxNDMgQzkuMjg1NzE0MjksNCA4Ljg1NzE0Mjg2LDMuNTcxNDI4NTcgOC44NTcxNDI4NiwzLjU3MTQyODU3IFoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQkIwNDAiIGQ9Ik0yLjg0Njc0NjAzLDEyLjk5NTg0OTUgQzMuMjY0OTIwNjIsMTIuOTk1ODQ5NSAzLjE4NTkzMDM0LDEyLjk0NjM2NjkgMy4zMTYxMTYzOCwxMi44NzM5MDU0IEMzLjYxODE3NTg3LDEyLjcwNTc3OTMgNS42ODk0NDA5OSw4LjcxMjc4NDU5IDcuNzE3NTU0NzYsNi44MjEzNjYwMiBDOS43NDU2Njg1Miw0LjkyOTk0NzQ2IDEwLjAwNDU3NjcsNS41NjA0MjAzMiA4Ljg4NDc5ODk1LDMuNTAyOTc3MjMgQzguODg0Nzk4OTUsMy41MDI5NzcyMyA5Ljc0NzgyNjA5LDUuMTQyMjA2NjUgOS4wMTQyNTMwMiw1LjI2ODMwMTIzIEM4LjQzODE4MjQxLDUuMzY3MDc1MzEgNy4xMTk5MDg0Nyw0LjEyMjk0MjIxIDcuNjExODMzOTMsMy4wMDQ5MDM2OCBDOC4wOTA4MTM5OSwxLjkxNDE4NTY0IDEwLjAxOTY3OTYsMi4xMjAxNDAxMSAxMC45MDY0NCwzLjAwOTEwNjgzIEMxMC44NzgzOTE2LDIuOTYyODcyMTUgMTAuODUwMzQzMiwyLjkxNjYzNzQ4IDEwLjgyMjI5NDksMi44NzI1MDQzOCBDMTAuMzA0NDc4NiwyLjI1MjUzOTQgOS41MDQwMjA5MiwxLjkwMzY3Nzc2IDguNzEwMDM1OTYsMS45MDM2Nzc3NiBDNy4xOTk3Mzg0OCwxLjkwMzY3Nzc2IDYuODIwMDA2NTQsMi40MjY5NzAyMyAzLjkyMDIzNTM3LDcuNjE5OTY0OTcgQzIuMzg3Nzk5MzQsMTAuMzY1NDA2NyAyLjAxMDgzMTkzLDExLjU3MzUwNzkgMi4wMDYyOTA2OSwxMi4xNjk4MTgyIEMyLDEyLjk5NTg0OTUgMi4wMDYyOTA2OSwxMi45OTU4NDk1IDIuODQ2NzQ2MDMsMTIuOTk1ODQ5NSBaIi8%2BCiAgPC9nPgo8L3N2Zz4K)](https://github.com/rollup/rollup/wiki/pkg.module "Rollup")   

##### Development Status (develop branch)

[![Greenkeeper](https://badges.greenkeeper.io/thebespokepixel/badges.svg)](https://greenkeeper.io/ "Greenkeeper") [![Travis](https://img.shields.io/travis/com/thebespokepixel/badges/develop?style=flat&logo=travis)](https://travis-ci.com/thebespokepixel/badges "Travis")  
 [![David](https://david-dm.org/thebespokepixel/badges/develop/status.svg)](https://david-dm.org/thebespokepixel/badges/develop "David") [![David-developer](https://david-dm.org/thebespokepixel/badges/develop/status.svg)](https://david-dm.org/thebespokepixel/badges/develop?type=dev "David-developer")  
 [![Snyk](https://snyk.io/test/github/thebespokepixel/badges/badge.svg)](https://snyk.io/test/github/thebespokepixel/badges "Snyk") [![Code-climate](https://api.codeclimate.com/v1/badges/07f2fcfc32f33b4acc05/maintainability)](https://codeclimate.com/github/thebespokepixel/badges/maintainability "Code-climate") [![Coverage](https://api.codeclimate.com/v1/badges/07f2fcfc32f33b4acc05/test_coverage)](https://codeclimate.com/github/thebespokepixel/badges/test_coverage "Coverage")   

##### Documentation

[![Inch](https://inch-ci.org/github/thebespokepixel/badges.svg?branch=master)](https://inch-ci.org/github/thebespokepixel/badges "Inch")   


## Usage

#### Installation

```shell
npm install --save @thebespokepixel/badges
```

#### Example

With this source.markdown:

```markdown
  Badges:
  ${badges}
```

Read it in as a template and merge the AST:

```js
/* Import the module… */
import {readFileSync} from 'fs'
import _ from 'lodash'
import remark from 'remark'
import badges from 'badges'

/* …then read the 'badges.readme' stanza from package.json and send the AST into remark etc. */
const content = {
  badges: await badges('readme')
}

const template = _.template(readFileSync('./source.markdown'))
const page = await remark().process(template(content))
```


## Supported badges

-   Status (plus similar aux1 and aux2)
-   Travis
-   Travis Pro (requires a `travis` private repo token)
-   David and David-dev
-   CodeClimate and CodeClimate-coverage (requires a `codeclimate` repo token)
-   Inch CI
-   npm
-   Rollup
-   Snyk
-   Gitter
-   Greenkeeper
-   Greenkeeper Pro (requires a `greenkeeper` private repo token)


## Configuration

In `package.json`...

    ...
    "badges": {
      "github": "MarkGriffiths", // github user
      "npm": "thebespokepixel", // npm user
      "codeclimate": "a0a755b0fce22eb0b784", // codeclimate repo token
      "travis": "1a2b3c4d", // Travis 'Pro' private repo token
      "greenkeeper": "1a2b3c4d", // Greenkeeper private repo token
      "name": "badges", // Package name
      "style": "flat", // Badge style (default 'flat')
      "providers": { // Non-default badge provider configuration
        "status": {
          "text": "beta",
          "color": "blue"
        },
        "aux1": {
          "title": "github",
          "text": "source",
          "color": "4E73B6",
          "link": "https://github.com/MarkGriffiths/badges"
        }
      }
      "readme": { // Section with subtitles as map of arrays
        "Status": [
          [ "status", "npm", "travis", "david" ],
          [ "code-climate", "code-climate-coverage", "snyk" ]
        ],
        "Developer": [ "david-dev", "rollup" ],
        "Help": [ "inch", "gitter" ]
      },
      "docs": [ // Lines as an array of arrays
        [ "aux1", "travis" ],
        [ "code-climate", "code-climate-coverage" ],
        [ "david" ]
      ]
    }


## Documentation

Full documentation can be found at [https://markgriffiths.github.io/badges/][1]

[1]: https://markgriffiths.github.io/badges/
