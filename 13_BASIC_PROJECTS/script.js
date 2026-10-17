const bulb = document.getElementById("bulb")
const btn = document.getElementById("switch-btn")

btn.addEventListener('click', function() {
    if(bulb.style.backgroundColor === 'gray' || bulb.style.backgroundColor === ''){
        bulb.style.backgroundColor = 'yellow'
        btn.innerText = 'Turn OFF'
    } else {
        bulb.style.backgroundColor = 'gray'
        btn.innerText = 'Turn ON'
    }

})