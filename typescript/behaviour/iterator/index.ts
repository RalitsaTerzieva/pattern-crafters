class ArrayIterator<T> {
    private position: number = 0;

    constructor(private collection: number[]) {}

    public next(): number {
        const result: number = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}


const array: number[] = [1,2,3,4,5,6,7,88];
const iterator = new ArrayIterator(array);
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());