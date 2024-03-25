const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((item) => {
//   console.log();
// });

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName, item.languageFileName);
});
