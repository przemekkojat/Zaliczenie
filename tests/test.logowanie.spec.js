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
    await login.clickLoginButton()
    await login.clickLogoutButton();

});
