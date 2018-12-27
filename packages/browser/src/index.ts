// tslint:disable-next-line:no-var-requires
const createTestCafe = require('testcafe');
import minimist = require('minimist');
import { ParsedArgs } from 'minimist';
import { PalindromeTestGlobals as pg } from '@votem-palindrometest/common';

const argv: ParsedArgs = minimist(process.argv.slice(2), {
    string: ['host', 'test', 'browsers'],
    boolean: ['remote', 'help'],
    default: {test: 'smoke', browsers: 'chrome', help: false, host: 'http://qa-home-palindrome.s3-website.us-east-2.amazonaws.com/login.html'},
    alias: { h: 'help', v: 'version', browser: 'browsers'},
    unknown: unknownArgs
});

function unknownArgs (args: string) {
    console.warn(`Arguments: '${args}' are not suppored, try '-h' or '-help' for more information.`);
    return false;
}

function showHelp () {
    console.log(`
        Usage
        Functional browser testing for Pushbot-Web

        Required
        --host, -host  Site URL for test execution

        Options
        --test  Test suite to run (smoke, regression)
        --browsers  Browser(s) to run tests. Ex) 'Chrome@beta:Windows 10' or 'firefox'
        --remote  If 'true' tests will execute on Saucelabs otherwiser locally (specified browser must exist if local)
        --help -h lists this information
        --version -v lists current version

        Examples
        'node browser/dist/index.js --remote true --test smoke --browser chrome,Firefox@beta'
        'node browser/dist/index.js --remote true --test smoke --browser iPhone X Simulator@12.0'
        'node browser/dist/index.js --remote true --test smoke --browser Safari@11.0:macOS 10.12'
`);
}

let browsers: string[];
function parseArgs () {
    if (argv.help) {
        showHelp();
        process.exit(0);
    }

    if (!argv.host) {
        console.error("Missing host argument, for example, try '--host https://qasmoke.staging.pushbot.io'");
        process.exit(1);
    }

    if (!['smoke', 'regression'].includes(argv.test.toLowerCase())) {
        console.error(`Invalid test argument: '${argv.test}', for example, try '--test smoke'`);
        process.exit(1);
    }

    browsers = argv.browsers.toLowerCase().split(',');
    browsers = browsers.map((b: string) => {
        // const d = !b.includes('@') && !b.includes('safari') ? '' : '@:Windows 10'
        return `${argv.remote ? 'saucelabs:' : ''}${b}`;
    });

    pg.updateFromUrl(argv.host);
    runTestCafe();
}

// test
function runTestCafe () {
    // tslint:disable-next-line:prefer-const
    let testcafe: any = null;

    createTestCafe()
        .then((tc: any) => {
            // tslint:disable-next-line:no-shadowed-variable
            const testcafe = tc;
            const runner = testcafe.createRunner();

            return runner
                .browsers(browsers)
                .src(`**/${argv.test}.js`)
                .run({speed: 0.75});
        })
        .then((failed: any) => {
            console.warn('Tests failed: ' + failed);
            testcafe.close();
        })
        .catch((error: any) => {
            if (error.message !== "Cannot read property 'close' of null") {
                console.error(error);
                process.exit(1);
            }
            process.exit(0);
        });
}

parseArgs();
