const COORDS = 'coords'; 

function handleSucess(position){
    console.log(position);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleSucess , 
    err => console.log("Can't Acess geoLoaction") );
}

function loadCoords(){
    const loadedcoords = localStorage.getItem(COORDS);

    if(loadedcoords === null)
    {
        askForCoords();
    }else{

    }
}

function init(){
    loadCoords();
}

init();