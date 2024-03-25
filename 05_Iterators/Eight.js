const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const init = 0;
const reducedNum = myArray.reduce((acc, curval) => {
  return acc + curval;
}, init);

console.log(reducedNum);
