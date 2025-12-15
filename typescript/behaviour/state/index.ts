interface LightState {
    switchState(lightSwitch: LightSwitch): void;
}

class LightSwitch {
    constructor(private state: LightState) {}

    public setState(state: LightState): void {
        this.state = state;
    }

    public press(): void {
        this.state.switchState(this);
    }
}

class OnState {
    public switchState(lightSwitch: LightSwitch): void {
        console.log("Light state is On. Turning Off...");
        lightSwitch.setState(new OffState());
    }
}

class OffState {
    public switchState(lightSwitch: LightSwitch): void {
        console.log("Light state is Off. Turning On...");
        lightSwitch.setState(new OnState());
    }
}