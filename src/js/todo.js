const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    
    toDos = toDos.filter((toDo)=>toDo.id !== Number(li.id));
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value = "";
const newTodoObject = {
    text: newTodo,
    id: Date.now()
}
toDos.push(newTodoObject);
paintTodo(newTodoObject);
saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
const parsedToDos = JSON.parse(savedToDos);
parsedToDos.forEach(paintTodo);
}   