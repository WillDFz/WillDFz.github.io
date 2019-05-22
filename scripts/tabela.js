'use strict'
// Botao Calcular
let botaoCalcular = document.getElementById("calcular");
// Flag Tabela
var flag = false;
// Flag Quadro
var flagQ = false;
// Pega  o nome da Variavel
function getFormVariavel() {
    let form = document.getElementById("descriForm");
    let variavel = form.variavel.value;
    return variavel;
}
// Pega os Valores no campo
function getFormValor() {
    let form = document.getElementById("descriForm");
    let valor = form.dados.value;
    return valor;
}
// Funcao para usar separador e transformar string em array
function quebraString() {
    // Separa os elementos da String por ; e injeta no vetor
    let vetorStr = getFormValor().split(";");
    // Cria um vetor vazio para ser preenchido com numeros inteiros
    let vetorInt = [];
    for (let i = 0; i < vetorStr.length; i++) {
        vetorInt[i] = parseFloat(vetorStr[i]);
    }
    if (isNaN(vetorInt[0] && isNaN(vetorInt[1]))) {
        vetorStr.sort();
        return vetorStr;
    } else {
        selecao(vetorInt);
        return vetorInt;
    }
}



// Funcao pra Media
function mediaDiscreta() {
    // Chama o vetor principal
    let vet = quebraString();
    // Diferenciando os vetores de Valor e Repeticao com contador(vet)
    let vetorTratado = contador(vet);
    // Valores
    let valores = vetorTratado[0];
    // Chama Vetor de Repeticao
    let repeticoes = vetorTratado[1];

    let acm = 0;
    for (let i = 0; i < repeticoes.length; i++) {
        acm += valores[i] * repeticoes[i];
    }
    let media = (acm / vet.length).toFixed(2);
    return media;
}

function mediaContinua() {

    let fi = acmContinua(quebraString());

    let vetorRaw = quebraString();
    let vetorA = contador(vetorRaw);

    let rep = vetorA[0];

    let media, soma = 0;
    let frequencia = 0;
    /// Definindo range entre as variaveis
    let range = rangeClasses(vetorRaw);
    // Intervalo entre variaveis
    let intervalos = range[0];
    // Numero de classes
    let numClasses = range[1];
    let primeiro = vetorRaw[0];

    let fim = primeiro + intervalos;

    for (let i = 0; i < numClasses; i++) {
        soma += (((primeiro + fim) / 2) * fi[i]); //acumula a váriavel * sua frequencia (de cada índice)
        frequencia += fi[i]; //salva a quantidade de elementos pesquisados

        primeiro = fim;
        fim += intervalos;
    }
    media = soma / frequencia; //divide a soma total pelo nº total de elementos pesquisados

    return media.toFixed(2);
}

function medianaDiscreta() {
    // Chama o vetor principal
    let vet = quebraString();
    // Diferenciando os vetores de Valor e Repeticao com contador(vet)
    let vetorTratado = contador(vet);
    // Valores
    let valores = vetorTratado[0];
    // Chama Vetor de Repeticao
    let repeticoes = vetorTratado[1];

    let len = vet.length;
    let vet2 = [];
    if (len % 2 == 0) {
        let mediana1 = vet[len / 2 - 1];
        let mediana2 = vet[(len / 2)];
        console.log(mediana1);
        console.log(mediana2);

        vet2.push(mediana1);
        vet2.push(mediana2);
        if (vet2[0] == vet2[1]) {
            return vet2[0];
        }
        if (isNaN(vet2[0])) {
            return vet2;
        } else {
            return (vet2[0] + vet2[1]) / 2;
        }
    } else {
        let medianaFloat = len / 2;
        let mediana = Math.ceil(medianaFloat);
        if (isNaN(vet[mediana - 1])) {
            return vet[mediana - 1];
        } else {
            return Math.ceil(vet[mediana - 1]);
        }
    }
}

function medianaContinua() {

    let range = rangeClasses(quebraString());
    let intervalos = range[0];
    let numClasses = range[1];
    let vetTratado = quebraString();
    let facm = acmContinua(quebraString());


    let posicao, retornoMedianaContinua, facmAnterior, fSimples, limiteInf, freqAcm = 0;
    let resultado = vetTratado.length / 2;

    let vetLimiteInf = []
    vetLimiteInf[0] = vetTratado[0];

    for (let i = 1; i < numClasses; i++) {
        vetLimiteInf[i] = vetLimiteInf[i - 1] + intervalos;

    }

    let vetFacm = [];
    for (let i = 0; i < numClasses; i++) {
        freqAcm += facm[i];
        vetFacm[i] = freqAcm;
    }



    if (resultado <= vetFacm[0]) {
        facmAnterior = 0;
        fSimples = facm[0];
        posicao = vetTratado[0];
        limiteInf = vetLimiteInf[0];

    } else {
        for (let i = 1; i < vetTratado.length; i++) {
            if (resultado > vetFacm[i - 1] && resultado <= vetFacm[i]) {
                facmAnterior = vetFacm[i - 1];
                fSimples = facm[i];
                posicao = vetTratado[i];
                limiteInf = vetLimiteInf[i];
            }
        }
    }




    retornoMedianaContinua = limiteInf + (((resultado - facmAnterior) / fSimples) * intervalos);
    return retornoMedianaContinua.toFixed(2);



}

function modaContinua() {
    /// Definindo range entre as variaveis
    let range = rangeClasses(quebraString());
    // Intervalo entre variaveis
    let intervalos = range[0];

    let maior = 0;
    let vetorFreqclasses = acmContinua(quebraString());


    for (let i = 0; i < vetorFreqclasses.length; i++) {
        if (vetorFreqclasses[i] > maior) {
            maior = vetorFreqclasses[i];
        }
    }
    let indexMaior = vetorFreqclasses.indexOf(maior);
    let celula = document.querySelector(".range" + indexMaior).innerText;
    let vetorPronto = celula.split("|-- ");

    let soma = (parseFloat(vetorPronto[0]) + parseFloat(vetorPronto[1]));

    let media = soma / 2;

    return media;
}


function moda() {
    // Chama o vetor principal
    let vet = quebraString();
    // Diferenciando os vetores de Valor e Repeticao com contador(vet)
    let vetorTratado = contador(vet);
    // Valores
    let valores = vetorTratado[0];
    // Chama Vetor de Repeticao
    let repeticoes = vetorTratado[1];

    let cont = 0;
    let maior = 0;
    let modaVet = [];
    for (let i = 0; i < valores.length; i++) {
        if (repeticoes[i] > maior) {
            maior = repeticoes[i];
        }
    }
    for (let i = 0; i < valores.length; i++) {
        if (repeticoes[i] == maior) {
            modaVet.push(valores[i]);
            cont++;
        }
    }
    if (cont == valores.length) {
        return "Nao ha";
    }
    return modaVet;
}


function tabelaTipo() {
    // Chama o vetor principal
    let vet = quebraString();
    // Diferenciando os vetores de Valor e Repeticao com contador(vet)
    let vetorTratado = contador(vet);
    // Chama Vetor de Valores
    let valores = vetorTratado[0];
    if (valores.length <= 6) {
        return tabelaGenerica(), quadroDados();
    } else {
        return tabelaDeClasses(), quadroDadosContinua();
    }
}
// Funcao de ordenacao
function selecao(y) {
    let menor, aux, i, j;
    for (i = 0; i < y.length - 1; i++) {
        menor = i;
        for (j = i; j < y.length; j++) {
            if (y[j] < y[menor]) {
                menor = j;
            }
        }
        aux = y[i];
        y[i] = y[menor];
        y[menor] = aux;
    }
    return y;
}

// Funcao que separa e retorna vetor de valores e repeticoes
function contador(vet) {
    let valores = [];
    let repeticoes = [];
    let prev;

    for (var i = 0; i < vet.length; i++) {
        if (vet[i] !== prev) {
            valores.push(vet[i]);
            repeticoes.push(1);
        } else {
            repeticoes[repeticoes.length - 1] = repeticoes[repeticoes.length - 1] + 1;
        }
        prev = vet[i];
    }
    return [valores, repeticoes];
}

function acmContinua(vet) {
    let vetor = quebraString();
    let range = rangeClasses(vetor);
    // Intervalo entre variaveis
    let intervalo = range[0];
    // Numero de classes
    let qtdClasses = range[1];
    let inicio = vet[0];
    let fim = inicio + intervalo;
    let acmClasses = [];
    for (let i = 0; i < qtdClasses; i++) {
        let cont = 0;
        for (let j = 0; j < vet.length; j++) {
            if (vet[j] >= inicio && vet[j] < fim) {
                cont++;
            }
            acmClasses[i] = cont;
        }
        inicio += intervalo;
        fim += intervalo;
    }
    return acmClasses
}

function fiPercent(rept, vet) {
    let div = rept / vet.length;
    let perc = div * 100;
    let percFixed = perc.toFixed(2);
    return percFixed;
}

function acumularFac(vetor) {
    let acm = 0;
    for (let i = 0; i < vetor.length; i++) {
        acm += vetor[i];
    }
    return acm;
}

function acumularFrequencia(vetor) {
    let acm = 0;
    for (let i = 0; i < vetor.length; i++) {
        acm = acm + vetor[i];
    }
    return acm;
}

function rangeClasses(vet) {
    let maiorVar = vet[vet.length - 1]; //Guardando o maior número, considerando que o vetor já esteja ordenado
    let menorVar = vet[0]; //Guardando o menor número, considerando que o vetor já esteja ordenado
    let intervalo, x;
    let amplitude = maiorVar - menorVar; //Cálculo da amplitude
    let linhas = [];

    let aux = Math.sqrt(vet.length - 1);
    let aux2 = parseInt(aux);

    linhas.push(aux2 - 1);
    linhas.push(aux2);
    linhas.push(aux2 + 1);

    do {
        for (let i = 0; i < linhas.length - 1; i++) {
            x = (amplitude + 1) / linhas[i];

            if (x % 1 === 0) {
                let vetAux = [x, linhas[i]];
                return vetAux;
            }
        }
        amplitude += 1;
    } while (x % 1 !== 0);
}

function desvioPadraoDiscreta() { //só para tabelas quantitativas

    let vet = quebraString(); //vetor sem estar tratado, PRECISAMOS DO LENGTH DELE
    let vetorTratado = contador(vet);
    let valores = vetorTratado[0];
    let repeticoes = vetorTratado[1];
    let media = mediaDiscreta(); // pegar o resultado da media discreta
    let dp, quadrado, subtracao, acm = 0;
    let somatoria = 0;
    for (let i = 0; i < valores.length; i++) {

        subtracao = valores[i] - media;
        quadrado = Math.pow(subtracao, 2) * repeticoes[i];
        somatoria += quadrado;



    }
    let populacao = document.getElementById("populacao").checked;
    let amostra = document.getElementById("amostra").checked;
    if (populacao == true) {

        let dpPopulacao = (somatoria / (vet.length)) //variável auxiliar
        dp = Math.sqrt(dpPopulacao).toFixed(2);
        return dp;

    } else {

        let dpAmostra = (somatoria / (vet.length - 1)); //variável auxiliar
        dp = Math.sqrt(dpAmostra).toFixed(2);
        return dp;

    }

}



function coefVariacaoDiscreta() {
    let desvio = desvioPadraoDiscreta(); //coeficiente de variação discreta precisa receber o valor do desvio padrão discreta
    let media = mediaDiscreta(); //também precisa receber a média discreta
    let coefVariacao = (desvio / media) * 100;
    return parseInt(coefVariacao) + "%";
}

function desvioPadraoContinua() {
    let vet = quebraString();
    /// Definindo range entre as variaveis
    let range = rangeClasses(quebraString());
    // Intervalo entre variaveis
    let intervalos = range[0];
    // Numero de classes
    let numClasses = range[1];

    let vetorAux = acmContinua(quebraString());
    let vetorTratado = contador(vet);
    let valores = vetorTratado[0];
    let repeticoes = vetorTratado[1];
    let dp, quadrado, subtracao, acm, somatoria = 0;
    let primeiro = vet[0];
    let final = primeiro + intervalos;
    let media = mediaContinua();
    let mult = 0;

    for (let i = 0; i < numClasses; i++) {

        subtracao = (((final + primeiro) / 2) - media);

        quadrado = Math.pow(subtracao, 2);

        mult = quadrado * vetorAux[i];
        console.log(vetorAux[i]);
        somatoria += mult;

        primeiro = final;
        final += intervalos;
    }
    // Declarando os inputs tipo radio
    let populacao = document.getElementById("populacao").checked;


    if (populacao == true) {
        let dpPopulacao = somatoria / vet.length //variável auxiliar
        dp = Math.sqrt(dpPopulacao);
        return dp.toFixed(2);
    } else {
        let dpAmostra = (somatoria / (vet.length - 1)); //variável auxiliar
        dp = Math.sqrt(dpAmostra);
        return dp.toFixed(2);
    }
}

function coefVariacaoContinua() {
    let desvio = desvioPadraoContinua(); //coeficiente de variação discreta precisa receber o valor do desvio padrão discreta
    let media = mediaContinua(); //também precisa receber a média discreta
    let coefVariacao = (desvio / media) * 100;
    return coefVariacao.toFixed(2) + "%";
}

function medidasSeparatrizes() { //função precisa receber o vetor de variáveis (sem repetição), vetor de freq acm e a medida escolhida pelo usuário

    // Chama o vetor principal
    let vet = quebraString();
    // Diferenciando os vetores de Valor e Repeticao com contador(vet)
    let vetorTratado = contador(vet);
    // Chama Vetor de Valores
    let valores = vetorTratado[0];
    // Repeticoes
    let repeticoes = vetorTratado[1];

    let medida = document.getElementById('separatrizes').selectedIndex;
    let medidaNum = document.getElementById('separatrizNumberInput').value;


    let freqAcm = 0;
    let vetFreq = [];
    let resultado = 0;

    for (let i = 0; i < repeticoes.length; i++) {
        freqAcm += repeticoes[i];
        vetFreq[i] = freqAcm;
    }


    switch (medida) {
        case 0:
            if (medidaNum == 1 || medidaNum == 2 || medidaNum == 3 || medidaNum == 4) { //únicos Quartil que existem
                resultado = ((medidaNum * 25) / 100) * (freqAcm);

                if (resultado <= vetFreq[0]) {
                    return valores[0];
                } else {
                    for (let i = 1; i < valores.length; i++) {
                        if (resultado > vetFreq[i - 1] && resultado <= vetFreq[i]) {
                            return valores[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }
            break;
        case 1:
            if (medidaNum == 1 || medidaNum == 2 || medidaNum == 3 || medidaNum == 4 || medidaNum == 5) { //únicos Quintil que existem
                resultado = ((medidaNum * 20) / 100) * (freqAcm);

                if (resultado <= vetFreq[0]) {
                    return valores[0];
                } else {
                    for (let i = 1; i < valores.length; i++) {
                        if (resultado > vetFreq[i - 1] && resultado <= vetFreq[i]) {
                            return valores[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }
            break;
        case 2:
            if (medidaNum == 1 || medidaNum == 2 || medidaNum == 3 || medidaNum == 4 || medidaNum == 5 || medidaNum == 6 || medidaNum == 7 || medidaNum == 8 || medidaNum == 9 || medidaNum == 10) { //únicos Decil que existem
                resultado = ((medidaNum * 10) / 100) * (freqAcm);

                if (resultado <= vetFreq[0]) {
                    return valores[0];
                } else {
                    for (let i = 1; i < valores.length; i++) {
                        if (resultado > vetFreq[i - 1] && resultado <= vetFreq[i]) {
                            return valores[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }
            break;
        case 3: //Porcentil é valido de 1 a 100
            if (medidaNum > 0 && medidaNum <= 100) {
                resultado = (medidaNum / 100) * (freqAcm);

                if (resultado <= vetFreq[0]) {
                    return valores[0];
                } else {
                    for (let i = 1; i < valores.length; i++) {
                        if (resultado > vetFreq[i - 1] && resultado <= vetFreq[i]) {
                            return valores[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }
            break;
    }


}



function medidasSeparatrizesContinua() { //função precisa receber o vetor de variáveis (sem repetição), vetor de freq acm e a medida escolhida pelo usuário
    let medida = document.getElementById('separatrizes').selectedIndex;
    let medidaNum = document.getElementById('separatrizNumberInput').value;

    let range = rangeClasses(quebraString());
    let intervalos = range[0];
    let numClasses = range[1];
    let vetTratado = quebraString();
    let facm = acmContinua(quebraString());


    let resultado, posicao, retornoContinua, facmAnterior, fSimples, limiteInf, freqAcm = 0;

    let vetLimiteInf = []
    vetLimiteInf[0] = vetTratado[0];

    for (let i = 1; i < numClasses; i++) {
        vetLimiteInf[i] = vetLimiteInf[i - 1] + intervalos;

    }

    let vetFacm = [];
    for (let i = 0; i < numClasses; i++) {
        freqAcm += facm[i];
        vetFacm[i] = freqAcm;
    }

    switch (medida) {
        case 0:
            if (medidaNum == 1 || medidaNum == 2 || medidaNum == 3 || medidaNum == 4) { //únicos Quartil que existem
                resultado = ((medidaNum * 25) / 100) * (vetTratado.length);
                if (resultado <= vetFacm[0]) {
                    facmAnterior = 0;
                    fSimples = facm[0];
                    posicao = vetTratado[0];
                    limiteInf = vetLimiteInf[0];

                } else {
                    for (let i = 1; i < vetTratado.length; i++) {
                        if (resultado > vetFacm[i - 1] && resultado <= vetFacm[i]) {
                            facmAnterior = vetFacm[i - 1];
                            fSimples = facm[i];
                            posicao = vetTratado[i];
                            limiteInf = vetLimiteInf[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }
            break;
        case 1:
            if (medidaNum == 1 || medidaNum == 2 || medidaNum == 3 || medidaNum == 4 || medidaNum == 5) { //únicos Quintil que existem
                resultado = ((medidaNum * 20) / 100) * (vetTratado.length);

                if (resultado <= vetFacm[0]) {
                    facmAnterior = 0;
                    fSimples = facm[0];
                    posicao = vetTratado[0];
                    limiteInf = vetLimiteInf[0];
                } else {
                    for (let i = 1; i < vetTratado.length; i++) {
                        if (resultado > vetFacm[i - 1] && resultado <= vetFacm[i]) {
                            facmAnterior = vetFacm[i - 1];
                            fSimples = facm[i];
                            posicao = vetTratado[i];
                            limiteInf = vetLimiteInf[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }
            break;
        case 2:
            if (medidaNum == 1 || medidaNum == 2 || medidaNum == 3 || medidaNum == 4 || medidaNum == 5 || medidaNum == 6 || medidaNum == 7 || medidaNum == 8 || medidaNum == 9 || medidaNum == 10) { //únicos Decil que existem
                resultado = ((medidaNum * 10) / 100) * (vetTratado.length);

                if (resultado <= vetFacm[0]) {
                    facmAnterior = 0;
                    fSimples = facm[0];
                    posicao = vetTratado[0];
                    limiteInf = vetLimiteInf[0];
                } else {
                    for (let i = 1; i < vetTratado.length; i++) {
                        if (resultado > vetFacm[i - 1] && resultado <= vetFacm[i]) {
                            facmAnterior = vetFacm[i - 1];
                            fSimples = facm[i];
                            posicao = vetTratado[i];
                            limiteInf = vetLimiteInf[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }
            break;
        case 3: //Porcentil é valido de 1 a 100
            if (medidaNum > 0 && medidaNum <= 100) {
                resultado = (medidaNum / 100) * (vetTratado.length);

                if (resultado <= vetFacm[0]) {
                    facmAnterior = 0;
                    fSimples = facm[0];
                    posicao = vetTratado[0];
                    limiteInf = vetLimiteInf[0];
                } else {
                    for (let i = 1; i < vetTratado.length; i++) {
                        if (resultado > vetFacm[i - 1] && resultado <= vetFacm[i]) {
                            facmAnterior = vetFacm[i - 1];
                            fSimples = facm[i];
                            posicao = vetTratado[i];
                            limiteInf = vetLimiteInf[i];
                        }
                    }
                }
            } else {
                return "Medida separatriz inválida";
            }

    }

    retornoContinua = limiteInf + (((resultado - facmAnterior) / fSimples) * intervalos);
    return retornoContinua;
}


///////////////////////////////////////////////////////////////////// Funcao Criar tabela /////////////////////////////////////////////
function tabelaGenerica() {
    if (flag == false) {
        flag = true;
        let r = document.getElementById('rowDados');

        let nome = getFormVariavel();
        // Cria elemento tabela
        let tabela = document.createElement('table');
        tabela.classList.add("tabela1");
        tabela.classList.add("table", "table-dark", "table-bordered", "table-striped");
        tabela.classList.add("tabela-principal");
        let caixa = document.getElementById("caixaTabela");
        // Adicionando a tabela ao body
        r.appendChild(tabela);
        // Criando a linha de cabeçalho da tabela
        let cabecalho = document.createElement('thead');
        cabecalho.classList.add('thead-light');
        // Posicionando a linha do cabeçalho
        tabela.appendChild(cabecalho);
        // Criando as células do cabeçalho'
        let cabec1 = document.createElement('th');
        let cabec2 = document.createElement('th');
        let cabec3 = document.createElement('th');
        let cabec4 = document.createElement('th');
        let cabec5 = document.createElement('th');

        // Posicionando as células de cabeçalho
        cabecalho.appendChild(cabec1);
        cabecalho.appendChild(cabec2);
        cabecalho.appendChild(cabec3);
        cabecalho.appendChild(cabec4);
        cabecalho.appendChild(cabec5);
        // Ajustando o conteúdo das células do cabeçalho
        cabec1.innerText = nome;
        cabec2.innerText = 'Frequencia(fi)	';
        cabec3.innerText = 'Frequencia%(fi%)';
        cabec4.innerText = 'Frequencia Acumulada';
        cabec5.innerText = 'Fac %';
        // Fim cabecalho
        let tableBody = document.createElement('tbody');
        tableBody.classList.add("table-striped");
        tabela.appendChild(tableBody);

        // Chama o vetor principal
        let vet = quebraString();
        // Diferenciando os vetores de Valor e Repeticao com contador(vet)
        let vetorTratado = contador(vet);
        // Chama Vetor de Valores
        let valores = vetorTratado[0];
        // Chama Vetor de Repeticoes
        let repeticoes = vetorTratado[1];


        /////////////////////// Inicio da criacao de cedulas

        // Cria acumulador de Fac
        let acm = 0;
        let acmPerc = 0;
        for (let i = 0, j = 0; i < valores.length; j++, i++) {

            let linha = document.createElement('tr');


            tableBody.appendChild(linha);
            let celula = document.createElement('td');
            let celula2 = document.createElement('td');
            let celula3 = document.createElement('td');
            let celula4 = document.createElement('td');
            let celula5 = document.createElement('td');

            linha.appendChild(celula);
            linha.appendChild(celula2);
            linha.appendChild(celula3);
            linha.appendChild(celula4);
            linha.appendChild(celula5);

            celula.innerText = valores[i];
            celula2.innerText = repeticoes[i];
            celula3.innerText = fiPercent(repeticoes[i], vet) + "%";



            // Adiciona proximo valor a variavel
            acm += repeticoes[i];
            // Preeenche a celula com o total ate o momento
            celula4.innerText = acm;
            // Adiciona proximo valor a variavel
            acmPerc += repeticoes[i];
            // Calculo de porcentagem
            let a = acmPerc / vet.length;
            let b = a * 100;
            // Preeenche a celula com o total % ate o momento
            celula5.innerText = b.toFixed(2) + " %";
        }




        // /////////////////////////////////////////////////////Criando linha Total  ////////////////////////////////////////////////////////////
        let linhaTotal = document.createElement('tr');
        tableBody.appendChild(linhaTotal);
        // Criando celulas da linha Total
        let variaveisTotal = document.createElement('td');
        let fiTotal = document.createElement('td');
        let fiPercentTotal = document.createElement('td');
        let fiAcumlTotal = document.createElement('td');
        let facTotal = document.createElement('td');
        // Colocando celulas na linha Total
        linhaTotal.appendChild(variaveisTotal);
        linhaTotal.appendChild(fiTotal);
        linhaTotal.appendChild(fiPercentTotal);
        linhaTotal.appendChild(fiAcumlTotal);
        linhaTotal.appendChild(facTotal);

        variaveisTotal.innerText = "Total: ";
        fiTotal.innerText = quebraString().length;
        fiPercentTotal.innerText = ((acumularFrequencia(repeticoes) / quebraString().length) * 100) + "%";
        fiAcumlTotal.innerText = acumularFac(repeticoes);




        facTotal.innerText = (((acumularFac(repeticoes) / vet.length)) * 100) + "%";


    } else {
        document.querySelector(".tabela1").remove();
        console.log('qui');
        flag = false;
        tabelaGenerica();
    }
}
/////////////////////////////////// Criando Tabela de classes


function tabelaDeClasses() {
    if (flag == false) {
        flag = true;
        let vetorAux = acmContinua(quebraString());
        let row = document.getElementById('rowDados');

        // Criar elemento tabela
        let tabela = document.createElement('table');
        tabela.classList.add("tabela1", "tabela-principal");
        tabela.classList.add("table", "table-dark", "table-bordered", "table-striped");
        row.appendChild(tabela);
        // Criando a linha de cabeçalho da tabela
        let cabecalho = document.createElement('thead');
        cabecalho.classList.add('thead-light');
        // Colocando a linha do cabeçalho na tabela
        tabela.appendChild(cabecalho);
        // Criando as células do cabeçalho'
        let cabec1 = document.createElement('th');
        let cabec2 = document.createElement('th');
        let cabec3 = document.createElement('th');
        let cabec4 = document.createElement('th');
        let cabec5 = document.createElement('th');
        let cabec6 = document.createElement('th');
        // Colocando as células no cabeçalho
        cabecalho.appendChild(cabec1);
        cabecalho.appendChild(cabec2);
        cabecalho.appendChild(cabec3);
        cabecalho.appendChild(cabec4);
        cabecalho.appendChild(cabec5);
        cabecalho.appendChild(cabec6);
        cabec1.innerText = "Classe";
        cabec2.innerText = getFormVariavel();
        cabec3.innerText = 'Frequencia(fi)';
        cabec4.innerText = 'Frequencia%(fi%)';
        cabec5.innerText = 'Frequencia Acumulada';
        cabec6.innerText = 'Fac %';
        // Fim cabecalho
        // Corpo da tabela
        let tableBody = document.createElement('tbody');
        tableBody.classList.add("table-striped");
        // Adicionando corpo a tabela
        tabela.appendChild(tableBody);
        ////// Chama o vetor principal
        let vet = quebraString();
        // Diferenciando os vetores de Valor e Repeticao com contador(vet)
        let vetorTratado = contador(vet);
        // Chama Vetor de Valores
        let valores = vetorTratado[0];
        // Chama Vetor de Repeticoes
        let repeticoes = vetorTratado[1];
        /////////////// Inicio da criacao de cedulas ////
        /// Definindo range entre as variaveis
        let range = rangeClasses(quebraString());
        // Intervalo entre variaveis
        let intervalos = range[0];
        // Numero de classes
        let linhasTab = range[1];


        let acm = 0;
        let acmPerc = 0;
        let acmFi = 0;

        let primeiro = vet[0];
        let final = primeiro + intervalos;
        let atual = 0;

        for (let i = 0; i < linhasTab; i++) {
            let linha = document.createElement('tr');
            tableBody.appendChild(linha);
            let celula = document.createElement('td');
            let celula2 = document.createElement('td');
            celula2.classList.add('range' + i);
            let celula3 = document.createElement('td');
            let celula4 = document.createElement('td');
            let celula5 = document.createElement('td');
            let celula6 = document.createElement('td');
            linha.appendChild(celula);
            linha.appendChild(celula2);
            linha.appendChild(celula3);
            linha.appendChild(celula4);
            linha.appendChild(celula5);
            linha.appendChild(celula6);
            celula.innerText = i + 1;
            celula2.innerText = primeiro + "|-- " + final;



            celula3.innerText = vetorAux[i];

            celula4.innerText = fiPercent(vetorAux[i], vet) + "%";

            // Adiciona proximo valor a variavel
            acm += vetorAux[i];
            let a = acm / vet.length;
            let b = a * 100;
            // Preeenche a celula com o total ate o momento
            celula5.innerText = acm;

            // Adiciona proximo valor a variavel
            acmPerc += vetorAux[i];
            // Calculo de porcentagem
            let c = acm / vet.length;
            let d = c * 100;
            // Preeenche a celula com o total % ate o momento
            celula6.innerText = d.toFixed(2) + " %";

            primeiro = final;
            final += intervalos;
        }
    } else {
        document.querySelector(".tabela1").remove();
        console.log('qui');
        flag = false;
        tabelaDeClasses();
    }
}
////////////////////////////////////////// Quadro de dados ////////////////////////////////////////////////////////
function quadroDados() {
    if (flagQ == false) {
        flagQ = true;
        let r = document.getElementById('rowDados');

        let quadro = document.createElement('table');
        quadro.classList.add("table", "table-bordered", "table-striped");
        quadro.classList.add("quadroDados");
        r.appendChild(quadro);

        // Criando a linha de cabeçalho da tabela
        let cabecalho = document.createElement('thead');
        cabecalho.classList.add('thead-light');
        // Posicionando a linha do cabeçalho
        quadro.appendChild(cabecalho);
        // Criando as células do cabeçalho'
        let cabec1 = document.createElement('th');
        let cabec2 = document.createElement('th');
        let cabec3 = document.createElement('th');
        let cabec4 = document.createElement('th');
        let cabec5 = document.createElement('th');
        let cabec6 = document.createElement('th');
        // Posicionando as células de cabeçalho
        cabecalho.appendChild(cabec1);
        cabecalho.appendChild(cabec2);
        cabecalho.appendChild(cabec3);
        cabecalho.appendChild(cabec4);
        cabecalho.appendChild(cabec5);
        cabecalho.appendChild(cabec6);
        // Ajustando o conteúdo das células do cabeçalho
        cabec1.innerText = 'Media';
        cabec2.innerText = 'Moda';
        cabec3.innerText = 'Mediana';
        cabec4.innerText = 'Desvio Padrao';
        cabec5.innerText = 'Coeficiente de Variacao';
        cabec6.innerText = 'Medida Separatriz';
        // Fim cabecalho
        let vet = quebraString();
        // Diferenciando os vetores de Valor e Repeticao com contador(vet)
        let vetorTratado = contador(vet);
        // Chama Vetor de Valores
        let valores = vetorTratado[0];
        // Chama Vetor de Repeticoes
        let repeticoes = vetorTratado[1];


        let tableBody = document.createElement('tbody');
        tableBody.classList.add("table-striped");
        quadro.appendChild(tableBody);
        // Declata linha calculos
        let linhaCalculo = document.createElement('tr');
        tableBody.appendChild(linhaCalculo);

        let celula = document.createElement('td');
        let celula2 = document.createElement('td');
        let celula3 = document.createElement('td');
        let celula4 = document.createElement('td');
        let celula5 = document.createElement('td');
        let celula6 = document.createElement('td');

        linhaCalculo.appendChild(celula);
        linhaCalculo.appendChild(celula2);
        linhaCalculo.appendChild(celula3);
        linhaCalculo.appendChild(celula4);
        linhaCalculo.appendChild(celula5);
        linhaCalculo.appendChild(celula6);
        celula.innerText = mediaDiscreta();
        celula2.innerText = moda();
        celula3.innerText = medianaDiscreta();
        celula4.innerText = desvioPadraoDiscreta();
        celula5.innerText = coefVariacaoDiscreta();
        celula6.innerText = medidasSeparatrizes();
    } else {
        document.querySelector(".quadroDados").remove();
        flagQ = false;
        quadroDados();
    }
}

function quadroDadosContinua() {
    if (flagQ == false) {
        flagQ = true;
        let r = document.getElementById('rowDados');

        let quadro = document.createElement('table');
        quadro.classList.add("table", "table-bordered", "table-striped");
        quadro.classList.add("quadroDados");
        r.appendChild(quadro);
        // Criando a linha de cabeçalho da tabela
        let cabecalho = document.createElement('thead');
        cabecalho.classList.add('thead-light');
        // Posicionando a linha do cabeçalho
        quadro.appendChild(cabecalho);
        // Criando as células do cabeçalho'
        let cabec1 = document.createElement('th');
        let cabec2 = document.createElement('th');
        let cabec3 = document.createElement('th');
        let cabec4 = document.createElement('th');
        let cabec5 = document.createElement('th');
        let cabec6 = document.createElement('th');
        // Posicionando as células de cabeçalho
        cabecalho.appendChild(cabec1);
        cabecalho.appendChild(cabec2);
        cabecalho.appendChild(cabec3);
        cabecalho.appendChild(cabec4);
        cabecalho.appendChild(cabec5);
        cabecalho.appendChild(cabec6);
        // Ajustando o conteúdo das células do cabeçalho
        cabec1.innerText = 'Media';
        cabec2.innerText = 'Moda';
        cabec3.innerText = 'Mediana';
        cabec4.innerText = 'Desvio Padrao';
        cabec5.innerText = 'Coeficiente de Variacao';
        cabec6.innerText = 'Medida Separatriz';
        // Fim cabecalho
        let vet = quebraString();
        // Diferenciando os vetores de Valor e Repeticao com contador(vet)
        let vetorTratado = contador(vet);
        // Chama Vetor de Valores
        let valores = vetorTratado[0];
        // Chama Vetor de Repeticoes
        let repeticoes = vetorTratado[1];

        let tableBody = document.createElement('tbody');
        tableBody.classList.add("table-striped");
        quadro.appendChild(tableBody);
        // Declata linha calculos
        let linhaCalculo = document.createElement('tr');
        tableBody.appendChild(linhaCalculo);

        let celula = document.createElement('td');
        let celula2 = document.createElement('td');
        let celula3 = document.createElement('td');
        let celula4 = document.createElement('td');
        let celula5 = document.createElement('td');
        let celula6 = document.createElement('td');

        linhaCalculo.appendChild(celula);
        linhaCalculo.appendChild(celula2);
        linhaCalculo.appendChild(celula3);
        linhaCalculo.appendChild(celula4);
        linhaCalculo.appendChild(celula5);
        linhaCalculo.appendChild(celula6);
        // Media
        celula.innerText = mediaContinua();
        celula2.innerText = modaContinua();
        celula3.innerText = medianaContinua();
        celula4.innerText = desvioPadraoContinua();
        celula5.innerText = coefVariacaoContinua();
        celula6.innerText = medidasSeparatrizesContinua();
    } else {
        document.querySelector(".quadroDados").remove();
        console.log('qui');
        flagQ = false;
        quadroDadosContinua();
    }
}





