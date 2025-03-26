import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open(path: string) {
        await browser.url(`https://equipmentshare-us-7fcd6ee2fbc58ac5b15ef.webflow.io${path}`)
    }

    public async sleep(ms: number): Promise<void> {
        return await new Promise((resolve) => setTimeout(resolve, ms));
    }

    public async verifyElementDisplay(element: ChainablePromiseElement, timeoutVal: number = 5000) {
        if (element?.waitForExist({ timeoutVal })) {
            await expect(element).toBeDisplayed()
            console.log("Element is displayed")
        }
        else {
            console.log("ERROR: Element is not displayed")
            return false
        }
    }

    public async clickElement(element: ChainablePromiseElement) {
        if (element?.isClickable()) {
            // await element.scrollIntoView();
            await element.click();
            console.log("Element is clicked");
        }
        else {
            console.log("ERROR : Element is not clicked");
        }

    }

    public async enterValue(element: ChainablePromiseElement, value:string){
        if (element?.isClickable) {
            await element.click().clear();
            await element.setValue(value);
            console.log("Entered the value as: " + value);
        }
    }
}
