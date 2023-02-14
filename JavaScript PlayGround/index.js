// function c() {
//     var a=10;
//     function b() {
//         console.log(a);
//     }
//     return b;
// }

// var x= c()()

// var inp = { a: 1, b: 2, c: 3 };
// var arr = [];

// for (var key in inp) {
//     arr.push([key, inp[key]]);
// }
// console.log(arr);

var inp = [{ a: 1 }, { b: 2 }, { c: 3 }]
var dict = {}
inp.map((val) => {
    dict[Object.keys(val)] = Object.values(val)
})
console.log(dict);