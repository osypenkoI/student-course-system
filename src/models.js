// models.js
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.courses = [];
        this.grades = [];
    }

    register(course) {
        this.courses.push(course);
    }

    addGrade(course, grade) {
        this.grades.push({ course, grade });
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, grade) => sum + grade.grade, 0);
        return total / this.grades.length;
    }
}

class Course {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    enroll(student) {
        this.students.push(student);
        student.register(this);
    }
}

module.exports = { Student, Course };
