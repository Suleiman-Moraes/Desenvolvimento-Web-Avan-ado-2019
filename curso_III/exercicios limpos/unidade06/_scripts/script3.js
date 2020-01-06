function detectarTecla(e){
    var tecla = e.keyCode;
    var meuP = document.querySelector('p');

    switch(tecla){
        case 37:
            meuP.innerHTML = 'Esquerda';
            break;
        case 39:
            meuP.innerHTML = 'Direita';
            break;
        case 38:
            meuP.innerHTML = 'Para cima';
            break;
        case 40:
            meuP.innerHTML = 'Para baixo';
            break;
    }
}

document.addEventListener('keydown', detectarTecla);