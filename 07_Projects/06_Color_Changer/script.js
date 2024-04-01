function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// document.querySelector("#start").addEventListener("click", () => {
//   const start = () => {
//     console.log("Hii Shahanshah", Date.now());
//     document.querySelector("body").style.backgroundColor = getRandomColor();
//   };
//   const changeColor = setInterval(start, 500);

//   document.querySelector("#stop").addEventListener("click", () => {
//     clearInterval(changeColor);
//     console.log("stopped");
//   });
// });

let interValId;

const startChangingColor = () => {
  const colorChange = () => {
    document.body.style.backgroundColor = getRandomColor();
  };
  if (!interValId) {
    interValId = setInterval(colorChange, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(interValId);
  interValId = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
