'use strict';

let redirecionamentoContador = document.getElementById('redirecionamentoContador');

function redirecionarHome() {
    var time = 20000;
    var contador = (time / 1000);
    setTimeout(function () {
        window.location.href = "/index.html";
    }, time);
    setInterval(
        function () {
            contador -= 1;
            console.log(contador);
            redirecionamentoContador.innerText = contador;
        }, 1000);
}