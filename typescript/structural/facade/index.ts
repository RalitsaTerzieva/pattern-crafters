class Grinder {
    public grinBeads() {
        console.log("Grinding beans...");
    }
}

class Boiler {
    public boilWater() {
        console.log("Boiling water...");
    }
}

class Brewer {
    public brewCoffee() {
        console.log("Brewing coffee...");
    }
}

class CoffeeMakerFacade {
    constructor(
        private grinder: Grinder,
        private boiler: Boiler,
        private brewer: Brewer
    ) {}

    public makeCoffee() {
        this.grinder.grinBeads();
        this.boiler.boilWater();
        this.brewer.brewCoffee();
        console.log("Coffee is ready!")
    }
}