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