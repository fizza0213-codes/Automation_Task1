
import { test, expect } from '@playwright/test';

test('Flow 3 - Product Search', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: ' Products' }).click();

  await page.getByRole('textbox', { name: 'Search Product' }).fill('blue top');

  await page.locator('#submit_search').click();

  await expect(page.getByText('Searched Products')).toBeVisible();

  await expect(page.getByText('Blue Top').first()).toBeVisible();

  await page.getByText('Blue Top').first().click();

  await expect(page.getByText('Blue Top').first()).toBeVisible();

  await expect(page.getByText('Rs. 500')).toBeVisible();

  await expect(page.getByText('Availability: In Stock')).toBeVisible();

});

