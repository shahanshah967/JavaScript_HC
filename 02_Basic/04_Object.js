// const tinderUser = new Object ()  //singleton Object


const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email:'some@gmail.com',
    fullname:{
        userFullName:{
            firName:"hitesh",
            lastName:"Chaudhry"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firName);

const obj1 ={1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

// const obj3 = {obj1,obj2}

// const obj3  = Object.assign({},obj1,obj2)

// console.log(obj3);
const obj3= {...obj1,...obj2}
const course ={
    coursename:'js in hindi',
    price:'999',
courseInstructor:'hitesh'
}

const  {courseInstructor:instructor} =course

console.log(instructor);