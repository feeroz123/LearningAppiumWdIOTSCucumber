import { config } from './wdio.conf';

config.capabilities = [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '15.0',
    'appium:automationName': 'UiAutomator2',

    'appium:appPackage': 'com.android.chrome',
    'appium:appActivity': 'com.google.android.apps.chrome.Main',
}]

config.services = [
    ['appium',
        {
            logPath: './appium_logs',
            args: { port: 4723 }
        }
    ],
    // TODO: Add XCUI service to support iOS tests
    //[]
];

const parallelConfig = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    maxInstances: 1,
    commonCapabilities: {
        'bstack:options': {
            buildName: 'wdio_mobile_build',
        }
    },
    services: [
        [
            'browserstack',
            {
                buildIdentifier: '#${BUILD_NUMBER}',
                testObservability: true,
                testObservabilityOptions: {
                    projectName: "My Project",
                    buildName: "Mobile Build",
                    browserstackLocal: true
                },
            }

        ]
    ],
    capabilities: [
        // {
        //     browserName: 'safari',
        //     'bstack:options': {
        //         deviceName: 'iPhone 15 Pro Max',
        //         osVersion: '18',
        //         deviceOrientation: 'portrait'
        //     },
        // },
        {
            browserName: 'chrome',
            'bstack:options': {
                deviceName: 'Samsung Galaxy S23 Ultra',
                osVersion: '13.0',
                deviceOrientation: 'portrait'
            }
        },
        // {
        //     browserName: 'chrome',
        //     'bstack:options': {
        //         deviceName: 'iPhone 15 Pro Max',
        //         osVersion: '18',
        //         deviceOrientation: 'portrait'
        //     }
        // }
    ],
};

exports.config = { ...config, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});