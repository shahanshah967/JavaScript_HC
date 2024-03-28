const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log("hello", e);
    console.log(e.target);
    const id = e.target.id;

    switch (id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
});
