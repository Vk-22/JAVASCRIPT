// Objects Part 2

// singelTone object
// const tinderuser = new Object()

// Objects
const tinderuser = {}

tinderuser.id = "vk22"
tinderuser.name = "Vivek"
tinderuser.isLoggedIn = false

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vivek",
            lastname: "prajapati"
        }
    }
}

console.log(regularuser.fullname.userfullname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

// const obj4 = Object.assign({}, obj1, obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isLoggedIn'))
