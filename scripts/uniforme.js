'use strict';
/////////////////////////////////// Declaracao de variaveis e elementos //////////////////////////////////////////////////////
// Index Droplist de condicoes Uniforme
let indexUniformeList = document.getElementById('condicoes').selectedIndex;
// Formulario
let form = document.getElementById("probForm");
// Botao Calcular
let botaoCalcular = document.getElementById("calcularUniforme");
// Flag pra deletar elemento
var flagElemento = false;
//////////////////////  GETS ///////////////////////////////////////
// Pega Quantidade
function getQuantidade() {
    let quantidade = form.quantidade.value;
    return parseFloat(quantidade);
}
// Pega Ponto Minimo
function getPontoMinimo() {
    let pontoMinimo = form.pontoMinimo.value;
    return parseFloat(pontoMinimo);
}
// Pega Ponto Maximo
function getPontoMaximo() {
    let pontoMaximo = form.pontoMaximo.value;
    return parseFloat(pontoMaximo);
}
// Pega X 
function getX() {
    let x = form.x.value;
    return parseFloat(x);
}
// Pega Y
function getY() {
    let y = form.y.value;
    return parseFloat(y);
}
// Pega Amostra (N)
function getAmostra() {
    let amostra = form.tamanhoN.value;
    return parseFloat(amostra);
}
// Pega Sucesso (P)
function getSucesso() {
    let sucesso = form.sucesso.value;
    return parseFloat(sucesso);
}
// Pega Fracasso (Q)
function getFracasso() {
    let fracasso = form.fracasso.value;
    return parseFloat(fracasso);
}
//Pega Evento (K)
function getEvento() {
    let evento = form.variavel.value;
    return parseFloat(evento);
}
// Pega Ate 
function getAte() {
    let ate = form.ateMax.value;
    return parseFloat(ate);
}
// Pega Media 
function getMedia() {
    let media = form.media.value;
    return parseFloat(media);
}
// Pega Desvio Padrao
function getDesvioPadrao() {
    let desvioPadrao = form.desvioPadrao.value;
    return parseFloat(desvioPadrao);
}
////////////////////////////////////////////////////////////////
/////////// Funcoes de calculo ////////////

// Maior Que
function maiorQueDistUniforme() {
    let a = getPontoMinimo();
    let b = getPontoMaximo();
    let maior = getQuantidade();


    let resultado = (1 / (b - a)) * (b - maior);
    let porcent = resultado * 100;

    return parseFloat(porcent) + "%";
}
// Menor Que
function menorQueDistUniforme() {
    let a = getPontoMinimo();
    let b = getPontoMaximo();
    let qtd = getQuantidade();

    let resultado, porcent = 0;

    resultado = (1 / (b - a)) * (qtd - a);
    porcent = resultado * 100;
    return (porcent + "%");
}
// Entre 
function entreDistUniforme() {
    let a = getPontoMinimo();
    let b = getPontoMaximo();
    let vetIntervalo = [getX(), getY()];

    let resultado, porcent = 0;

    resultado = (1 / (b - a)) * (vetIntervalo[1] - vetIntervalo[0]);
    porcent = resultado * 100;
    return (porcent + "%");

}
// Desvio e Variacao 
function desvioPadraoDistUniforme() {
    let a = getPontoMinimo();
    let b = getPontoMaximo();

    let media = (a + b) / 2; //resultado da média 

    let desvioPadrao, resultado, porcent = 0;
    let aux1 = Math.pow(b - a, 2); /*variáveis*/
    let aux2 = aux1 / 12; /*auxiliares*/
    desvioPadrao = (Math.sqrt(aux2).toFixed(2)); //resultado do desvio padrão
    return desvioPadrao

}
// Media 
function mediaDistUniforme() {

    let a = getPontoMinimo();
    let b = getPontoMaximo();

    let media = (a + b) / 2; //resultado da média


    return media;

}
/////////////////////////////////////



// Define a operacao e retorna resultado
function operacao() {
    let resultado;

    // Index Droplist de condicoes Uniforme
    let indexUniformeList = document.getElementById('condicoes').selectedIndex;

    let campo = document.getElementById('rowDadosProbabilidade');
    let quadro = document.createElement('table');
    quadro.classList.add("table", "table-bordered", "table-striped", "quadroProbUniforme");

    campo.appendChild(quadro);

    // Criando a linha de cabeçalho da tabela
    let cabecalho = document.createElement('thead');
    cabecalho.classList.add('thead-light');
    // Posicionando a linha do cabeçalho
    quadro.appendChild(cabecalho);
    // Criando as células do cabeçalho'
    let cabec = document.createElement('th');
    cabecalho.appendChild(cabec);
    cabec.innerText = "Resultado";
    // Criando cedula da tabela
    let celula = document.createElement('td');
    quadro.appendChild(celula);


    switch (indexUniformeList) {
        case 0:
            // Maior que
            console.log("entrou");
            resultado = maiorQueDistUniforme();

            celula.innerText = resultado;
            break;
        case 1:
            // Entre
            console.log("entrou");

            resultado = entreDistUniforme();
            celula.innerText = resultado;
            break;
        case 2:
            //Menor que
            console.log("entrou");
            resultado = menorQueDistUniforme();
            celula.innerText = resultado;
            break;
        case 3:
            //Desvio e Variacao
            console.log("entrou");
            resultado = desvioPadraoDistUniforme();
            celula.innerText = resultado;
            break;
        case 4:
            // Valor Medio
            console.log("entrou");
            resultado = mediaDistUniforme();
            celula.innerText = resultado;
            break;
        default:
            break;
    }
}
////////////////////////////////////////////////////
// Funcao de mostrar

/////// Eventos 
botaoCalcular.addEventListener("click", operacao);