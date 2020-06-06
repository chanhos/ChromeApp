const COORDS = 'coords'; 

function handleSucess(position){
    console.log(position);
    const coordObj = {
        latitude : position.coords.latitude ,
        longitude : position.coords.longitude ,
    } ;
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
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