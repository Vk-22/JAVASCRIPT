// 1. Sabse pehle saare elements ko pakdo
const Todo_input = document.getElementById('todo-input')
const Addbtn = document.getElementById('add-btn')
const list = document.getElementById('Todo-list')

// 2. Jab button par click ho
Addbtn.addEventListener('click', function(){
    
    // Step A: Input box se text nikalo
    const task = Todo_input.value;

    // (Safety check: agar khali hai toh kuch mat karo)
    if(Todo_input == '') return;

    // Step B: Ek naya 'li' tag banao
    const li = document.createElement('li')

    //Step C: Us naya 'li' ke andar user ka likha hua text daal do
    li.innerText = task;

    // Step D: Ab us 'li' ko apne 'todoList' (ul) dabbe ke andar daal do!
    list.appendChild(li);

    //clear the text then
    Todo_input.value = '';
})