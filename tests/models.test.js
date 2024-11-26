// models.test.js
const { Student, Course } = require('../src/models.js');

describe('Student class tests', () => {
    let student;
    let course;

    beforeEach(() => {
        student = new Student(1, 'John Doe');
        course = new Course('Mathematics');
    });

    test('should register a student on a course', () => {
        course.enroll(student);
        expect(student.courses).toContain(course);
    });

    test('should add grade to student', () => {
        course.enroll(student);
        student.addGrade(course, 85);
        expect(student.grades).toEqual([{ course, grade: 85 }]);
    });

    test('should calculate average grade of student', () => {
        course.enroll(student);
        student.addGrade(course, 85);
        student.addGrade(course, 90);
        expect(student.getAverageGrade()).toBe(87.5);
    });
});
