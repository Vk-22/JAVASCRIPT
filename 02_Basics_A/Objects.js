// Array Objects

const mySym = Symbol("key1")

const JsUser = {
    name: "Vivek",
    age: 21,
    [mySym]: "mykey1",
    email: "vik23pra@gmail.com",
    isLoggedin: false,
    lastLoginday: ["Monday", "Sunday"]
}

console.log(JsUser.email)
console.log(typeof JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[Symbol])

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greeting1 = function(){
    console.log('Hello Js user, ${this.age}')
}

console.log(JsUser.greeting())

console.log(JsUser.greeting1())

