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

function number(num1, num2){
    return num1 + num2
}
number()

function array1(...num1){
    return num1
}
console.log(array1(200,3944,23030))

const user = {
    username: "Vivek",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myArray = [222,333,444,555]

function returnSecondValue(getArray){
    return getArray[2,0]
}

console.log(returnSecondValue(myArray))