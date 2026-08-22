const random = Math.floor(Math.random() * 100 + 1)
console.log(random)

const Userinput = document.getElementById('guessInput')
const Message = document.getElementById('message')
const remainattampt = document.getElementById('attemptsLeft')
const preGuess = document.getElementById('guessList')

document.getElementById('submitBtn').addEventListener('click', guess)

function guess(){

    //For game over at 0 attamot left
    let attampt = parseInt(remainattampt.innerText)
    if(attampt === 0){
        Message.innerText = 'Game Over! please Stop guessing'
        return; //Exits the funtion immediately
    }
     
    const userValue = parseInt(Userinput.value)
    if(userValue < 0 || userValue > 100){
        Message.innerHTML = "Please Enter a number between 0 to 100"
        Userinput.value = '';
        return;
    }

    //1 check if the guess is correct
    if(userValue === random){
        Message.innerHTML = `You guess right ${random}`
        return; //Stop it Here 
    }else{
       attampt = attampt -1;
       remainattampt.innerText = attampt;
        
       //Show the random number if attampts is 0
       if(attampt === 0){
            Message.innerText = `Gamw over! The number was ${random}`
       }
    }

    //2 Add the guess to the list
    const li = document.createElement('li')
    li.innerText = userValue
    preGuess.appendChild(li)

    //3 Clear the user input after every attampt
    Userinput.value = '';
       
}