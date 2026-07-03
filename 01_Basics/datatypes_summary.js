// Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2)


// Non Primitive

// Array, Objects, Functions

const hero = ["vivek", "raj", "rajul"]

let object = {
    name: "vivek",
    age: 21,
    kg: 50
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof myfunction)

