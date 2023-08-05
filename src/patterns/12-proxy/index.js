export class User {
  constructor(name, rights = []) {
    this.name = name;
    this.rights = rights;
  }

  write() {
    return "write something to repo";
  }
}

export class ProxyUser {
  constructor(user) {
    this.user = user;
  }

  write() {
    if (!this.user.rights.includes("admin")) {
      return "user does not have permissions to write";
    }
    return this.user.write();
  }
}
