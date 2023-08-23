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
  constructor(user) {
    this.user = user;
  }

  write () {
    if(this.user.rights.some((role => role === 'admin'))) {
      return this.user.write();
    } else {
      return 'user does not have permissions to write'
    }
  }
}


