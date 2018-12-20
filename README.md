# Pushbot Automated Front-end Tests using TestCafe

## Pre-requieites
1. NodeJS --lts
2. Yarn

## Getting Started
1. Clone repository `git clone git@github.com:austinrr/Votem-PalindromeTest.git`
2. Download dependencies `yarn` or `yarn install`
3. Build packages `lerna run build`
4. Made changes? `lernas run lint`

## Running Tests Locally
> for now don't change the host because login information is hard-coded

> You can run locally assuming you have the device/browser installed
* `node .\packages\browser\dist\index.js --test smoke --browser chrome --remote false --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com/login` (windows)
* `node ./packages/browser/dist/index.js --test smoke --browser chrome --remote false --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com/login` (mac)

## Running Tests on SauceLabs
> set environment vars `$env:SAUCE_USERNAME = 'qa_catalytic'` & `$env:SAUCE_ACCESS_KEY = 'redacted'` (windows)
> set environment vars `export SAUCE_USERNAME="qa_catalytic"` & `export SAUCE_ACCESS_KEY="redacted"` (mac)
* `node .\packages\browser\dist\index.js --test smoke --browser chrome,firefox --remote true --host  http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com/login` (windows)
* `node ./packages/browser/dist/index.js --test smoke --browser chrome,firefox --remote true --host  http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com/login` (mac)

## Supported Browsers
* You should be able to run on any browser you have installed simply by using the common name `chrome`, `firefox`, `safari`
* If you want to run on a specific browser or device you can do so using SauceLabs, you will need to set the environment variables to authenticate the connection
* For a complete list of support browsers run the following command `testcafe -b saucelabs`. You will need `testcafe` installed globally or you can run from `node_modules/testcafe`
* [Officially Supported Browsers](http://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html#officially-supported-browsers)

## Why TestCafe?
First lets examine our requirements:
- [x] Can run remotely on SauceLabs
- [x] Supports multiple browsers and devices *easily*
- [x] Supports Javascript/Typescript so developers can easily pick it up

So why TestCafe over WDIO, WD, or Nightwatch?
* TestCafe has excellent documentation and community support, unlike WD
* TestCafe is easy to debug (visual can step through calls in VSCode's debugger), unlike NightWatch
* TestCafe has better multi-browser support since you don't have to manage a bunch of different selenium drivers
* Here's an [excellent article](http://mo.github.io/2017/07/20/javascript-e2e-integration-testing.html) that compares the the above and more E2E libraries

Take a look at [TestCafe's documentation](http://devexpress.github.io/testcafe/documentation/getting-started/)

## Troubleshooting
* try reading help `-h` eg. `node .\packages\browser\dist\index.js -h`
* try cleaning `\dist` using `yarn run clean` or `yarn run clean:full` to wipe `node_modules` as well