abstract class CakeRecipe {
    public bakeCake(): void {
        this.preHeatOven();
        this.mixIngredients();
        this.baked();
        this.coolingDown();
        this.decorate();
    }

    protected preHeatOven(): void {
        console.log("Preheating oven to 180 C degree.");
    }

    protected baked(): void {
        console.log("Baking cake.");
    }

    protected coolingDown(): void {
        console.log("Colling down the cake...");
    }

    protected decorate(): void {
        console.log("Decorating cake!");
    }

    protected abstract mixIngredients(): void;
}

