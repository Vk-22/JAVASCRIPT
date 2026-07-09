//functions

function num(num1, num2){
    console.log(num1 + num2)
    return num1 + num2
}

const result = num(7,8)
console.log(num(3,4))

function login(username){
    return '${username} just logged in'
}

console.log(login("vivek"))