import { $ } from '@wdio/globals'
import BasePage from './basepage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    public get rentEquipmentButton () {
        return $('.home-hero-rent-btn');
    }

    public get exploreT3Button () {
        return $('.home-hero-t3-btn');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }

    public verifyButtonIsDisplayed(buttonName: string, timeoutVal: number) {
        let element
        switch (buttonName) {
            case 'Rent Equipment':
                element = this.rentEquipmentButton;
                break;
            case 'Explore T3':
                element = this.exploreT3Button;
                break;
            // Add more cases as needed
        }

        if (element) {
            element.waitForExist({timeout:timeoutVal});
            expect(element).toBeDisplayed();
        }

    }

}

export default new HomePage();
