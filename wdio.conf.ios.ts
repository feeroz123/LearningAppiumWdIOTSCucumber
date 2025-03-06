import { config } from './wdio.conf.ts'

config.services =
    [['appium', {
        logPath: './appium_logs',
        args: {
            port: 4724
        }
    }]]

config.capabilities = [{
    platformName: 'ios',
    'appium:deviceName': 'iPhone 11 Pro',
    'appium:platformVersion': '14',
    'appium:automationName': 'XCUITest',
    
    'appium:appPackage': 'com.android.chrome',
    'appium:appActivity': 'com.google.android.apps.chrome.Main',
}]

config.logLevel = 'info'

exports.config = config