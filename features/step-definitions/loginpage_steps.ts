import { Then } from '@wdio/cucumber-framework';

import loginPage from '../pageobjects/login.page';

Then('I should be navigated to the login page', async () => {
    await loginPage.verifyElementDisplay(loginPage.getWelcomeHeading, 10000);
})

