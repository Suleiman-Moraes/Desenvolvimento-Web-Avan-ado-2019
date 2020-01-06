window.addEventListener('scroll', function(){
    posicaoY.innerHTML = this.window.scrollY;

    if(window.scrollY >= 300){
        conteudo.style.display = 'block';
    }
});