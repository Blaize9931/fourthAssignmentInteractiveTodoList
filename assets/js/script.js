
const add = document.getElementById("add");
const todoInput = document.getElementById("todo-input");
const todoList = document.querySelector(".todoList");
const editBtn = document.querySelector(".")
add.addEventListener("click", addTodo);
  

function addTodo() {

   if(todoInput.value.trim() == "") {
        alert("You need to write something!");
} else {
    const createLiEl = document.createElement("li");
    createLiEl.innerHTML = `${todoInput.value.trim()}
                            <div>
                                <button class="btn delete">Delete</button>
                                <button class="btn edit">Edit</button>
                            </div>`;
    todoList.appendChild(createLiEl);

}
}
