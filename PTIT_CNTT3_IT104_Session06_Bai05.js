var Vehicle = /** @class */ (function () {
    function Vehicle(initialSpeed) {
        if (initialSpeed === void 0) { initialSpeed = 0; }
        this.speed = initialSpeed;
    }
    Vehicle.prototype.speedUp = function () {
        this.speed += 10;
    };
    Vehicle.prototype.slowDown = function () {
        this.speed = Math.max(0, this.speed - 10);
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
    };
    Vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
var vehicle = new Vehicle(50);
console.log("Toc do ban dau: ".concat(vehicle.getSpeed(), " km/h"));
vehicle.speedUp();
console.log("Toc do sau khi tang: ".concat(vehicle.getSpeed(), " km/h"));
vehicle.slowDown();
console.log("Toc do sau khi giam: ".concat(vehicle.getSpeed(), " km/h"));
vehicle.stop();
console.log("Toc do sau khi dung: ".concat(vehicle.getSpeed(), " km/h"));
