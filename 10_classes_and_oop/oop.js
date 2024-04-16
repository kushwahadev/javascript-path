const user = {
  username: " dev",
  loginCount: 8,
  singnedIn: true,

  getUserDetails: function () {
    console.log(`welcome : ${this.username}`);
  },
};

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("hitesh", 18, true);

console.log(userOne);
