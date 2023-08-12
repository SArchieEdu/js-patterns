export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant(participant) {
    this.participants.push(participant);
  }

  getPaymentAmount() {
    return this.price / this.participants.length;
  }

  pay(amount = 0) {
    this.balance += amount;
  }

  share() {
    const paymentAmount = this.getPaymentAmount();
    this.participants.forEach((participant) => {
      const participantPaymentAmount =
        participant.cash < paymentAmount ? participant.cash : paymentAmount;
      participant.pay(participantPaymentAmount);
      this.pay(participantPaymentAmount);
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
  constructor(name = "", cash = 0) {
    this.name = name;
    this.cash = cash;
  }

  pay(amount = 0) {
    this.cash = this.cash - amount;
  }

  borrow(amount = 0) {
    this.cash = this.cash - amount;
  }
}
