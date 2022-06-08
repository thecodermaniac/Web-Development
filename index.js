// alert("tui bal kha");
var num1 = 67,
  num2 = 54;
console.log(num1 + num2);
console.warn("jibon borbad");

var abtMe = {
  name: "lol",
  status: "unemployed",
  goal: "sleeping",
};
console.log(abtMe);

function fuck(yourname) {
  return "fuck you " + yourname;
}

console.log(fuck("souhardya"));
var arrl = [1, 2, 3, 4, 5, 6];
console.log(arrl);

for (let i = 0; i < arrl.length; i++) {
  console.log(arrl[i]);
}

arrl.forEach(function (i) {
  console.log(i * i);
});
console.log(arrl);
arrl.shift();
arrl.unshift(100);
console.log(arrl);
let str = "you fucking little wenier ";
console.log(str.slice(2, 9));
let mydate = new Date();
console.log(mydate.getFullYear());
// if (document.getElementById("btn1").click() == true) {
//   document.getElementById("btn1").style.border = "3px solid #1b64bf";
// }
let eleclass = document.getElementsByClassName("container");
console.log(eleclass[1]);
eleclass[0].classList.add("lul");
eleclass[0].classList.add("hemlo");
console.log(eleclass[1]);
console.log(eleclass.innerText);
tempelem = document.getElementsByClassName("bal");
console.log(tempelem.innerText);
tag = document.getElementsByTagName("div");
console.log(tag);
// createdelement = document.createElement("button");
// createdelement.innerText = "created button";
// tag[10].appendChild(createdelement);

function clicked() {
  console.log("the button was clicked");
}
window.onload = function () {
  console.log("page loaded");
};

var id_container = document.getElementById("tryContainer");
if (id_container) {
  id_container.addEventListener("click", function () {
    console.log("this part was clicked");
  });
}
console.log(document.querySelectorAll(".container")[0].innerHTML);
