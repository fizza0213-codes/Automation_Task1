import { test, expect } from '@playwright/test';

test('Flow 1 - User Registration', async ({ page }) => {


  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: /Signup \/ Login/ }).click();

  await page.getByRole('textbox', { name: 'Name' }).fill('Fizza Afzal');

  await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill('fizza123456@gmail.com');

  // 4. Continue with registration
  await page.getByRole('button', { name: 'Signup' }).click();

  // 5. Select title/gender
  await page.getByRole('radio', { name: 'Mrs.' }).check();

  // 6. Enter password
  await page.getByRole('textbox', { name: 'Password *' }).fill('Fizza@1234');

  // 7. Enter date of birth
  await page.locator('#days').selectOption('1');
  await page.locator('#months').selectOption('6');
  await page.locator('#years').selectOption('2008');

  // 8. Fill address information

  await page.getByRole('textbox', { name: 'First name *' }).fill('Fizza');

  await page.getByRole('textbox', { name: 'Last name *' }).fill('Afzal');

  await page
    .getByRole('textbox', { name: 'Company', exact: true })
    .fill('Example');

  // Address
  await page
    .getByRole('textbox', { name: 'Address * (Street address, P.' })
    .fill('123 Main Street');

  // Country
  await page.getByLabel('Country *').selectOption('Canada');

  // State
  await page.getByRole('textbox', { name: 'State *' }).fill('Punjab');

  // City
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Lahore');

  // Zipcode
  await page.locator('#zipcode').fill('54000');

  // Mobile number
  await page
    .getByRole('textbox', { name: 'Mobile Number *' })
    .fill('03001234567');

  // 9. Complete registration
  await page.getByRole('button', { name: 'Create Account' }).click();

  // 10. Verify account has been created successfully
  await expect(
    page.getByText('Account Created!')
  ).toBeVisible();

  // Continue
  await page.getByRole('link', { name: 'Continue' }).click();

  // 11. Verify logged-in user's name is displayed
  await expect(
    page.getByText('Logged in as Fizza Afzal')
  ).toBeVisible();

  // 12. Logout
  await page.getByRole('link', { name: /Logout/ }).click();

  // Verify logout was successful
  await expect(
    page.getByText('Login to your account')
  ).toBeVisible();

});