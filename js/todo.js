const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = []; //배열

const TODO_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //클릭한 li.id와 다른 toDo 남겨둠
    saveToDos();
}

function paintToDo(toDo){
const li = document.createElement("li");
li.id = toDo.id;
const span = document.createElement("span");
span.innerText = toDo.text;

const button = document.createElement("button");
button.innerText = "❌";
button.classList.add("todo__btn")
button.addEventListener("click",deleteToDo);

li.appendChild(span);
li.appendChild(button);
toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),  //랜덤 수
    };

    toDos.push(newTodoObj); //배열에 Todo 넣기
    paintToDo(newTodoObj);  //todoList 그리기
    saveToDos();  //localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDosList = localStorage.getItem(TODO_KEY);

if(saveToDosList !== null){
    const parsedToDos = JSON.parse(saveToDosList);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

