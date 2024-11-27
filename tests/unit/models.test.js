const { Student, Course } = require('../../src/models.js');

describe('Student class tests', () => {
    let student;

    beforeEach(() => {
        student = new Student(1, 'John Doe');
    });

    test('registers a course', () => {
        const course = new Course('Math');
        student.register(course);

        expect(student.courses).toContain(course);
    });

    test('adds a grade', () => {
        const course = new Course('Science');
        student.addGrade(course, 90);

        expect(student.grades).toEqual([{ course, grade: 90 }]);
    });

    test('calculates average grade', () => {
        const course1 = new Course('History');
        const course2 = new Course('Geography');
        student.addGrade(course1, 80);
        student.addGrade(course2, 90);

        expect(student.getAverageGrade()).toBe(85);
    });

    test('calculates average grade with no grades', () => {
        expect(student.getAverageGrade()).toBe(0);
    });
});

