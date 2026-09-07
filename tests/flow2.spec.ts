
import { test, expect } from '@playwright/test';

test('Flow 2 - Login and Logout', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: /Signup \/ Login/ }).click();

  await page
    .locator('form')
    .filter({ hasText: 'Login' })
    .getByPlaceholder('Email Address')
    .fill('fizza123456@gmail.com');

  await page.getByRole('textbox', { name: 'Password' }).fill('Fizza@1234');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Logged in as Fizza Afzal')).toBeVisible();

  await expect(page.getByText('Logged in as Fizza Afzal')).toBeVisible();

  await page.getByRole('link', { name: /Logout/ }).click();

  await expect(page.getByText('Login to your account')).toBeVisible();

});

