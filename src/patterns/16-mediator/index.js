export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant (participant) {
    this.participants.push(participant);
  }

  getPaymentAmount() {
    return this.price / this.participants.length;
  }

  pay (amount = 0) {
    this.balance += amount;
  }

  share () {
    this.participants.forEach((participant) => {
        participant.pay();
    });
  }

  borrow (amount = 0) {
    const participantsWithCash = this.participants.filter((participant) => participant.cash > 0);
    participantsWithCash.forEach((participant) => {
      participant.pay(amount / participantsWithCash.length);
    });
  }
}

export class User {
  constructor(name = '', cash = 0, billSharing) {
    this.name = name;
    this.cash = cash;
    this.billSharing = billSharing;
  }

  pay (amount = this.billSharing.getPaymentAmount()) {
    if (this.cash >= amount) {
      this.cash -= amount;
      this.billSharing.pay(amount);
    } else {
      const debt = amount - this.cash;
      this.billSharing.pay(this.cash);
      this.cash = 0;
      this.borrow(debt);
    }
  }

  borrow (amount = 0) {
    this.billSharing.borrow(amount);
  }
}
