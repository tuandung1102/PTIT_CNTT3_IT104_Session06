var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
console.log("Hinh chu nhat");
console.log("Dien tich: ".concat(rectangle.calculateArea()));
console.log("Chu vi: ".concat(rectangle.calculatePerimeter()));
console.log("Hinh tron");
console.log("Dien tich: ".concat(circle.calculateArea()));
console.log("Chu vi: ".concat(circle.calculatePerimeter()));
