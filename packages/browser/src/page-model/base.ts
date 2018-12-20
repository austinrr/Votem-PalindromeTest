import { Selector, ClientFunction, t } from 'testcafe';

export interface Page {
    path: string;
    isReady (t: TestController): Promise<boolean>;
}

class TopNav {
}

class Tabs extends TopNav {
    public brandLink: Selector;
    public homeLink: Selector;

    constructor () {
        super();
        this.brandLink = Selector('nav.navbar a.navbar-brand');
        this.homeLink = Selector('nav.navbar a.nav-link');
    }
}

// class search extends topNav {

// }

export abstract class PageDefaults {
    public tabs: Tabs = new Tabs();

    public getUrl (): Promise<string> {
        return ClientFunction(() => window.location.href)();
    }

    public async clickBrand (): Promise<void> {
        await t.click(this.tabs.brandLink);
    }

    public async clickHome (): Promise<void> {
        await t.click(this.tabs.homeLink);
    }
}
