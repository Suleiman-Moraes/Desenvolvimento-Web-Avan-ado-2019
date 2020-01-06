function mudarCor(cor) {
    janela = document.querySelector('#janela').className = cor;
}

function iniciar() {
    botao2.addEventListener("click", function (){
        mudarCor('vermelho');
    });
    botao1.addEventListener("click", function (){
        mudarCor('azul');
    });
}

window.onload = iniciar;