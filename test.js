// const p = 10;
// let q = p;

// q = 20
// console.log(q, p);

// const foo = [1, 2]
// const bar = foo
// bar[0] = 9;
// console.log(bar[0], foo[0]);

// let count = 1
// if (true) {
//     count += 1;
// }

// let a = 1
// const b = 1
// var c = 1

// console.log(a, b, c)

// function getKey(k) {
//     return `a key named ${k}`;
// }
// const obj = {
//     id: 5,
//     name: 'John',
//     [getKey("enabled")] : true,
// }

// const atom = {
//     value: 1,
//     addValue(value) {
//         return atom.value += value;
//     },
// };

// const name = "Luke Skywalker";
// const obj = {
//     //bad
//     // name: name,

//     //instead
//     name,
// }


// Group your shorthand properties at the beginning of your object declaration.
// const firstName = "Victory";
// const lastName = "Bright";

// const obj = {
//     firstName,
//     lastName,
//     class: "200lvl",
//     notionalID: 1234,
//     nationality: "Nigeria"
// }
// console.log(`My is ${obj.firstName} ${obj.lastName}`,);

// Array

// const items = new Array(1, 2, 3, 4)
// const items = ["boy", 3, "golf", 4, 5, 7]
// console.log(items[3]);

//use array push to add items to an array
// const book = [];
// book.push('Harry Potter')
// console.log(book);

//use array spread to copy arrays
//const itemCopy = [...items];

// const items = ['apple', 'banana', 'cherry'];

//this is the proper way to copy array
// const itemCopy = [...items];
// console.log(itemCopy, items === itemCopy);

// const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// const arr = Array.from(arrLike)
// console.log(arr)

// // Array.from example
// const arrayLike = { 0: 'a', 1: 'b', length: 2 };
// const array = Array.from(arrayLike);
// console.log(array);

// // Object.values example
// const objValues = { a: 1, b: 2, c: 3 };
// const values = Object.values(objValues);
// console.log(values);

// // Object.keys example
// const objKeys = { a: 1, b: 2, c: 3 };
// const keys = Object.keys(objKeys);
// console.log(keys);

// // Object.entries example
// const objEntries = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(objEntries)
// console.log(entries);

// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

//array slice()
// const arr = [1, 2, 3, 4, 5];
// const sliced = arr.slice(0, 3);
// console.log(sliced);

//array indexof()
// const index = arr.indexOf(3);
// console.log(index);

//array includes()
// const arr = [1, 2, 3];
// const hasThree = arr.includes(3);
// console.log(hasThree);

//array forEach()
// const arr = [1, 2, 3, 4]
// arr.forEach(element => console.log(element * 2));

// const arr = [1, 2, 3, 4, 5];

// const str = arr.join(" ")
// console.log(str)

const arr = ["Bob", "Charlie", "Alice", "Emily", "David"];
arr.sort();
console.log(arr);
