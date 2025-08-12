interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry{
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry{
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`Hinh chu nhat`);
console.log(`Dien tich: ${rectangle.calculateArea()}`);
console.log(`Chu vi: ${rectangle.calculatePerimeter()}`);

console.log(`Hinh tron`);
console.log(`Dien tich: ${circle.calculateArea()}`);
console.log(`Chu vi: ${circle.calculatePerimeter()}`);
