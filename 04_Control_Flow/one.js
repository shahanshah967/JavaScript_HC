// If

const temprature = 41;

// if (temprature < 50) {
//   console.log("temprature is lesser than 50");
// } else {
//   console.log("temprature is greater than 50");
// }

const score = 200;

if (score > 100) {
  const power = "fly";
  //   console.log(`User Power : ${power}`);
}

// console.log(`User Power : ${power}`);
const balance = 1000;
// if (balance > 500) console.log("test");
// console.log("test2");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less that 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedFromEmail = true;

if (isUserLoggedIn && debitCard) {
  console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedFromEmail) {
  console.log(`User Logged In`);
}
