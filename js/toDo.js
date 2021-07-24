const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
const TODO_ITEM = "todo-item"
const DEL_BTN = "todo-del"
let toDos = [];
const savedToDos = localStorage.getItem(TODOS_KEY);


function onTodoSubmit(event){
    event.preventDefault();
    
    const newTask ={
        id:Date.now(),
        text:toDoInput.value
    }
    toDoInput.value = "";
    
    toDos.push(newTask);
    paintToDoList(newTask);
    saveToDos();

}

function paintToDoList(newTask){
    const li = document.createElement("li");
    li.id = newTask.id;
    
    const span = document.createElement("span");
    span.classList.add(TODO_ITEM);
    span.innerText = newTask.text;



    const button  = document.createElement("button");
    button.innerText = "🗑️ ";
    button.classList.add(DEL_BTN);
    button.addEventListener("click",deleteToDo);


    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item)=>item.id!=parseInt(li.id));
    saveToDos();
}


todoForm.addEventListener("submit",onTodoSubmit);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDoList);

}
