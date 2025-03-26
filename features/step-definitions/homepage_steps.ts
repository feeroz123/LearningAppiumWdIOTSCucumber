import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../pageobjects/home.page';

Given('I am on the home page', async () => {
    await homePage.open()
})

Then("I should see the 'Rent Equipment' button in the home page", async () => {
    await homePage.verifyElementDisplay(homePage.getRentEquipmentButton, 100000)
})

Then("I should see the 'Explore T3' button in the home page", async () => {
    await homePage.verifyElementDisplay(homePage.getExploreT3Button, 100000)
})

Then("I should see the 'Sign In' button in the home page", async () => {
    await homePage.verifyElementDisplay(homePage.getSignInButton, 100000)
})

When("I click on the 'User Icon' button", async () => {
    await homePage.clickElement(homePage.getUserIconButton)
})

When("I click on the 'Sign In' button", async () => {
    await homePage.clickElement(homePage.getSignInButton)
})

