// # Primitive

// 7 types :String,Number ,Boolean,null,undefined,Symbol,BigInit

//  Reference (Non Primitive)

//Array Objects,Function

// ++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudhrydotcom";
let anothername = myYoutubeName;

anothername = "chaiaurcode";
console.log(anothername);
console.log(myYoutubeName);

let userOne = {
  email: "user@gmail.com",
  upi: "upi@ybl",
};

let userTwo = userOne;
userTwo.email = "user@yahooo.com";

console.log(userOne.email);
console.log(userTwo.email);
