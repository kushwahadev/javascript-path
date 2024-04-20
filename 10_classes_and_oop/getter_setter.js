class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}

const hitesh = new User("dev@gmail.com", "abc");
console.log(hitesh.password);
