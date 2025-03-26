import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page';

Then('I should be navigated to the Login page', { timeout: 15000 }, async function () {
    // Wait for the page to be fully loaded
    //TODO Add the logic to wait for page load

    let welcomeHeading = loginPage.getWelcomeHeading;
    await welcomeHeading.waitForDisplayed({timeout: 10000});
    await expect(welcomeHeading).toBeDisplayed();
});

Then('I should see the Email field', async function () {
    await expect(loginPage.getEmailAddress).toBeDisplayed();
});

When('I enter {string} in the Email field', async function (invalid_email_address: string) {
    await loginPage.getEmailAddress.setValue(invalid_email_address);
});

When('I click on the Continue button', async function () {
    await loginPage.getContinueButton.click();
});

Then('I should see the Email validation message', async function () {
    await expect(loginPage.getEmailErrorMessage).toBeDisplayed();
});

Then('I should see the Password field', async () => {
    await expect(loginPage.getPassword).toBeDisplayed();
});

Then('I should see the Forgot Password link', async () => {
    await expect(loginPage.getForgotPasswordLink).toBeDisplayed();
});
