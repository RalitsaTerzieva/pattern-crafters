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

let dev1 = new Developer("Clara", 12000);
let dev2 = new Developer("Tim", 1300);
let designer = new Designer("Josh", 10000);
let manager = new Manager("Mark", 11000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(designer);

console.log(manager);

