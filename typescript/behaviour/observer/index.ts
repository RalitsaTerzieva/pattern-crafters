interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    addobserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
    getState(): number;
    setState(state: number): void;
}