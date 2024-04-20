class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(` A new course added by ${this.username}`);
  }
}

const chai = new Teacher(" chai", "chai@email.com", " 224");

// chai.addCourse();

const masalaChai = new User("masalachai hai baby");

masalaChai.logMe();

console.log(chai instanceof User);
