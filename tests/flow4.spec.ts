import { test, expect } from '@playwright/test';

test('Flow 4 - Add Products to Cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: /Products/ }).click();

  await page.getByRole('link', { name: /View Product/ }).first().click();

  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();

  await page.getByRole('button', { name: /Add to cart/ }).click();

  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  await page.getByRole('link', { name: /Products/ }).click();

  await page.getByRole('link', { name: /View Product/ }).nth(1).click();

  await expect(page.getByRole('heading', { name: 'Men Tshirt' })).toBeVisible();

  await page.getByRole('button', { name: /Add to cart/ }).click();

  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  await page.getByRole('link', { name: /Cart/ }).click();

  const cartTable = page.locator('#cart_info_table');

  await expect(cartTable).toContainText('Blue Top');
  await expect(cartTable).toContainText('Men Tshirt');

  await expect(cartTable.locator('tr').nth(1).locator('.cart_quantity')).toContainText('1');
  await expect(cartTable.locator('tr').nth(2).locator('.cart_quantity')).toContainText('1');

  await expect(cartTable.locator('tr').nth(1).locator('.cart_price')).toContainText('Rs.');
  await expect(cartTable.locator('tr').nth(2).locator('.cart_price')).toContainText('Rs.');

  await cartTable.locator('tr').nth(1).locator('.cart_quantity_delete').click();

  await expect(cartTable).not.toContainText('Blue Top');
  await expect(cartTable).toContainText('Men Tshirt');
});