interface UserDetails {
    name: string;
    age: number;
    email: string;
}

interface Prototype {
    clone(): Prototype;
    getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
    constructor(private user: UserDetails) {}

    public clone(): ConcretePrototype {
        const clone = Object.create(this);
        clone.user = {...this.user};
        return clone;
    }

    public getUserDetails(): UserDetails {
        return this.user;
    }
}


let user1 = new ConcretePrototype({name: "Alice", email: "test@abv.bg", age: 32});
let user2 = user1.clone();

if (user1 === user2) {
    console.log("Both instances are the same")
} else {
    console.log("Clone objects are separate instances")
}