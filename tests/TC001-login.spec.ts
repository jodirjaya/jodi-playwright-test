import { test, expect } from '@playwright/test';

test('[TN-TC-001] Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(2000); // waiting for 2s (2000 ms)
  await expect(page.locator('text=Products')).toBeVisible(); //validator
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.locator('[data-test="login-credentials"]').click();
});

test('[TN-TC-002] Login with Blank Password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');//validator
  await page.waitForTimeout(2000); // waiting for 2s (2000 ms)
});

test('[TN-TC-003] Login with Blank Username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');//validator
  await page.waitForTimeout(2000); // waiting for 2s (2000 ms)
});

test('[TN-TC-004] Login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('Invalid_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('not secret');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');//validator
  await page.waitForTimeout(2000); // waiting for 2s (2000 ms)
});