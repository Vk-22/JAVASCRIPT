// Functions

const user = {
    username: "Vivek",
    price: 22,

    welcome: function(){
        console.log(`${this.username}, welcome to web`)
    }
}
user.welcome()
user.username = "coder"
user.welcome()


const print = function(){
    let username = "part"
    console.log(this.username)
}
print()   // So basically this keyword only used in Objects not in functions  

///////////////////////////////

// Arrow functio 

const add = (num1, num2) => (num1 + num2)
console.log(add(2,3))


////////////////////////
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (LIFE)

(function chai(){
    console.log(`Hello Vivek Coder`);
})();

((name) => {
    console.log(`Welcome to my code era '${name}`)
}) ('Vivek')

