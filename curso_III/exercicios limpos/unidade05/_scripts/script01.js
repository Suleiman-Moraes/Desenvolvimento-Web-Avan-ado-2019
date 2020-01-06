function mudaCor(cor){
    janela.style.backgroundColor = cor;
}

function iniciar(){
    botao1.addEventListener("click", function(){
        mudaCor('yellow');
    });
    botao2.addEventListener("click", function(){
        mudaCor('red');
    });
}

window.onload = iniciar;