abstract class Car {
    constructor(
        public model: string,
        public productYear: string
    ) {}


    abstract displayCarInfo(): void;
}