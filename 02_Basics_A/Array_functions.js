// Array Functions

const array1 = ["vivek", "harsh", "Dhrue"]
const array2 = ["sahid", "saud", "samir"]

array2.push(array1)
console.log(array2)

const array3 = array1.concat(array2)
console.log(array3)

const AnotherArray = [...array1, ...array2]
console.log(AnotherArray)

const num = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const original = num.flat(Infinity)

console.log(original)

console.log(Array.isArray("Vivek"))
console.log(Array.from("Vivek"))
console.log(Array.of("Vivek"))