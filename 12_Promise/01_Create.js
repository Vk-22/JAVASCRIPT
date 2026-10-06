const promise = new Promise(function(resolve, reject){
    setTimeout(function(){ 
    resolve({username: "Chai", email: "vive3pr@gmail.com"})
    },1000)
})

promise.then(function(user){
    console.log(user)
})


const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "vivek", email: "vkjd@gmail.com"})
        }else{
            reject('Error : Something went wrong')
        }
    }, 1000)
})

promisetwo.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
   console.log(username) 
}).catch(function(error){
    console.log(error)
})


const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "vk", email: "kv54@gmail.com"})
        }else{
            reject("Error Js got error")
        }
    },1000)
})

async function consumepromise(){
   try{ 
       const response = await promisethree
       console.log(response)
    } catch (error) {
       console.log(error)
    }
}
consumepromise()