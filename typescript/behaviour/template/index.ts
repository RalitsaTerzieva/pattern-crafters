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

class ChocolateCake extends CakeRecipe {
    protected mixIngredients(): void {
        console.log("Mixing: chocolate, sugar, butter, eggs, flour.");
    }

    protected decorate(): void {
        console.log("Decorating cake with chocolate.");
    }
}


class VanillaCake extends CakeRecipe {
    protected mixIngredients(): void {
        console.log("Mixing: vanilla, sugar, butter, eggs, flour.");
    }
}

function bakingCake(cake: CakeRecipe) {
    cake.bakeCake();
}

console.log("Baking a chocolate cake.");
bakingCake(new ChocolateCake());

