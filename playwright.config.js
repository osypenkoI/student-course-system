import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: 'tests',

    // Reporter to use
    reporter: 'html',

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'http://localhost:3000',

        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',

        // Run browser in headless mode.
        headless: true,
    },

    // Configure projects for major browsers.
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ],

    // Run your local dev server before starting the tests.
    webServer: {
        command: 'npx http-server ./src -p 3000',
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },
});
