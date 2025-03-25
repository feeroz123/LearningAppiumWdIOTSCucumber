# Installation
Run `npm install`

# Preparation
1. To run in a local Android AVD, make sure the AVD is up with the details as mentioned in the `wdio.conf.android.ts` file.

# Execution
1. To execute in LOCAL machine:
    - For Android AVD
    ```sh
    npm run wdio:android-local
    ```
    - For Windows
    ```sh
    npm run wdio:windows-local
    ```
    - For Windows in Viewport mode:
    ```sh
    npm run wdio:windows-local-viewport
    ```
3. To execute in BROWSERSTACK:
    - For ALL devices:
        ```sh
        npm run wdio:all-bstack
        ```
    - For Desktop devices:
        ```sh
        npm run wdio:desktop-bstack
        ```
    - For all Mobile devices:
        ```sh
        npm run wdio:mobile-bstack
        ```
    - For Android Mobile device only:
        ```sh
        npm run wdio:android-bstack
        ```
    - For iOS Mobile device only:
        ```sh
        npm run wdio:ios-bstack
        ```

# Reporting
Execute this command to generate and serve the Allure report:
```sh
allure generate allure-results && allure open