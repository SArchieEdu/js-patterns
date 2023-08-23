export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant (participant) {
    this.participants.push(participant)
  }

  getPaymentAmount(participantsCount) {
    return (this.price - this.balance) / participantsCount;
  }

  pay (amount = 0) {
    this.balance += amount;
  }

  share () {
    this.participants.forEach((user, index) => {
      const fairPay = this.getPaymentAmount(this.participants.length - index);
      user.pay(fairPay)
    });
  }

  // borrow (amount = 0) {
  //   this.balance -= amount;
  // }
}

export class User {
  constructor(name = '', cash = 0, billSharing) {
    this.name = name;
    this.cash = cash;
    this.billSharing = billSharing;
  }

  pay (amount = 0) {
    const remainder = this.cash - amount;

    if(remainder < 0) {
      this.billSharing.pay(this.cash);
      this.cash = 0;
      // this.borrow(remainder);
    } else {
      this.billSharing.pay(amount);
      this.cash = remainder
    }
  }

  // borrow (amount = 0) {
  //   this.billSharing.borrow(amount);
  //   this.cash = 0;
  // }
}
