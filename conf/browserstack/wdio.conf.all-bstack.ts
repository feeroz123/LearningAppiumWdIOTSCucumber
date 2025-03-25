import { config } from '../wdio.conf';

console.log('Running on Browstack - Web - Automate')

// Hook to maximise the browser
config.before = async function (capabilities, specs, browser) {
    await browser.maximizeWindow()
}

config.specs = ['../../features/**/*.feature']

const parallelConfig = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    maxInstances: 6,
    commonCapabilities: {
        'bstack:options': {
            buildName: 'wdio_all_build',
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
                },
            }
        ],
    ],
    capabilities: [
        // Desktop devices
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            'bstack:options': {
                os: 'Windows',
                osVersion: '11',
            },
        },
        {
            browserName: 'Safari',
            'bstack:options': {
                os: 'OS X',
                osVersion: 'Sequoia',
                browserVersion: '18.1'
            }
        },
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            'bstack:options': {
                os: 'OS X',
                osVersion: 'Sequoia',
            }
        },
        // Mobile devices
        {
            browserName: 'chrome',
            'bstack:options': {
                deviceName: 'Samsung Galaxy S23 Ultra',
                osVersion: '13.0',
                deviceOrientation: 'portrait'
            }
        },
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
};

exports.config = { ...config, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});