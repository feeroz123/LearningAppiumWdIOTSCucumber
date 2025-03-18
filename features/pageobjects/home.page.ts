import { $ } from '@wdio/globals'
import BasePage from './basepage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {

    private rentEquipmentBtn = '.home-hero-rent-btn'
    private exploreT3Btn = '.home-hero-t3-btn'
    private userIconBtn = '#esr-user-dropdown-menu button'
    private signInBtn = "(//button[text()='Sign In'])[1]"


    public get getRentEquipmentButton() {
        return $(this.rentEquipmentBtn);
    }

    public get getExploreT3Button() {
        return $(this.exploreT3Btn);
    }

    public get getUserIconButton() {
        return $(this.userIconBtn);
    }

    public get getSignInButton() {
        return $(this.signInBtn)
    }


    public open() {
        return super.open('/');
    }


}

export default new HomePage();
