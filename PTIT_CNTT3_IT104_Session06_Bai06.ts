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

    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
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

console.log("Lớp 1:");
class1.showStudents();

console.log("\nLớp 2:");
class2.showStudents();

console.log("\nDanh sách học sinh còn lại:");
allStudents.forEach(s => console.log(s.toString()));
