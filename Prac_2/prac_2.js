const card_list = document.getElementsByClassName("card-items");

console.log(card_list);

var onclickcards = (cards) => {
  cards.innerHTML = "howdy";
};
var htm = card_list[0].innerHTML;
card_list[0].innerHTML = "bantu";
card_list[0].onclick = () => {
  card_list[0].innerHTML = htm;
};

card_list[2].addEventListener("mouseover", () => {
  card_list[0].innerHTML = "lol";
});
const form = document.getElementsByTagName("form");
console.log(form);
form[0].addEventListener("submit", (event) => {
  console.log("submit");
  event.preventDefault();
  const name = document.getElementById("name-car");
  const address = document.getElementById("delivery-add");
  if (!name.value) {
    alert("required field");
    return;
  }
  if (!address.value) {
    alert("address daal");
  }
});
const car_name = document.getElementById("name-car");
const address_person = document.getElementById("delivery-add");
car_name.addEventListener("keydown", (event_key) => {
  console.log("key down", event_key.key);
  if (event_key.key == 1) {
    alert("no number allowed");
  }
});
address_person.addEventListener("keyup", (event_key) => {
  console.log("key up", event_key.key);
});
