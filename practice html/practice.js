var prev_html = firstContainer.innerHTML;
firstContainer.addEventListener("click", function () {
  console.log("fuck off");
  firstContainer.innerHTML = "<p>fuck off weiner</p>";
});
firstContainer.addEventListener("mousedown", function () {
  firstContainer.innerHTML = prev_html;
});

setfunc = () => {
  console.log("just running");
};
// setTimeout(setfunc, 5000);
clr = setInterval(setfunc, 2000);

obj = { name: "aritra", length: 34, noun: { he: "male", she: "female" } };
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(jso);
console.log(parsed);
