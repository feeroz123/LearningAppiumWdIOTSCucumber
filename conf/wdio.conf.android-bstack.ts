import { config } from './wdio.conf';

config.capabilities = [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'autoAcceptAlerts': true,
}]

config.services = [
    ['appium',
        {
            logPath: './appium_logs',
            args: { port: 4723 }
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
                    projectName: "My Project",
                    buildName: "Android Mobile Build",
                    browserstackLocal: true
                },
            }

        ]
    ],
    capabilities: [
        {
            browserName: 'chrome',
            'bstack:options': {
                deviceName: 'Samsung Galaxy S23 Ultra',
                osVersion: '13.0',
                deviceOrientation: 'portrait'
            }
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            buildName: `wdio-android-mobile-build`,
            networkLogs: 'true',
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