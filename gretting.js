const form = document.querySelector(".js-form");

const input = form.querySelector("input"); 

const greeting = document.querySelector(".js-greetings") ;

const USER_LS = "currentUser" ,   SHOWING_CN = "showing" ; 

const saveName = function(text){
    localStorage.setItem(USER_LS,text) ;
};

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = input.value ; 
    console.log(currentValue);
    saveName(currentValue);
    loadName();
    //paintGreeting(currentValue);
}




function askForName()
{
    
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit) ; 
} 


function paintGreeting(text)
{
    console.dir(form.classList);
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN) ;
    greeting.innerText = `Hello ${text}` ; 
}

function loadName(){
    
    const currentUser = localStorage.getItem(USER_LS);
    
    if (currentUser === null)
    {
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}


init();
