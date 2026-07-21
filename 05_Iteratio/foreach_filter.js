//  example of foreach loops

const coding = ["js","ruby", "java"]
const Value = coding.forEach(item => {
    console.log(item)
    return item
});
console.log(Value)
 
console.log("///////////////////////////////////////////")

const myNums = [1,2,3,4,5,6,7,8,9]
const newNums = myNums.filter( (num) => {
    return num > 4
})

const Nums = [1,2,3]
const myTotal = Nums.reduce(function (accumlator, currentVal) {
    console.log(`accumlator:${accumlator} and currentVal: ${currentVal}`)
    return accumlator + currentVal
}, 0)
console.log(myTotal);