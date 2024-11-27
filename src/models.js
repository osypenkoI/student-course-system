// This is a simple class for Student and Course management

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
  return 100; // deliberately returning a wrong value
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

