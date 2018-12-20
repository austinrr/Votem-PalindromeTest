import { Page, PageDefaults } from './base';
import { Selector, t} from 'testcafe';
import { PalindromeTestGlobals as pg } from '@votem-palindrometest/common';

export default class LoginPage extends PageDefaults implements Page {
    public path: string = '/login.html';

    private emailInput: Selector;
    private passwordInput: Selector;

    constructor () {
        super();
        this.emailInput = Selector('input#inputUsername');
        this.passwordInput = Selector('input#inputPassword');
    }

    public async goTo (): Promise<void> {
        await t
            .navigateTo(`${pg.siteVars.protocal}${pg.siteVars.site}${this.path}`);
        await this.isReady();
    }

    public async isReady (): Promise<boolean> {
        await t.expect(this.getUrl()).contains(this.path, { timeout: 10000 });
        return await this.emailInput.with({ visibilityCheck: true })().exists;
    }

    public async signIn (user: string, password: string): Promise<void> {
        user ? await t.typeText(this.emailInput, user) : await true;
        password ? await t.typeText(this.passwordInput, password) : await true;
        await t.click(Selector("button[type='submit']"));
    }

    public async checkAlert (): Promise<string> {
        return await Selector('div#alert').innerText;
    }
}
