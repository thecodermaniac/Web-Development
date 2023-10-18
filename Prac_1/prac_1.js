var element = document.getElementsByTagName("img");
// if (element) {
//   element.addEventListener("click", function () {
//     console.log("img clicked");
//   });
// }
console.log(element);
created_element = document.createElement("img");
created_element.setAttribute("style", "display: none");
console.log(document.getElementById('veryunique'));
for (let i = 0; i < element.length; i++) {
  element_img = element[i];
  element_img.addEventListener("click", function () {
    created_element.setAttribute("style", "width:", "height:auto");
    console.log("img clicked");
  });
}
