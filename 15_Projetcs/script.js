const input = document.getElementById("name-input")
const GreetBtn = document.getElementById("greete-btn")
const show = document.getElementById("output-text")

GreetBtn.addEventListener('click', function() {
   // const nameValue = input.value
    show.innerText = "Hello " + input.value
})