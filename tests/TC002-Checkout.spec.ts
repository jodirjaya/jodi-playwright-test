import { test, expect } from '@playwright/test';

test('[TN-TC001] Checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('text=Checkout: Your Information')).toBeVisible(); //validator
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Jodi');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Last');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('65098');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="title"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!') //validator
  await page.locator('[data-test="complete-header"]').click();
});

test('[TN-TC002] Checkout with Blank Firstname', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('text=Checkout: Your Information')).toBeVisible(); //validator
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Last');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('65098');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Error: First Name is required');//validator
});

test('[TN-TC003] Checkout with Blank Lastname', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('text=Checkout: Your Information')).toBeVisible(); //validator
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Jodi');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('65098');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Error: Last Name is required');//validator
});

test('[TN-TC004] Checkout with Blank Zipcode', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('text=Checkout: Your Information')).toBeVisible(); //validator
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Jodi');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Last');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required');//validator
});

test('[TN-TC005] Remove Cart Function', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('text=Checkout: Your Information')).toBeVisible(); //validator
  await page.locator('[data-test="cancel"]').click();
  await expect(page.locator('text=Your Cart')).toBeVisible(); //validator
  await page.locator('data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Jodi');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Last');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('65098');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="title"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!') //validator
  await page.locator('[data-test="complete-header"]').click();
});