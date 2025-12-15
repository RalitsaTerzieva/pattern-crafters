interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        if(this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class MonkeyHandler extends AbstractHandler{

    public handler(request: string): string | null {
        if(request === "Banana") {
            console.log(`Monkey: I will eat the ${request}.`);
        }
        return super.handle(request);
    }
}

class SquirelHandler extends AbstractHandler {

    public handler(request: string): string | null {
        if(request === "Nut") {
            console.log(`Squirel: I will eat the ${request}.`);
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler{

    public handler(request: string): string | null {
        if(request === "Meatball") {
            console.log(`Dog: I will eat the ${request}.`);
        }
        return super.handle(request);
    }
}