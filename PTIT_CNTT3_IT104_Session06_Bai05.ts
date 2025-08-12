interface changeSpeed{
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements changeSpeed{
    private speed: number;

    constructor(initialSpeed: number=0) {
        this.speed = initialSpeed;
    }

    public speedUp(): void {
        this.speed += 10;
    }

    public slowDown(): void {
        this.speed = Math.max(0, this.speed - 10);
    }

    public stop(): void {
        this.speed = 0;
    }

    public getSpeed(): number {
        return this.speed;
    }
}

const vehicle = new Vehicle(50);
console.log(`Toc do ban dau: ${vehicle.getSpeed()} km/h`);
vehicle.speedUp();
console.log(`Toc do sau khi tang: ${vehicle.getSpeed()} km/h`);
vehicle.slowDown();
console.log(`Toc do sau khi giam: ${vehicle.getSpeed()} km/h`);
vehicle.stop();
console.log(`Toc do sau khi dung: ${vehicle.getSpeed()} km/h`);