var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sounds")
var licuadora = document.getElementById("blender");
var botonLicuadora = document.getElementById("blender-button-sounds")


function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        ruidoLicuadora();
        licuadora.classList.add("active");
       
    } else {
        estadoLicuadora = "apagada"
        ruidoLicuadora();
        licuadora.classList.remove("active");
        
       
    }
}
function ruidoLicuadora(){
    if( sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}