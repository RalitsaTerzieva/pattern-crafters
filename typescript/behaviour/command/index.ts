interface ICommand {
    execute(): void;
    undo(): void;
}

class Light {
    public turnOn():void {
        console.log("The light is on");
    }

    public turnOff(): void {
        console.log("The light is off");
    }
}

class TurnOnCommand implements ICommand {
    constructor(private light: Light) {}
    
    public execute(): void {
        this.light.turnOn();
    }

    public undo(): void {
        this.light.turnOff();
    }
}

class TurnOffCommand implements ICommand {
    constructor(private light: Light) {}
    
    public execute(): void {
        this.light.turnOff();
    }

    public undo(): void {
        this.light.turnOn();
    }
}