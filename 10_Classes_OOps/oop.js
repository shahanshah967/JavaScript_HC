const user = {
  username: "ansari",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got User details from database");
    console.log(`Username :${this.username}`);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

const promiseOne = new Promise();
const date = new Date();
