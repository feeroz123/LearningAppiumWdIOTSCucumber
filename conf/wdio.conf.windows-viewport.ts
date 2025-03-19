import { config } from './wdio.conf'

console.log('Running on local machine in Viewport mode')

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

// Set the viewport of the window before running the tests
// All 3 parameters are required in this method for the viewport sizing to work
config.before = async function (capabilities, specs, browser) {
    await browser.setViewport({ width: 320, height: 642 })
    console.log("Viewport size is set")
}

exports.config = config
