const { test, expect } = require('@playwright/test');

test('Скриншот всієї сторінки', async ({ page }) => {
    // Відкрити сторінку
    await page.goto('http://localhost:3000');

    // Зробити скріншот всієї сторінки
    const screenshot = await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });

    // Перевірити, що скріншот відповідає базовому
    expect(screenshot).toMatchSnapshot('full-page.png');
});

test('Скриншот контейнера студентів', async ({ page }) => {
    // Відкрити сторінку
    await page.goto('http://localhost:3000');

    // Локалізувати контейнер студентів
    const container = page.locator('#students-container');

    // Зробити скріншот контейнера
    const screenshot = await container.screenshot({ path: 'screenshots/students-container.png' });

    // Перевірити, що скріншот відповідає базовому
    expect(screenshot).toMatchSnapshot('students-container.png');
});
