import { config } from './wdio.conf';

console.log('Running on Browserstack - App Automate')

//config.specs = ['../features/**/*.feature']
//config.cucumberOpts.require = ['./features/step-definitions/**/*.ts']

config.capabilities = [{
    platformName: 'ios',
    'appium:automationName': 'XCUITest',
    'appium:platformVersion': '18',
    'autoAcceptAlerts': true
}]

// As Browsertack uses WebDriver implementations to interact
config.services = [
    ['appium',
        {
            logPath: './appium_logs',
            args: { port: 4724 }
        }
    ]
];

const parallelConfig = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    maxInstances: 1,
    services: [
        [
            'browserstack',
            {
                buildIdentifier: '#${BUILD_NUMBER}',
                testObservability: true,
                testObservabilityOptions: {
                    projectName: "ES",
                    browserstackLocal: true
                },
            }

        ]
    ],
    capabilities: [
        {
            // Launches Chrome browser in WebKit with a display of Safari browser
            browserName: 'chrome',
            'bstack:options': {
                deviceName: 'iPhone 16 Pro Max',
                platformVersion: '18',
                deviceOrientation: 'portrait'
            }
        },
        {
            browserName: 'safari',
            'bstack:options': {
                deviceName: 'iPhone 16 Pro Max',
                platformVersion: '18',
                deviceOrientation: 'portrait'
            },
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            buildName: `wdio-ios-mobile-build`,
            networkLogs: true,
            consoleLogs: 'info'
        }
    },
};

exports.config = { ...config, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});