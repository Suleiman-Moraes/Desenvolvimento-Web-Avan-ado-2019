function atribuirTexto() {
    nome.value = "André";   
}

function iniciar() {
    botao.addEventListener("click",atribuirTexto);
}

window.onload = iniciar;