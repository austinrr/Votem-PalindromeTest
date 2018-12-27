import { PalindromeTestGlobals as pg } from '@votem-palindrometest/common';
import LoginPage from '../page-model/login';
import HomePage from '../page-model/home';

const loginPage = new LoginPage();
const homePage = new HomePage();

/* tslint:disable:align */
fixture `Login Tests`
    .beforeEach(async () => {
        await loginPage.goTo();
    });

    test('Bad Login', async (t) => {
        await loginPage.signIn('bad', 'login');
        await t
            .expect(await loginPage.checkAlert()).contains('Username or Password is incorrect.')
            .expect(homePage.isReady()).notOk;
    });

    test('Required UserName', async (t) => {
        await loginPage.signIn('test', '');
        await t.expect(homePage.isReady()).notOk;
    });

    test('Required Password', async (t) => {
        await loginPage.signIn('', 'password');
        await t.expect(homePage.isReady()).notOk;
    });

// test webhooks
fixture `Palindrome Tests`
.beforeEach(async () => {
    await loginPage.goTo();
    await loginPage.signIn('test', 'password');
});

    test('Count Palindromes', async () => {
        const palindromes = await homePage.getPalindromes();
        pg.writeOutPalindromes(palindromes.length, palindromes.join(', '));
    });

    test('Click More Palindromes', async (t) => {
        await homePage.clickMorePalindromes();
        await t.expect(homePage.isReady()).ok;
        const palindromes = await homePage.getPalindromesFromPopup();
        await t.expect(palindromes.length).gt(0);
        pg.writeOutPalindromes(palindromes.length, palindromes.join(', '));
    });
