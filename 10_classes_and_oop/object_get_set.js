const User = {
  _email: "dev@mail.com",
  _password: "<PASSWORD>",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const chai = Object.create(User);

console.log(chai.email);
