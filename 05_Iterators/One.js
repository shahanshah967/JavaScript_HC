//for

const element = [];
for (let i = 0; i < 10; i++) {
  element.push(i);
}

// console.log(element);

for (let i = 1; i < 10; i++) {
  //   console.log(`Outer Loop  Executed: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop : ${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   //   console.log(element);
// }

// for (let index = 0; index < 20; index++) {
//   //   const element = [index];
//   if (index == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`value of index id ${index}`);
// }

for (let index = 0; index < 20; index++) {
  //   const element = [index];
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of index id ${index}`);
}
