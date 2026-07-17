// Conditions 

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(userLoggedIn || debitCard){
    console.log("Allow to buy")
}