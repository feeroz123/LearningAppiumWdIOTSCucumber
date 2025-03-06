import { config } from './wdio.conf.ts'
process.env.DEVICE = 'Android'

let run_env = process.env.RUN_ENV || 'local'
if (run_env === 'local') {
    config.services = [['appium',
        {
            logPath: './appium_logs',
            args: { port: 4723 }
        }]]

    config.capabilities = [{
        // capabilities for local Appium tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',

        'appium:appPackage': 'com.android.chrome',
        'appium:appActivity': 'com.google.android.apps.chrome.Main',
    }]
}
else {
    console.log('Usage=> RUN_ENV=local npm run wdio:windows')
    console.log('===> OR PUT THE BROWSERSTACK CAPABILITIES HERE <===')
}

exports.config = config