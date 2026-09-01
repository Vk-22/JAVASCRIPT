
const random = function(){
    const hex = "0123456789ABCDEF";
    let   color = "#"
    for(let i=0; i < 6; i++){
     color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let IntervalId = null;

const startchangingcolor = function(){
  if(!IntervalId){ //Prevents multiple intervals running at once
    IntervalId = setInterval(function() {
       document.body.style.backgroundColor = random()
    }, 1000);
  }
};

const stopchangingcolor = function(){
    clearInterval(IntervalId);
    IntervalId = null; //Reset varaible
}

document.getElementById("start").addEventListener('click',startchangingcolor)
document.getElementById("stop").addEventListener('click',stopchangingcolor)
