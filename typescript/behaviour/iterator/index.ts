class ArrayIterator<T> {
    private position: number = 0;

    constructor(private collection: number[]) {}

    public next(): number {
        const result: number = this.collection[this.position];
        this.position = +1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}