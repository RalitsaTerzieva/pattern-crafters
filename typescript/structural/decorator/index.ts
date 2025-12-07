interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    public cost(): number {
        return 10;
    }

    public description(): string {
        return "This is simple coffee."
    }
}