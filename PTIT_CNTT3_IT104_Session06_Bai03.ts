//Abstract Method: 
// Là phương thức được khai báo trong một lớp trừu tượng (abstract class) nhưng không có thân hàm (không có triển khai). Lớp con kế thừa bắt buộc phải triển khai phương thức này.
//Method:
//Là phương thức có thân hàm (triển khai cụ thể) được định nghĩa trong một lớp, có thể là lớp thông thường hoặc lớp trừu tượng.

//Vi du minh hoa: 

abstract class Job{
     protected type: string;

     constructor(type: string) {
        this.type = type;
     }

     public printType(): void {
        console.log(`Loai cong viec: ${this.type}`);
     }

     public abstract calculateSalary(): number;
}

class ParttimeJob extends Job{
       private workingHour: number;

       constructor (type: string, workingHour: number) {
              super(type);
              this.workingHour = workingHour;
       }

       public calculateSalary(): number {
           return 30000 * this.workingHour;
       }    
}

class FulltimeJob extends Job{
    constructor (type: string) {
        super(type);
    }

    public calculateSalary(): number {
        return 10000000;
    }
}

const parttimeJob = new ParttimeJob("Cong viec ban thoi gian", 20);
const fulltimeJob = new FulltimeJob("Cong viec toan thoi gian");
parttimeJob.printType();
console.log(`Luong: ${parttimeJob.calculateSalary()} VND`);
fulltimeJob.printType();
console.log(`Luong: ${fulltimeJob.calculateSalary()} VND`);
