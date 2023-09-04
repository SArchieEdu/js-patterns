export class User {
  constructor(name, rights = []) {
    this.name = name;
    this.rights = rights;
  }

  write () {
    return "write something to repo";
  }
}

export class ProxyUser {
  // Не понимаю зачем здесь это свойство
  rights = [];

  constructor(user) {
    this.user = user;
  }

  write () {
    if (this.user.rights.includes('admin')) {
      return this.user.write();
    }

    return "user does not have permissions to write";
  }
}


