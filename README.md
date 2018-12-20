# Palindromes Test Page Automated Front-end Tests using TestCafe

## Test Plan
[Test Plan](https://docs.google.com/spreadsheets/d/14XdVNj-4w_1px2NNezqj0anTQgcDQj2jfWRILuz7JQ4/edit?usp=sharing)

## Thoughts on Project
 * The palindromes website often generates non-english words such as "aa" or "oo", which pass the palindrom test. If I were to improve on my project I would include an english dictionary to filter out non-words.
 * I think the designer intended for the text-input elements to have a label but that element is not displayed despite existing in the dom.
 * The more-plaindromes button should probably add the words to the table rather than being a browser-native dialog as these are hard to interact with in an auotmated fashion and lead to an inconsistent user-experience that cannot be controlled by the design team.
 * The site responds OK but not great to reducing the screen size. For example, a hamburger-button appears and include the Home tab even though there is plenty of room in the nav for it. Additionally the radio button labels move vertically at certain resolutions which is off-putting.

## Pre-requieites
1. NodeJS --lts
2. Yarn

## Getting Started
1. Clone repository `git clone git@github.com:catalyticlabs/pushbot-autotest.git`
2. Download dependencies `yarn` or `yarn install`
3. Build packages `yarn build`

## Running Tests Locally
> You can run locally assuming you have the device/browser installed
* `node .\packages\browser\dist\index.js --test smoke --browser chrome --remote false --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (windows)
* `node ./packages/browser/dist/index.js --test smoke --browser chrome --remote false --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (mac)

## Running Tests on SauceLabs
> set environment vars `$env:SAUCE_USERNAME = 'redacted'` & `$env:SAUCE_ACCESS_KEY = 'redacted'` (windows)
> set environment vars `export SAUCE_USERNAME="redacted"` & `export SAUCE_ACCESS_KEY="redacted"` (mac)
* `node .\packages\browser\dist\index.js --test smoke --browser chrome,firefox --remote true --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (windows)
* `node ./packages/browser/dist/index.js --test smoke --browser chrome,firefox --remote true --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (mac)

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
* try cleaning `\dist` using `yarn run clean` or `yarn run clean:full` to wipe `node_modules` as well# Palindromes Test Page Automated Front-end Tests using TestCafe

## Test Plan
[Test Plan](https://docs.google.com/spreadsheets/d/14XdVNj-4w_1px2NNezqj0anTQgcDQj2jfWRILuz7JQ4/edit?usp=sharing)

## Thoughts on Project
 * The palindromes website often generates non-english words such as "aa" or "oo", which pass the palindrom test. If I were to improve on my project I would include an english dictionary to filter out non-words.
 * I think the designer intended for the text-input elements to have a label but that element is not displayed despite existing in the dom.
 * The more-plaindromes button should probably add the words to the table rather than being a browser-native dialog as these are hard to interact with in an auotmated fashion and lead to an inconsistent user-experience that cannot be controlled by the design team.
 * The site responds OK but not great to reducing the screen size. For example, a hamburger-button appears and include the Home tab even though there is plenty of room in the nav for it. Additionally the radio button labels move vertically at certain resolutions which is off-putting.

## Pre-requieites
1. NodeJS --lts
2. Yarn

## Getting Started
1. Clone repository `git clone git@github.com:catalyticlabs/pushbot-autotest.git`
2. Download dependencies `yarn` or `yarn install`
3. Build packages `yarn build`

## Running Tests Locally
> You can run locally assuming you have the device/browser installed
* `node .\packages\browser\dist\index.js --test smoke --browser chrome --remote false --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (windows)
* `node ./packages/browser/dist/index.js --test smoke --browser chrome --remote false --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (mac)

## Running Tests on SauceLabs
> set environment vars `$env:SAUCE_USERNAME = 'redacted'` & `$env:SAUCE_ACCESS_KEY = 'redacted'` (windows)
> set environment vars `export SAUCE_USERNAME="redacted"` & `export SAUCE_ACCESS_KEY="redacted"` (mac)
* `node .\packages\browser\dist\index.js --test smoke --browser chrome,firefox --remote true --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (windows)
* `node ./packages/browser/dist/index.js --test smoke --browser chrome,firefox --remote true --host http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com` (mac)

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