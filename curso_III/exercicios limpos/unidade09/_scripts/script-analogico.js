var agora;

function mostrarHora(){
    agora = new Date();
    var h = agora.getHours();
    var m = agora.getMinutes();
    var s = agora.getSeconds();
    var mi = agora.getMilliseconds();
    var hr = h * 30 + m/2;
    var sec = s * 6;
    var min = m * 6 + sec/60;
    sec = sec + mi/166;

    hora.style.transform = `rotate(${hr}deg)`;
    minuto.style.transform = `rotate(${min}deg)`;
    segundo.style.transform = `rotate(${sec}deg)`;
}
var intevalo = setInterval(mostrarHora, 1);