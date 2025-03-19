# Installation
Run `npm install`

# Preparation
1. To run in a local Android AVD, make sure the AVD is up with the details as mentioned in the `wdio.conf.android.ts` file.

# Execution
1. To execute in LOCAL ANDROID AVD:
    ```sh
    npm run wdio:android
    ```
2. To execute in LOCAL WINDOWS:
    ```sh
    npm run wdio:windows
    ```
3. To execute in BROWSERSTACK:
    - For Desktop devices:
        ```sh
        npm run wdio:desktop-bstack
        ```
    - For Android Mobile device:
        ```sh
        npm run wdio:android-bstack
        ```
    - For IOS Mobile device:
        ```sh
        npm run wdio:ios-bstack
        ```

# Reporting
Execute this command to generate and serve the Allure report:
```sh
allure generate allure-results && allure open