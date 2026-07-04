const Name = "vivek"
const repoCounter = 20

console.log('Hello my name is ${name} and my repo count is ${repoCounter}')

const name = new String("Vivek")

console.log(name[2])
console.log(name.__proto__)

console.log(name.length)
console.log(name.toUpperCase())

console.log(name.charAt(2))
console.log(name.indexOf('v'))

const newString = name.substring(0,4)
console.log(newString)

const another = name.slice(-3,4)
console.log(another)

const newStringOne = " vivek   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://youtube.com/vivek&20prajapati"
console.log(url)
console.log(url.replace('&20', '+'))

console.log(url.includes('point'))
console.log(url.includes('prajapati'))