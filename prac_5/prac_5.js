const addproduct = document.getElementById("addbtn");
console.log(addproduct);
const showpdt = document.getElementById("showbtn");
const productForm = document.getElementById("ProductsForm");
const productList = document.getElementById("ProductList");
addproduct.addEventListener("click", () => {
  productForm.style.display = "flex";
  productList.style.display = "none";
});

showpdt.addEventListener("click", () => {
  productForm.style.display = "none";
  productList.style.display = "block";
});
var count = 0;
const mainListPdt = document.getElementsByClassName("mainList");

const pdtForm = document.getElementsByClassName("form");
pdtForm[0].addEventListener("submit", (event) => {
  if (count >= 0) {
    const empty = document.getElementsByClassName("empty");
    empty[0].style.display = "none";
  }
  count += 1;
  event.preventDefault();
  console.log("form submitted");
  const pdtName = document.getElementById("pdtName");
  console.log(pdtName.value);
  const pdtDescription = document.getElementById("description");
  console.log(pdtDescription.value);
  const pdtUrl = document.getElementById("pdtUrl");
  console.log(pdtUrl.value);
  var pdtList = document.createElement("div");
  pdtList.classList.add("pdtLists");
  var imgpdt = document.createElement("img");
  var labelpdt = document.createElement("label");
  labelpdt.innerHTML = pdtName.value;
  labelpdt.classList.add("shownList");
  var description = document.createElement("p");
  description.innerHTML = pdtDescription.value;
  imgpdt.src = pdtUrl.value;
  description.classList.add("describe");
  pdtList.appendChild(imgpdt);
  pdtList.appendChild(labelpdt);
  pdtList.appendChild(description);
  mainListPdt[0].appendChild(pdtList);
  console.log(count);
});

//list of product cards
const readyProducts = [
  {
    id: 1,
    name: "Product 1",
    Description: "description",
    ImgUrl: "challenge\img\img-10.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    Description: "description",
    ImgUrl: "C:\Users\sasuk\Documents\Web development\challenge\img\img-9.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    Description: "description",
    ImgUrl: "challengeimgimg-6.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    Description: "description",
    ImgUrl: "challengeimgimg-9.jpg",
  },
];
const readyList = document.getElementsByClassName("readyList");

for (let i = 0; i < readyProducts.length; i++) {
  const cardView = document.createElement("div");
  const cardimg = document.createElement("img");
  const cardLabel = document.createElement("label");
  const cardDescrip = document.createElement("p");
  const cardBtn = document.createElement("button");
  cardView.classList.add("cardView");
  cardLabel.classList.add("shownList");
  cardDescrip.classList.add("describe");
  cardBtn.classList.add("AddCart");
  const element = readyProducts[i];
  cardLabel.innerHTML = readyProducts[i].name;
  cardDescrip.innerHTML = readyProducts[i].Description;
  cardimg.src = readyProducts[i].ImgUrl;
  cardBtn.innerHTML = "Add to cart";
  cardView.appendChild(cardimg);
  cardView.appendChild(cardLabel);
  cardView.appendChild(cardDescrip);
  cardView.appendChild(cardBtn);
  readyList[0].appendChild(cardView);
  cardBtn.addEventListener("click", () => {
    if (count >= 0) {
      const empty = document.getElementsByClassName("empty");
      empty[0].style.display = "none";
    }
    count += 1;
    const pdtName = document.getElementById("pdtName");
    const pdtDescription = document.getElementById("description");
    const pdtUrl = document.getElementById("pdtUrl");
    var pdtList = document.createElement("div");
    pdtList.classList.add("pdtLists");
    var imgpdt = document.createElement("img");
    var labelpdt = document.createElement("label");
    labelpdt.innerHTML = readyProducts[i].name;
    labelpdt.classList.add("shownList");
    var description = document.createElement("p");
    description.innerHTML = readyProducts[i].Description;
    imgpdt.src = readyProducts[i].ImgUrl;
    description.classList.add("describe");
    pdtList.appendChild(imgpdt);
    pdtList.appendChild(labelpdt);
    pdtList.appendChild(description);
    mainListPdt[0].appendChild(pdtList);
  });
  console.log(element);
}

const btn = document.getElementsByClassName("Addcart");
