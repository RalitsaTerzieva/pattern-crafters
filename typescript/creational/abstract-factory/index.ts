interface Button {
    render(): void,
    onClick(f: Function): void
}

interface Checkbox {
    render(): void,
    toggle(): void
}

interface GUIFactory {
    createButton(): Button,
    createCheckbox(button: Button): Checkbox
}

class WindowsButton implements Button {
    public render(): void {
        console.log("Render a button in Windows style.")
    }

    public onClick(f: Function): void {
        console.log("Windows button was clicked!")
        f();
    }
}

class MacOSButton implements Button {
    public render(): void {
        console.log("Render a button in MacOS style.")
    }

    public onClick(f: Function): void {
        console.log("MacOS button was clicked!")
        f();
    }
}

class WindowsCheckbox implements Checkbox {
    constructor(private button: Button) {}

    public render(): void {
        console.log("Render chechbox in Windows style.")
    }

    public toggle(): void {
        this.button.onClick(() => {console.log("Windows checkbox toggled.")})
    }
}

class MacOSCheckbox implements Checkbox {
    constructor(private button: Button) {}

    public render(): void {
        console.log("Render chechbox in MacOS style.")
    }

    public toggle(): void {
        this.button.onClick(() => {console.log("MacOS checkbox toggled.")})
    }
}

class WindowsFactory implements GUIFactory {
    public createButton(): Button {
        return new WindowsButton();
    }

    public createCheckbox(button: Button): Checkbox {
        return new WindowsCheckbox(button);
    }
}

class MacOSFactory implements GUIFactory {
    public createButton(): Button {
        return new MacOSButton();
    }

    public createCheckbox(button: Button): Checkbox {
        return new MacOSCheckbox(button);
    }
}