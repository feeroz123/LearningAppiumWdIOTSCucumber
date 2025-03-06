# Installation

Run `npm install`

# Preparation

1. To run in a local Android AVD, make sure the AVD is up with the details as mentioned in the `wdio.conf.android.ts` file.

# Execution

1. To execute in LOCAL ANDROID AVD:
    ```sh
    RUN_ENV=local npm run wdio:android
    ```
2. To execute in LOCAL WINDOWS:
    ```sh
    RUN_ENV=local npm run wdio:windows
    ```

# Reporting

Execute this command to generate and serve the Allure report:
```sh
allure generate allure-results && allure open