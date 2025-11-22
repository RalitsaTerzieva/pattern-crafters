abstract class Car {
    constructor(
        public model: string,
        public productYear: number
    ) {}

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    public displayCarInfo(): void {
        console.log(`This is Sedan. Model: ${this.model}, Production Year: ${this.productYear}`)
    }
}

class SUV extends Car {
    public displayCarInfo(): void {
        console.log(`This is SUV. Model: ${this.model}, Production Year: ${this.productYear}`)
    }
}

class Hatchback extends Car {
    public displayCarInfo(): void {
        console.log(`This is Hatchback. Model: ${this.model}, Production Year: ${this.productYear}`)
    }
}

class CarFactory {
    public createCar(
        type: 'sedan' | 'suv' | 'hatchback',
        model: string,
        productionYear: number
    ): Car {
        switch(type) {
            case "sedan":
                return new Sedan(model, productionYear);
            case "suv":
                return new SUV(model, productionYear);
            case "hatchback":
                return new Hatchback(model, productionYear);
            default:
                throw new Error("Invalid car type!");
        }
    }
}


const carfactory = new CarFactory();

const sedan = carfactory.createCar("sedan", "Camry", 2023);
sedan.displayCarInfo();