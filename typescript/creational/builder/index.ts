interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

class Customer implements ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string
    ) {}
}