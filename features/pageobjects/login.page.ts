import { $ } from '@wdio/globals'
import BasePage from './basepage';

class LoginPage extends BasePage {

    private welcomeHeading = 'h1=Welcome'
    private emailAddress = '#userIdentifier'
    private continueButton = 'button=Continue'

    public get getWelcomeHeading() {
        return $(this.welcomeHeading)
    }

    public get getEmailAddress() {
        return $(this.emailAddress)
    }

    public get getContinueButton() {
        return $(this.continueButton)
    }

}

export default new LoginPage();