const { test, expect } = require('@playwright/test');

test('Перевірка відображення студентів і курсів', async ({ page }) => {
    // Відкрити сторінку
    await page.goto('http://localhost:3000');

    // Перевірити заголовок сторінки
    await expect(page).toHaveTitle('Система студентів і курсів');

    // Перевірити, чи відображається контейнер студентів
    const container = page.locator('#students-container');
    await expect(container).toBeVisible();

    // Перевірити наявність студента "Іван"
    const studentIvan = page.locator('text=Іван');
    await expect(studentIvan).toBeVisible();

    // Перевірити наявність курсу "Математика" (перший знайдений елемент)
    const courseMath = page.locator('text=Математика').first();
    await expect(courseMath).toBeVisible();

    // Якщо потрібен конкретний курс у контейнері (уточнений локатор)
    const specificCourseMath = page.locator('#students-container .course:has-text("Математика")').first();
    await expect(specificCourseMath).toBeVisible();
});
