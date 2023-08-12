export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant(participant) {
    this.participants.push(participant);
    return this;
  }

  getPaymentAmount() {
    return this.price / this.participants.length;
  }

  pay(amount = 0) {
    this.balance += amount;
  }

  share() {
    this.participants.forEach((participant) => {
      participant.pay();
    });

    if (this.balance < this.price) {
      this.borrow(this.price - this.balance);
    }
  }

  borrow(amount = 0) {
    const participantsWithCash = this.participants.filter(
      (participant) => participant.cash
    );
    const paymentAmount = amount / participantsWithCash.length;

    participantsWithCash.forEach((participant) => {
      participant.borrow(paymentAmount);
      this.pay(paymentAmount);
    });
  }
}

export class User {
  constructor(name = "", cash = 0, billSharing) {
    this.name = name;
    this.cash = cash;
    this.billSharing = billSharing;
  }

  pay() {
    const paymentAmount = this.billSharing.getPaymentAmount();
    const participantPaymentAmount =
      this.cash < paymentAmount ? this.cash : paymentAmount;
    this.cash = this.cash - participantPaymentAmount;
    this.billSharing.pay(participantPaymentAmount);
  }

  borrow(amount = 0) {
    this.cash = this.cash - amount;
  }
}
