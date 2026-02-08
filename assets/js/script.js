const add = document.getElementById("add");
const todoInput = document.getElementById("todo-input");
const todoList = document.querySelector(".todoList");
const editTodoBtn = document.querySelector(".edit");
add.addEventListener("click", addTodo);
todoList.addEventListener("click", editTodo); 


function addTodo() {

   if(todoInput.value.trim() == "") {
        alert("You need to write something!");
} else {
    const createLiEl = document.createElement("li");
    createLiEl.innerHTML = `<span class="todo-text">${todoInput.value.trim()}</span>
                            <div>
                                <button class="btn delete">Delete</button>
                                <button class="btn edit">Edit</button>
                            </div>`;
    todoList.appendChild(createLiEl);

}
}

function editTodo (e) {
    
    console.log(e.target);
}