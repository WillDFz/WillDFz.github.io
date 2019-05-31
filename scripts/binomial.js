'use strict';

// Formulario
let formB = document.getElementById("probForm");
// Botao Calcular
let botaoCalcularB = document.getElementById("calcularBinomial");
// Flag pra deletar elemento
let flagElementoB = false;
///////////////////////////////////////// GETS ////////////////////////////
// Pega Amostra (N)
function getAmostra() {
    let amostra = formB.tamanhoN.value;
    return parseFloat(amostra);
}
// Pega Sucesso (P)
function getSucesso() {
    let sucesso = formB.sucesso.value;
    return parseFloat(sucesso);
}
// Pega Fracasso (Q)
function getFracasso() {
    let fracasso = formB.fracasso.value;
    return parseFloat(fracasso);
}
//Pega Evento (K)
function getEvento() {
    let evento = formB.variavel.value;

    let eventoSplit = evento.split(";");
    let eventoVetorInt = [];
    for (let i = 0; i < eventoSplit.length; i++) {
        eventoVetorInt[i] = parseInt(eventoSplit[i]);
    }

    console.log(eventoVetorInt);

    return eventoVetorInt;
}
///////////////////////////////////////////////////////////////////////////

//// Funcoes de calculo
// Probabilidade Binomial
function probabilidadeBinomial() {
    let n = getAmostra(); // 4 valores necessários para os cálculos
    let p = getSucesso(); // (todos são fornecidos pelo usuário)
    let q = getFracasso(); // sucesso + fracasso = 1 <- REGRA
    let k = getEvento(); //o usuário pode fornecer mais de um valor para o evento

    let resultado = 0;

    for (let i = 0; i < k.length; i++) {
        resultado += analiseCombinatoria(n, k[i]) * Math.pow(p, k[i]) * Math.pow(q, n - k[i]);
    }

    let resultadoPorcent = resultado * 100;

    console.log(resultadoPorcent);

    return resultadoPorcent.toFixed(2); //resultado final retornado pela probabilidade, em %
}
// Analise Combinatoria
function analiseCombinatoria(n, k) { //retorna o valor da análise combinatória, que énecessário para encontrar a probabilidade

    let resultado = 0;

    resultado = fatorial(n) / (fatorial(k) * (fatorial(n - k)));

    console.log(resultado);
    return resultado
}
// Fatorial
function fatorial(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {

        return (num * fatorial(num - 1)); //Ex: 6! = 6 * 5! 
    }
}
// Media Binomial
function mediaDistBinomial() {
    let n = getAmostra();
    let p = getSucesso();

    let resultado = n * p;

    return resultado;
}
// Desvio Padrao 


function desvioPadraoDistBinomial() {
    let n = getAmostra();
    let p = getSucesso();
    let q = getFracasso();

    let resultado = Math.sqrt(n * p * q);

    return resultado

}
////////////////////////////////////////////////////////////////
// Define a operacao e retorna resultado
function operacaoBinomial() {
    if (flagElementoB == false) {
        flagElementoB = true;
        let resultado;


        // Index Droplist de condicoes Binomial
        let indexBinomialList = document.getElementById('condicoesBinomial').selectedIndex;

        let campo = document.getElementById('rowDadosProbabilidade');
        let quadro = document.createElement('table');
        quadro.classList.add("table", "table-dark", "table-bordered",  "quadroProbBinomial");

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
        // Cria corpo da tabela
        let tableBody = document.createElement('tbody');
        tableBody.classList.add("table-striped");
        quadro.appendChild(tableBody);
        // Criando cedula da tabela
        let celula = document.createElement('td');
        tableBody.appendChild(celula);
        
        switch (indexBinomialList) {
            case 0:
                // Probabilidade
                let tamanhoN = document.getElementById("tamanhoN").value;
                let sucesso = document.getElementById("sucesso").value;
                let fracasso = document.getElementById("fracasso").value;
                let variavel = document.getElementById("variavel").value;
                if (tamanhoN == "" || sucesso == "" || fracasso == "" || variavel == "") {
                    alert("Preencha todos os campos!");
                    celula.innerText = "Invalido";
                    break;
                } else {
                    resultado = probabilidadeBinomial();

                    celula.innerText = resultado;
                }
                break;
            case 1:
                // Media
                let tamanhoN_ = document.getElementById("tamanhoN").value;
                let sucesso_ = document.getElementById("sucesso").value;
                if (tamanhoN_ == "" || sucesso_ == "") {
                    alert("Preencha todos os campos!");
                    celula.innerText = "Invalido";
                    break;
                } else {
                    resultado = mediaDistBinomial();
                    celula.innerText = resultado;
                }
                break;
            case 2:
                // Desvio Padrao
                let tamanhoN_1 = document.getElementById("tamanhoN").value;
                let sucesso_1 = document.getElementById("sucesso").value;
                let fracasso_ = document.getElementById("fracasso").value;
                if (tamanhoN_1 == "" || sucesso_1 == "" || fracasso_ == "") {
                    alert("Preencha todos os campos!");
                    celula.innerText = "Invalido";
                    break;
                } else {
                    resultado = desvioPadraoDistBinomial();
                    celula.innerText = resultado;
                }
                break;
            default:
                break;
        }
    } else {
        // Remove tabela existente
        document.querySelector('.table').remove();
        flagElementoB = false;
        operacaoBinomial();
    }
}
////////////////////////////////////////////////////
// Funcao de mostrar

/////// Eventos 
botaoCalcularB.addEventListener("click", operacaoBinomial);