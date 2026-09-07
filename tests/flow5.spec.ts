import { test, expect } from '@playwright/test';

test('Flow 5 - Complete Checkout', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('fizza123456@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Fizza@1234');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Logged in as Fizza Afzal')).toBeVisible();

  await page.getByRole('link', { name: ' Products' }).click();

  await page.getByRole('link', { name: ' View Product' }).first().click();

  await page.getByRole('button', { name: ' Add to cart' }).click();

   await page.getByRole('link', { name: /Cart/ }).click();
  await expect(page.getByText('Blue Top')).toBeVisible();

  await page.getByText('Proceed To Checkout').click();

  await expect(page.locator('#address_invoice')).toContainText('Mrs. Fizza Afzal');

  await expect(page.locator('#address_delivery')).toContainText('Mrs. Fizza Afzal');

  await expect(page.locator('#cart_info')).toContainText('Blue Top');

  await page.locator('textarea[name="message"]').fill('Please deliver my order carefully.');

  await page.getByRole('link', { name: 'Place Order' }).click();

  await page.locator('input[name="name_on_card"]').fill('Fizza Afzal');
  await page.locator('input[name="card_number"]').fill('1234567890123456');
  await page.getByRole('textbox', { name: 'ex.' }).fill('311');
  await page.getByRole('textbox', { name: 'YYYY' }).fill('2027');
  await page.getByRole('textbox', { name: 'MM' }).fill('12');

  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();

  await expect(page.getByText('Order Placed!')).toBeVisible();

  await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
});