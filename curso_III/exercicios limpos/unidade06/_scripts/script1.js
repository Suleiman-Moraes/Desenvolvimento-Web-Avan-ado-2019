function detectarResolucao(){
    var lagura;
    var arquivoCss = document.querySelector('#meuCSS');
    if(window.innerWidth){
        lagura = window.innerWidth;
    }
    else if(document.documentElement && document.documentElement.clientWidth){
        lagura = document.documentElement.clientWidth
    }
    else if(document.body){
        lagura = document.body;
    }

    if(lagura < 450){
        arquivoCss.setAttribute('href', '_css/css_smartphone.css');
    }
    else{
        arquivoCss.setAttribute('href', '_css/css_desktop.css');
    }
    console.log(window.innerWidth);
}

window.onload = window.onresize = detectarResolucao;