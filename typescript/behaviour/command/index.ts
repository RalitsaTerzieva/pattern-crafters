interface ICommand {
    execute(): void;
    undo(): void;
}

//Receiver class - does the real work
class Light {
    public turnOn():void {
        console.log("The light is on");
    }

    public turnOff(): void {
        console.log("The light is off");
    }
}

//Concrete classes
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

//Invoker class that doesn't know buisness logic
class SimpleRemoteControl {
    private currentCommand: ICommand;
    private undoCommand: ICommand;
    private commandQueue: ICommand[] = [];

    public setCommand(command: ICommand):void {
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(command);
    }

    public buttonWasPressed(): void {
        if(this.commandQueue.length) {
            const command = this.commandQueue.shift();
            command?.execute();
        }
    }

    public undoButtonWasPressed(): void {
        this.undoCommand.execute();
    }

    public hasCommand(): boolean {
        return this.commandQueue.length > 0;
    }
}

const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light: Light = new Light();

remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();