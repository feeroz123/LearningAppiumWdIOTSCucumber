import { config } from '../../wdio.conf';

console.log('Running on Browserstack - Web - Automate')

const parallelConfig = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    maxInstances: 2,
    commonCapabilities: {
        'bstack:options': {
            buildName: 'wdio-ios-mobile-build',
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
                    projectName: "ES"
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
    ]
};

exports.config = { ...config, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});