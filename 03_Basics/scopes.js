// Scope

function one(){
    const usrname = "Vivek"

    function two(){
        const website = "Youtube"
        console.log(usrname)
        console.log(website)
    }
    //console.log(website)
    two()
}
one()
/////////////////////////////////////////////


if(true){
    const name = "Vivek"
    if(name === "Vivek"){
        const website = "Coder"
        console.log(name + website)
    }
   // console.log(website)
}

////////////////////////////////////
console.log(add(2))
function add(num1){
    return num1 + 1
}



// console.log(merge(2))                 // Functions stored with varibale cant be accessed like this!!
const merge = function(num1){
    return num1 + 2
}

