// integration.test.js
const { Student, Course } = require('../src/models.js');

describe('Course and Student integration tests', () => {
    let student1;
    let student2;
    let course1;
    let course2;

    beforeEach(() => {
        student1 = new Student(1, 'John Doe');
        student2 = new Student(2, 'Jane Smith');
        course1 = new Course('Mathematics');
        course2 = new Course('Physics');
    });

    test('should enroll students in different courses', () => {
        course1.enroll(student1);
        course2.enroll(student2);

        expect(course1.students).toContain(student1);
        expect(course2.students).toContain(student2);
    });

    test('should calculate the average grade across multiple courses', () => {
        course1.enroll(student1);
        course2.enroll(student1);

        student1.addGrade(course1, 85);
        student1.addGrade(course2, 90);

        expect(student1.getAverageGrade()).toBe(87.5);
    });
});
