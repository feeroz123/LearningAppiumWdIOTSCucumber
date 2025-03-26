import { $ } from '@wdio/globals'
import BasePage from './base.page';

class LoginPage extends BasePage {

    private welcomeHeading = 'h1=Welcome'
    private emailAddress = '#userIdentifier'
    private emailErrorMessage = '#error-userIdentifier';
    private forgotPassword = 'Forgot password?'
    private password = '#password'
    private passwordErrorMessage = '#error-password'
    private continueButton = 'button=Continue'

    public get getWelcomeHeading() {
        return $(this.welcomeHeading)
    }

    public get getEmailAddress() {
        return $(this.emailAddress)
    }

    public get getEmailErrorMessage() {
        return $(this.emailErrorMessage)
    }

    public get getForgotPasswordLink() {
        return $(this.forgotPassword)
    }

    public get getPassword() {
        return $(this.password)
    }

    public get getPasswordErrorMessage() {
        return $(this.passwordErrorMessage)
    }

    public get getContinueButton() {
        return $(this.continueButton)
    }

}

export default new LoginPage();