const toDoForm = document.querySelector(".js-todoForm")  , 
 toDoInput = toDoForm.querySelector("input")  , 
 toDoList = document.querySelector(".js-toDoList") ; 

 const TODOS_LS = "toDos";

 var toDos = [];

 function saveToDos(){
     localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
 }

function loadToDos(){

    const  lodeadTodos = localStorage.getItem(TODOS_LS);

    if( lodeadTodos !== null)
    {
        const parsedToDos = JSON.parse(lodeadTodos);
        parsedToDos.forEach(toDo => {
            paintToDo(toDo.text) ;
        });
    }
}



function delTodo(event){
    console.log(event);
    const targetli = event.target.parentNode ; 
    
    const results = toDos.filter( todo => todo.id != targetli.id ) ; 
    console.log(results);
    toDos = [];
    localStorage.removeItem(TODOS_LS);
    
    while(toDoList.hasChildNodes())
    {
        toDoList.removeChild(toDoList.firstChild);
    }
    
    //새로만든 todos로 paint 
    results.forEach(result => {
        paintToDo(result.text);
    });
    
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button") ; 
    delBtn.className = "delbutton" ;
    delBtn.innerHTML = "✂" ; 
    
    delBtn.addEventListener("click", delTodo) ;

    const span = document.createElement("span"); 
    span.innerText = text ;
    li.appendChild(span) ;
    li.appendChild(delBtn) ; 
    toDoList.appendChild(li);
    
    const newId = toDos.length +1  ; 
    li.id = newId; 
    
    const todoObj = {
        text : text ,
        id : newId
    };
    toDos.push(todoObj);   
    saveToDos();
}



function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

 function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
 }


 init();