const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

setInterval(function(){
    let time = new Date()
    hours.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds(); 
}, 1000);