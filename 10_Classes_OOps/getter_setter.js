class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toLowerCase();
  }
  set email(email) {
    this._email = email;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("hitesh@hi.ai", "123abc");
console.log(hitesh.password);
console.log(hitesh.email);
