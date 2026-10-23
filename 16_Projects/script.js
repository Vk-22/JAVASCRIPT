// 1. Saare HTML elements ko pakdo
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('Todo-list');

// 2. Page load hote hi LocalStorage se purane tasks nikal lo 
// (Agar kuch na ho toh ek khali array [] se shuruat karo)
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 3. Screen par tasks dikhane ka main function (Render Function)
function renderTasks() {
    // Pehle list ko khali karo taaki purani entries dubara print na ho
    todoList.innerHTML = '';

    // Array ke har ek task par loop chalao, sath me uska 'index' (number) bhi lo
    tasks.forEach(function(taskText, index) {
        
        // A. Naya 'li' tag banao aur usme task ka text dalo
        const li = document.createElement('li');
        li.innerText = taskText;

        // B. Naya 'Delete' button banao
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";

        // C. Delete button par click event lagao
        deleteBtn.addEventListener('click', function() {
            // 1. Array me se us specific index wale task ko kaat kar fek do
            tasks.splice(index, 1);

            // 2. LocalStorage ko naye updated array ke sath save karo
            localStorage.setItem('myTasks', JSON.stringify(tasks));

            // 3. Screen ko dobara render/update karo
            renderTasks();
        })

        // D. Button ko 'li' ke andar aur 'li' ko 'ul' (todoList) ke andar dalo
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// --- Page khulte hi sabse pehle purane tasks ko screen par dikhane ke liye function chalaya ---
renderTasks();


// 4. Jab user naya task add karne ke liye "Add Task" button dabaye
addBtn.addEventListener('click', function() {
    const taskText = todoInput.value;
    
    // Agar input khali hai, toh kuch mat karo
    if(taskText === '') return;

    // A. Naye task ko array me daalo
    tasks.push(taskText);

    // B. LocalStorage me stringify karke save karo
    localStorage.setItem('myTasks', JSON.stringify(tasks));

    // C. Screen ko dobara update karo taaki naya task bhi list me dikhe
    renderTasks();

    // D. Input box ko wapas khali kar do
    todoInput.value = '';
});