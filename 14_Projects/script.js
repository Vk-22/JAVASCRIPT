const counterDisplay = document.getElementById("counterDisplay")
const Plus = document.getElementById("Plus")
const Minus = document.getElementById("Minus")

let currentCount = 0
Plus.addEventListener('click', function() {
    currentCount++
    counterDisplay.innerText = currentCount;
})

Minus.addEventListener('click', function() {
    if(currentCount > 0){
    currentCount--
    counterDisplay.innerText = currentCount;
    }
});