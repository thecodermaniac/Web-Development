const button = document.getElementsByClassName("non_clickable");

const parent = document.getElementsByTagName("body");
const message = document.createElement("div");
message.classList.add("congrats");
parent[0].appendChild(message);
button[0].addEventListener("click", () => {
  message.innerHTML = "Congratulation !! ;)";
});
button[0].addEventListener("mouseover", (event) => {
  const pos = Math.abs(500 * Math.random()) + "px";
  button[0].style.right = pos;
  message.innerHTML = "";
});
console.log(button);
