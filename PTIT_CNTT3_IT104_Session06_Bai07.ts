class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    toString(): string {
        return `ID: ${this.id}, Tên: ${this.name}`;
    }
}

let allStudents: Student[] = [];

class Classroom {
    private students: Student[] = [];

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp không có học sinh");
        } else {
            this.students.forEach(s => console.log(s.toString()));  
        }
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudentById(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }

    removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}

allStudents.push(new Student(1, "Dũng"));
allStudents.push(new Student(2, "Hà"));
allStudents.push(new Student(3, "Linh"));
allStudents.push(new Student(4, "An"));
allStudents.push(new Student(5, "Bình"));
allStudents.push(new Student(6, "Châu"));

const class1 = new Classroom();
const class2 = new Classroom();

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
allStudents.forEach(s => console.log(s.toString()));

class1.removeStudent(4);
class2.editStudent(2, "Hà Nguyễn"); 

console.log("\nLớp 1 sau khi xóa học sinh:");
class1.showStudents();

console.log("\nLớp 2 sau khi sửa thông tin học sinh:");
class2.showStudents();

console.log("\nDanh sách học sinh còn lại sau khi thay đổi:");
allStudents.forEach(s => console.log(s.toString()));