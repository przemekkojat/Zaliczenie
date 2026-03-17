// @ts-check

import { test, expect } from '@playwright/test';
import { Login } from '../logowanie.pages';

test.beforeEach(async ({ page }) => {
    await page.goto('/')
});

test('login admin', async ({ page }) => {

    const login = new Login(page);

    await login.fillUserName(process.env.ADMIN_LOGIN);
    await login.fillPasswordField(process.env.ADMIN_PASSWORD);
    await login.clickLoginButton();

    await expect(page.getByTestId('welcome-msg')).toContainText('Witaj: admin');
    await login.clickLogoutButton();
    await expect(page.locator('#login-status')).toMatchAriaSnapshot(`- text: Wylogowano`);
});


test('login user', async ({ page }) => {

    const login = new Login(page);

    await login.fillUserName(process.env.USER_LOGIN);
    await login.fillPasswordField(process.env.USER_PASSWORD);
    await login.clickLoginButton();

    await expect(page.getByTestId('welcome-msg')).toContainText('Witaj: user');
    await login.clickLogoutButton();
    await expect(page.locator('#login-status')).toMatchAriaSnapshot(`- text: Wylogowano`);
});

