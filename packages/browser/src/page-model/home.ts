import { Page, PageDefaults } from './base';
import { Selector, t } from 'testcafe';
import { PalindromeTestGlobals as pg } from '@votem-palindrometest/common';

export default class HomePage extends PageDefaults implements Page {
    public morePalindromesBtn: Selector;
    public path: string = '/home';

    constructor () {
        super ();
        this.morePalindromesBtn = Selector('button').withText('More Palindromes!');
    }

    public async goTo () {
        await t.navigateTo(`${pg.siteVars.site}${this.path}`);
        await this.isReady();
    }

    public async isReady (): Promise<boolean> {
        await t.expect(this.getUrl()).contains(this.path, { timeout: 10000 });
        return await this.morePalindromesBtn.with({ visibilityCheck: true, timeout: 10000 })().exists;
    }

    public async clickMorePalindromes (): Promise<TestControllerPromise> {
        await t
            .setNativeDialogHandler((alert, msg) => {
                console.log(`Clicking on native ${alert} msg: ${msg}`);
            })
            .click(this.morePalindromesBtn);
    }

    public async getPalindromesFromPopup (): Promise<string[]> {
        const alertWords = (await t.getNativeDialogHistory()).reduce((ac, cv) => {
            const text = cv.text;
            if (text) text.split(/\W/).forEach((w) => ac.push(w));
            return ac;
        }, <string[]>[]); // tslint:disable-line

        return alertWords.filter((w) => this.isPalindrome(w));
    }

    public async getPalindromes (): Promise<string[]> {
        const radioLabelWords = await this.getTextFromAll(Selector('input[type="radio"] + span'));
        const textInputValueWords = await this.getValueFromAll(Selector('input[type="text"]'));
        const textCheckBoxLabelWords = await this.getTextFromAll(Selector('input[type="checkbox"] + div'));
        const dropdownOptionsWords = await this.getTextFromAll(Selector('option'));
        const tdWords = await this.getTextFromAll(Selector('td'));

        // these are not displayed but exist in the DOM;
        const textInputLabelWords = await this.getTextFromAll(Selector('label.sr-only'));

        const allWords = Array.prototype.concat(radioLabelWords, textInputLabelWords, textInputValueWords, textCheckBoxLabelWords, dropdownOptionsWords, tdWords);
        return allWords.filter((w) => this.isPalindrome(w));
    }

    private async getTextFromAll (selector: Selector): Promise<string[]> {
        const words = [];
        for (let i = 0; i < await Selector(selector).count; i++) { words.push(await selector.nth(i).innerText); }
        return words;
    }

    private async getValueFromAll (selector: Selector): Promise<string[]> {
        const words = [];
        for (let i = 0; i < await Selector(selector).count; i++) {
            const word = await selector.nth(i).value;
            if (word) { words.push(word); }
        }
        return words;
    }

    private isPalindrome (word: string): boolean {
        return word.split('').reverse().join('') === word;
    }
}
