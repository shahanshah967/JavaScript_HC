const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// console.log(this);

// user.welcomeMessage()
// user.username ='sam'
// user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//   let username = "hitesh";
//   console.log(this.username);
// };

// chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 4));
