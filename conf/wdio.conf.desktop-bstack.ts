import { config } from './wdio.conf';

console.log('Running on Browstack - Automate')

// Hook to maximise the browser
config.before = async function (capabilities, specs, browser) {
    await browser.maximizeWindow()
}

//config.specs = ['../features/desktop/**/*.feature']
//config.cucumberOpts.require = ['./features/step-definitions/**/*.ts']

const parallelConfig = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    maxInstances: 1,
    commonCapabilities: {
        'bstack:options': {
            buildName: 'wdio_desktop_build',
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

        ],
    ],
    capabilities: [
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            'bstack:options': {
                os: 'Windows',
                osVersion: '11',
            },
        }, {
            browserName: 'Safari',
            'bstack:options': {
                os: 'OS X',
                osVersion: 'Sequoia',
                browserVersion: '18.1'
            }
        }
    ],
};

exports.config = { ...config, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});