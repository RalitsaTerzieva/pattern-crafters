//called strategy
interface PaymentStrategy {
    pay(amount: number): void;
}
   
//called concrete strategy
class PayPalStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`)
    }
}

class CreditCardStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card.`)
    }
}

class BitcoinStrategy implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid $${amount} using Bitcoin.`)
    }
}

//called context
class ShoppingCart {
    private amount: number = 0;

    constructor(private strategy: PaymentStrategy) {}

    public setPaymentStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    public addToCart(value: number): void {
        this.amount += value;
    }

    public checkout(): void {
        this.strategy.pay(this.amount);
        this.amount = 0;
    }
}