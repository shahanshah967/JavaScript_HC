
console.log("");

function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumber(Number1,Number2){
//    let result = Number1+Number2;
//    return result; 
return Number1+Number2;
}

const result = addTwoNumber(33,4)

// console.log("Result : ",result);

function logInUserMessage(userName="Mr. X"){
    if(userName===undefined){
console.log('Please Enter A UserName')
return
    }
return `${userName} Just logged In`
}

// console.log(logInUserMessage('Ansari'));
// console.log(logInUserMessage());

function calculateCartPrice (...num1){
return num1
}

// console.log(calculateCartPrice(400,200,50,4))

const user ={
    username :'Hitesh',
    price :199

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username:'Amsari',
//     price:3999,
// })

const newArray =[200,400,100,6000]

function returnSecondValue (getArray){
 return getArray[1]
}

console.log(returnSecondValue(newArray));