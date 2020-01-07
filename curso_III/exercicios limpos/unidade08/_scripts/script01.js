function mudarFoto(){
    var minhaFoto = document.querySelector('#espacofoto');

    minhaFoto.setAttribute('src', '_img/basilica.jpg');
}

function iniciar(){
    setTimeout(mudarFoto, 5000);
}

window.onload = iniciar;