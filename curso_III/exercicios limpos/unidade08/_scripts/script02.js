var minhaFoto;
var album;
var indice;
var intervalo;

function mudarFoto(){
    minhaFoto.setAttribute('src', album[indice]);
    indice ++;
    if(indice >= album.length){
        // clearInterval(intervalo);
        indice = 0;
    }
}

function iniciar(){
    minhaFoto = document.querySelector('#espacofoto');
    album = ['_img/arco.jpg', '_img/basilica.jpg', '_img/coliseu.jpg', '_img/eifel.jpg'];
    indice = 0;
    intervalo = setInterval(mudarFoto, 4000);
}

window.onload = iniciar;