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
    this.participants.forEach(participant => participant.pay());
  }

  borrow (amount = 0) {
    const participants = this.participants.filter(participant => participant.cash);

    participants.forEach(participant => {
      // FYI: I've fixed the naming here by renaming User#borrow to User#lend.
      participant.lend(amount / participants.length);
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
    if (this.cash < amount) {
      this.billSharing.pay(this.cash);
      const diff = amount - this.cash;
      this.cash = 0;
      this.billSharing.borrow(diff);
    } else {
      this.billSharing.pay(amount);
      this.cash -= amount;
    }
  }

  lend (amount = 0) {
    if (this.cash >= amount) {
      this.billSharing.pay(amount);
      this.cash -= amount;
    }
  }
}
