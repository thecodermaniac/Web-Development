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

import school from './list.json' assert { type: 'json' };

console.log(school);

let MappedList = school.map((student) => {
    let name = student.name;
    let subject = student.subject;
    return ({ name, subject })
})
console.log(MappedList);

let FilteredList = school.filter((student) => {
    return student.age > 13
})

console.log(FilteredList);

let ReducedList = school.reduce((acc, student) => {
    if (acc[student.school]) {
        acc[student.school] = ++acc[student.school]
    }
    else {
        acc[student.school] = 1;
    }
    return acc;
}, {})

console.log(ReducedList);

function transformRes(res) {
    const jsonStartingChars = ["{", "["];
    return jsonStartingChars.includes(res.charAt(0)) ? JSON.parse(res) : res;
}

let result = transformRes('{key:Aritra}')
console.log(result);