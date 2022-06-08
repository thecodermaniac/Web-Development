const labelHolder = document.getElementById("labelValue");
console.log(typeof labelHolder);
const existingDiv = document.getElementsByClassName("row");
console.log(existingDiv);
const labelType = document.getElementById("inputSelector");
const btnAction = document.getElementById("createBtn");
btnAction.addEventListener("click", () => {
  console.log(labelHolder.value);
  console.log(labelType.value);

  const labelInput = document.createElement("input");
  const newLabelshow = document.createElement("label");
  const newDiv = document.createElement("div");
  var br = document.createElement("br");

  newDiv.classList.add("newElement");

  newLabelshow.innerHTML = labelHolder.value;
  labelInput.type = labelType.value;
  newDiv.appendChild(newLabelshow);
  newDiv.appendChild(br);
  newDiv.appendChild(labelInput);

  existingDiv[0].appendChild(newDiv);
  console.log(newDiv);
});
