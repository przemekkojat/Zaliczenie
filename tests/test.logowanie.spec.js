// @ts-check

import { test, expect } from '@playwright/test';
// test('has title', async ({ page }) => {
//   await page.goto('/');

test('has title', async ({ page }) => {

  await page.goto('/');
  await page.getByTestId('login-username').fill(process.env.ADMIN_LOGIN);
  await page.getByTestId('login-password').fill(process.env.ADMIN_PASSWORD);
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('welcome-msg')).toContainText(`Witaj: admin`);

});await page.getByTestId('login-username').click();
await page.getByTestId('login-username').fill('admin');await expect(page.getByTestId('welcome-msg')).toMatchAriaSnapshot(`- text: "Witaj: admin"`);
await page.getByTestId('login-username').press('Tab');
await page.getByTestId('login-password').fill('admin');
await page.getByTestId('login-button').click();
await page.getByTestId('welcome-msg').click();
await expect(page.getByTestId('welcome-msg')).toMatchAriaSnapshot(`- text: "Witaj: admin"`);