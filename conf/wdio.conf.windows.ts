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

// Maximize the window before running the tests
config.before = function (browser) {
    browser.maximizeWindow();
}

exports.config = config