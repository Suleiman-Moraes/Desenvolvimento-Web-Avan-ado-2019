// JavaScript Document
window.onload = function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    var minhaAPI = "1a2ab56f281bcaaf9dc7a9c42f42c0cd";
    var resultado;
    var cidade;
    cidades.value = 0;

    cidades.onchange = function () {

        var ajax = null;
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            ajax = new ActiveXObject('Msxml2.XMLHTTP');
        }

        cidade = cidades.value;

        if (cidade != 0) {
            ajax.open("GET", `${url}appid=${minhaAPI}&q=${cidade}&units=metric&lang=pt`, true);
            ajax.send(null);
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4) {
                    if (ajax.status == 200) {
                        resultado = JSON.parse(ajax.responseText);
                        nome_cidade.innerHTML = resultado.name;
                        temp_min.innerHTML = (resultado.main.temp_min + 'º C').replace('\.', ',');
                        temp_max.innerHTML = (resultado.main.temp_max + 'º C').replace('\.', ',');
                        descricao.innerHTML = resultado.weather[0].description.replace(/^./, resultado.weather[0].description.charAt(0).toUpperCase());
                    }
                }
            }
        }
    };
}