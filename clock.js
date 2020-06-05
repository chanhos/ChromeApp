const colockContainer = document.querySelector(".js-clock");

const clocktitle = colockContainer.querySelector("h1") ;

function getTime()
{
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${hours > 10 ? hours : `0${hours}`}:
    ${ minute >= 10 ? minute : `0${minute}` }:
    ${ second >= 10 ? second : `0${second}` }` ; 
}

function init()
{    
    clocktitle.innerHTML = getTime();
    setInterval(()=> clocktitle.innerHTML = getTime(), 1000) ;
}


init();