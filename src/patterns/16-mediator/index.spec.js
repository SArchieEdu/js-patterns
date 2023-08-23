import { BillSharing, User } from './index.js';

describe('patterns/mediator', () => {
  let billSharing;

  beforeEach(() => {
    billSharing = new BillSharing(300);
  });

  afterEach(() => {
    billSharing = null;
  });

  it('should be abel to split the bill equally', () => {
    const john = new User("John Doe", 100, billSharing);
    const peter = new User("Peter Parker", 250, billSharing);
    const bruce = new User("Bruce Wayne", 250, billSharing);

    billSharing.addParticipant(john);
    billSharing.addParticipant(peter);
    billSharing.addParticipant(bruce);

    billSharing.share();

    expect(john.cash).toBe(0);
    expect(peter.cash).toBe(150);
    expect(bruce.cash).toBe(150);
    expect(billSharing.balance).toBe(300);
  });

  it('should be abel to borrow cash form other participants', () => {
    const john = new User("John Doe", 50, billSharing);
    const peter = new User("Peter Parker", 150, billSharing);
    const bruce = new User("Bruce Wayne", 150, billSharing);

    billSharing.addParticipant(john);
    billSharing.addParticipant(peter);
    billSharing.addParticipant(bruce);

    billSharing.share();

    expect(john.cash).toBe(0);
    expect(peter.cash).toBe(25);
    expect(bruce.cash).toBe(25);
    expect(billSharing.balance).toBe(300);
  })

});
