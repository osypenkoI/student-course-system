import { Course, Student } from './models.js';// Імпортуємо класи з models.js

console.log('students.js завантажено');

// Створення студентів і курсів
const student1 = new Student(1, 'Іван');
const student2 = new Student(2, 'Марія');

const course1 = new Course('Математика');
const course2 = new Course('Фізика');

// Реєстрація студентів на курси
course1.enroll(student1);
course1.enroll(student2);
course2.enroll(student1);

// Додавання оцінок студентам
student1.addGrade(course1, 4);
student1.addGrade(course2, 5);
student2.addGrade(course1, 3);

// Додавання студентів на сторінку
const studentsContainer = document.getElementById('students-container');

const renderStudents = (students) => {
    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML = `
            <h2>Студент: ${student.name}</h2>
            <p>Курси:</p>
            <ul>
                ${student.courses.map(course => `<li class="course">${course.name}</li>`).join('')}
            </ul>
            <p>Оцінки:</p>
            <ul class="grades">
                ${student.grades.map(grade => `<li>${grade.course.name}: ${grade.grade}</li>`).join('')}
            </ul>
            <p>Середній бал: ${student.getAverageGrade().toFixed(2)}</p>
        `;
        studentsContainer.appendChild(studentDiv);
    });
};

// Викликаємо функцію для відображення студентів на сторінці
renderStudents([student1, student2]);
