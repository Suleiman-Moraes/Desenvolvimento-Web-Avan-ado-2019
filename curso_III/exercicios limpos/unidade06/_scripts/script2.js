function pegarPosicaoMouse(e){
    var posX = document.querySelector('#posicaoX');
    posX.innerHTML = e.clientX;
    var posY = document.querySelector('#posicaoY');
    posY.innerHTML = e.clientY;

    if(e.clientY < 10){
        var minhaJanela = document.querySelector('#janela');
        minhaJanela.style.display = 'block';
    }
}

document.addEventListener('mousemove', pegarPosicaoMouse);