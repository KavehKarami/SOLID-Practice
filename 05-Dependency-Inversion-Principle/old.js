// NOTE Without Dependency Inversion Principle:
// stripe currency is a Cents but paypal currency is a dollar

class Store {
  constructor(user) {
    // ANCHOR stripe
    // this.stripe = new Stripe(user);

    // ANCHOR Paypal
    this.user = user;
    this.paypal = new Paypal();
  }

  purchaseBike(quantity) {
    // ANCHOR with stripe
    // this.stripe.makePayment(200 * quantity * 100);

    // ANCHOR Paypal
    this.paypal.makePayment(this.user, 200 * quantity);
  }

  purchaseHelmet(quantity) {
    // ANCHOR stripe
    // this.stripe.makePayment(15 * quantity * 100);

    // ANCHOR Paypal
    this.paypal.makePayment(this.user, 15 * quantity);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with paypal`);
  }
}

const store = new Store("Kevin");
store.purchaseBike(2);
store.purchaseHelmet(2);
