interface Employee {
    getName(): string;
    getSalary(): number;
    getRole(): string;
}

interface CompositeEmployee {
    addEmployee(employee: Employee): void;
    removeEmployee(employee: Employee): void;
    getEmployee(): Employee[];
}

class Developer implements Employee{
    constructor(
        private name: string,
        private salary: number
    ) {}

    public getName() {
        return this.name
    }

    public getSalary() {
        return this.salary
    }

    public getRole() {
        return "Developer"
    }
}

class Designer implements Employee{
    constructor(
        private name: string,
        private salary: number
    ) {}

    public getName() {
        return this.name
    }

    public getSalary() {
        return this.salary
    }

    public getRole() {
        return "Designer"
    }
}