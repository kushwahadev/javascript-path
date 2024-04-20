class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User :${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");

// hitesh.createId();

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new User("iphone", "i@phone.com");

iphone.logMe();
