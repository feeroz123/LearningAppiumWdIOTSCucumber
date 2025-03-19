import { config } from './wdio.conf';

console.log('Running on Browserstack - App Automate')

//config.specs = ['../features/**/*.feature']
//config.cucumberOpts.require = ['./features/step-definitions/**/*.ts']

const parallelConfig = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    maxInstances: 1,
    commonCapabilities: {
        'bstack:options': {
            buildName: `wdio-mobile-build`,
            networkLogs: 'true',
            consoleLogs: 'info'
        }
    },
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
        // Android device
        {
            browserName: 'chrome',
            'bstack:options': {
                deviceName: 'Samsung Galaxy S23 Ultra',
                osVersion: '13.0',
                deviceOrientation: 'portrait'
            }
        },
        // IOS device
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
    ]
};

exports.config = { ...config, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});