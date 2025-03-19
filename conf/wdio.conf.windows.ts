import { config } from './wdio.conf'

console.log('Running on local machine')

//config.specs = ['../features/**/*.feature']
//config.cucumberOpts.require = ['./features/step-definitions/**/*.ts']

config.services = ['chromedriver']
config.capabilities = [{
    browserName: 'chrome',
    browserVersion: 'latest',
    'goog:chromeOptions': {
        args: ['--disable-gpu']
    }
}]

// Maximize the window before running the tests
config.before = async function (capabilities, specs, browser) {
    await browser.maximizeWindow()
}

exports.config = config
