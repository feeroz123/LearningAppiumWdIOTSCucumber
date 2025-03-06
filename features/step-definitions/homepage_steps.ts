import { Given, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
    await pages[page].open()
});

Then(/^I should see the '(.+)' button in the (\w+) page$/, async (buttonName: string, page: keyof typeof pages) => {
    const timeoutVal=15000
    pages[page].verifyButtonIsDisplayed(buttonName, timeoutVal);
});



