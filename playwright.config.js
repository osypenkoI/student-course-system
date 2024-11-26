import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests', // Тепер Playwright шукає тести в папці tests
    testMatch: [
        'e2e/**/*.test.js', // Виконувати тільки e2e тести
        'screenshot/**/*.test.js', // Виконувати тільки screenshot тести
    ],
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        headless: true,
    },
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
    webServer: {
        command: 'npx http-server ./src -p 3000',
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },
});

