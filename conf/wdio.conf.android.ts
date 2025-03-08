import { config } from './wdio.conf'


config.services = [['appium',
    {
        logPath: './appium_logs',
        args: { port: 4723 }
    }]]

config.capabilities = [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '15.0',
    'appium:automationName': 'UiAutomator2',

    'appium:appPackage': 'com.android.chrome',
    'appium:appActivity': 'com.google.android.apps.chrome.Main',
}]

exports.config = config