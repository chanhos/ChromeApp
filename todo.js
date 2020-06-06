const toDoForm = document.querySelector(".js-todoForm")  , 
 toDoInput = form.querySelector("input")  , 
 toDoList = document.querySelector(".js-toDoList") ; 

 const TODOS_LS = "toDos";

function loadToDos(){

    const toDos = localStorage.getItem(TODOS_LS);

    if(todos !== null)
    {
    }
}


 function init(){
    loadToDos();

 }


 init();