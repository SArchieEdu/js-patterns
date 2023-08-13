export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant (participant) {
    this.participants.push(participant)
  }

  getPaymentAmount() {
    return this.price / this.participants.length;
  }

  pay (amount = 0) {
    this.balance += amount;
  }

  share () {
    this.participants.forEach(p => p.pay())
  }

  borrow (amount = 0) {
    const participantsWithCash = this.participants.filter(p => p.cash)
    participantsWithCash.forEach(p => {
      p.borrow(amount / participantsWithCash.length)
    })
  }
}

export class User {
  constructor(name = '', cash = 0, billSharing) {
    this.name = name;
    this.cash = cash;
    this.billSharing = billSharing;
  }

  pay () {
    const amount = this.billSharing.getPaymentAmount();
    if (this.cash >= amount) {
      this.billSharing.pay(amount)
      this.cash -= amount
    } else {
      this.billSharing.pay(this.cash)
      const diff = amount - this.cash
      this.cash = 0;
      this.billSharing.borrow(diff)
    }
  }

  borrow (amount = 0) {
    this.billSharing.pay(amount)
    this.cash -= amount
  }
}
