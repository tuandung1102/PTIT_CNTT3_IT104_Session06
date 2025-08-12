var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.toString = function () {
        return "ID: ".concat(this.id, ", T\u00EAn: ").concat(this.name);
    };
    return Student;
}());
var allStudents = [];
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        if (this.students.length === 0) {
            console.log("Lớp không có học sinh");
        }
        else {
            this.students.forEach(function (s) { return console.log(s.toString()); });
        }
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudentById = function (id) {
        return this.students.find(function (s) { return s.getId() === id; });
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var index = allStudents.findIndex(function (s) { return s.getId() === id; });
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    };
    Classroom.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (s) { return s.getId() === id; });
        if (index !== -1) {
            var removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    };
    Classroom.prototype.editStudent = function (id, newName) {
        var student = this.students.find(function (s) { return s.getId() === id; });
        if (student) {
            student.setName(newName);
        }
    };
    return Classroom;
}());
allStudents.push(new Student(1, "Dũng"));
allStudents.push(new Student(2, "Hà"));
allStudents.push(new Student(3, "Linh"));
allStudents.push(new Student(4, "An"));
allStudents.push(new Student(5, "Bình"));
allStudents.push(new Student(6, "Châu"));
var class1 = new Classroom();
var class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(4);
class1.addStudentInClass(5);
class2.addStudentInClass(2);
class2.addStudentInClass(3);
class2.addStudentInClass(6);
console.log("Lớp 1 ban đầu:");
class1.showStudents();
console.log("\nLớp 2 ban đầu:");
class2.showStudents();
console.log("\nDanh sách học sinh còn lại ban đầu:");
allStudents.forEach(function (s) { return console.log(s.toString()); });
class1.removeStudent(4);
class2.editStudent(2, "Hà Nguyễn");
console.log("\nLớp 1 sau khi xóa học sinh:");
class1.showStudents();
console.log("\nLớp 2 sau khi sửa thông tin học sinh:");
class2.showStudents();
console.log("\nDanh sách học sinh còn lại sau khi thay đổi:");
allStudents.forEach(function (s) { return console.log(s.toString()); });
