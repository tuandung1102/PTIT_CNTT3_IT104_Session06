abstract class Shape{
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public abstract getSize(): void;

}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    public getSize(): void {
        console.log(`Kich thuoc cua ${this.getName()}: chieu rong: ${this.width} va chieu cao: ${this.height}`);
    }
}

const rectangle = new Rectangle("Hinh chu nhat", 10, 5);
console.log(rectangle.getName());
rectangle.getSize(); 