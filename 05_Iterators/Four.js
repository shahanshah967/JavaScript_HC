const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
