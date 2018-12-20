import fs = require('fs');
import path = require('path');

export namespace PalindromeTestGlobals {
    interface SiteLogin {
        name: string;
        password: string;
    }

    interface SiteVars {
        protocal: string;
        host: string;
        environment: string;
        site: string;
        path: string;
        logins: SiteLogin[];
    }

    export const siteVars: SiteVars = {
        protocal: 'http://',
        host: '',
        environment: '',
        site: '',
        path: '',
        logins: [
            {name: 'test', password: 'password'}
        ]
    };

    export function updateFromUrl (url: string): void {
        const regx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www.)/gi;
        const major = (((url || '').split(regx) || []).pop() || '').split('/');
        const minor = major[0].split('.');

        if (minor.includes('com') && minor.length === 5) {
            siteVars.site = `${major[0]}`;
            siteVars.host = `${minor[1]}.${minor[2]}.${minor[3]}.${minor[4]}`;
            siteVars.environment = `${minor[0]}`;
            siteVars.path = `${major[1] || ''}`;
        }
    }

    export function writeOutPalindromes (palindromesCount: number, palindromesList: string): void {
        const outDirPath = path.join(__dirname, '../../../', 'out');
        const formattedStr = `${new Date()}\t--\tcount: ${palindromesCount}\n${palindromesList}\n\n`;
        fs.appendFile(path.join(outDirPath, 'palindromes.txt'), formattedStr, 'utf8', (err) => {
            if (err) throw err;
            console.log(`Appended palindromes text to file ${path.join(outDirPath, 'palindromes.txt')}.`);
        });
    }
}
