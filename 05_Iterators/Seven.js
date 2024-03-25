const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => {
//   return num + 10;
// });
// const newNums2 = myNums.forEach((num) => {
//   //   console.log("for each");
//   //   console.log(num + 10);
//   return num + 1;
// });
// console.log(newNums, newNums2);

const newNums = myNums
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  })
  .filter((num) => {
    return num > 40;
  });

console.log(newNums);
