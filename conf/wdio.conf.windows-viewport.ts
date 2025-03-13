import { config } from './wdio.conf'

console.log('Running on local machine')

config.services = ['chromedriver']
config.capabilities = [{
    browserName: 'chrome',
    browserVersion: 'latest',
    'goog:chromeOptions': {
        args: ['--disable-gpu']
    }
}]

// Set the viewport of the window before running the tests
// All 3 parameters are required in this method for the viewport sizing to work
config.before = async function (capabilities, specs, browser) {
    await browser.setViewport({ width: 320, height: 642 })
}

exports.config = config
