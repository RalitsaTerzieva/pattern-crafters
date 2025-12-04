interface Employee {
    getName(): string;
    getSalary(): number;
    getRole(): string;
}

interface CompositeEmployee extends Employee{
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

class Manager implements CompositeEmployee {
    private employees: Employee[] = [];

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
        return "Manager"
    }

    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    public removeEmployee(employee: Employee): void {
        const index = this.employees.indexOf(employee);

        if(index !== -1) {
            this.employees.splice(index, 1);
        }
        
    }

    public getEmployee(): Employee[] {
        return this.employees
    }
}