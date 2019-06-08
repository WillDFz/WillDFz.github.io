'use strict';

// Formulario
let formCorrelacao = document.getElementById("correlacaoForm");
// Botao Calcular
let botaocalcularCorrelacao = document.getElementById("calcularCorrelacao");
// Flag pra deletar elemento
let flagElementoCorrelacao = false;
// Flag projecao
let flagProjecao = false;

var crowCorrelacao = [];
var crowX = [];
var crowY = [];
//////////////// GETS /////////////////////
function getCSVCorrelacao(file) {
    let reader = new FileReader();
    let arquivoSelecionado = file.files[0];
    reader.readAsText(arquivoSelecionado);
    reader.onload = function () {
        crowCorrelacao = reader.result;
        console.log(crowCorrelacao);
    }
}
//Pega X (X)
function getXCorrelacao() {
    let x;
    let vetorJunto;
    let meio;
    let xSplit;
    let vetorX;
    let vetorXFloat = [];
    if (crowCorrelacao.length < 1) {
        // Pega valor do campo
        x = formCorrelacao.x.value;
        // Remove espacos
        x.replace(/\s+/g, '');
        // Separa por ; e transforma em vetor
        vetorX = x.split(";");
    } else {
        // remove virgula
        let trocaVirgula = crowCorrelacao.replace(/,/g, '.');
        let espacos = trocaVirgula.replace(/\n+/g, ';');
        // Cria vetor sem quebra de linha
        vetorJunto = espacos.replace(/\s+/g, '');
        // Remove espacos
        vetorJunto.replace(/\s+/g, '');
        // Separa por ; e transforma em vetor
        xSplit = vetorJunto.split(";");
        for (let i = 0; i < xSplit.length; i++) {
            vetorXFloat[i] = parseFloat(xSplit[i]);
        }
        // Meio do vetor
        meio = (vetorXFloat.length / 2);
        // Separa do inicio ao meio
        vetorX = vetorXFloat.slice(0, meio);
    }
    let xVetorInt = [];
    for (let i = 0; i < vetorX.length; i++) {
        xVetorInt[i] = parseFloat(vetorX[i]);
    }
    console.log(xVetorInt);
    return xVetorInt;
}
//Pega Y (Y)
function getYCorrelacao() {
    let y;
    let vetorJunto;
    let meio;
    let ySplit;
    let vetorY;
    let vetorYFloat = [];
    if (crowCorrelacao.length < 1) {
        // Pega valor do campo
        y = formCorrelacao.y.value;
        // Remove espacos
        y.replace(/\s+/g, '');
        // Separa por ; e transforma em vetor
        vetorY = y.split(";");
    } else {
        // remove virgula
        let trocaVirgula = crowCorrelacao.replace(/,/g, '.');
        let espacos = trocaVirgula.replace(/\n+/g, ';');
        // Cria vetor sem quebra de linha
        vetorJunto = espacos.replace(/\s+/g, '');
        // Remove espacos
        vetorJunto.replace(/\s+/g, '');
        // Separa por ; e transforma em vetor
        ySplit = vetorJunto.split(";");
        for (let i = 0; i < ySplit.length; i++) {
            vetorYFloat[i] = parseFloat(ySplit[i]);
        }
        // Meio do vetor
        meio = (vetorYFloat.length / 2);
        // Separa do meio ao fim
        vetorY = ySplit.slice(meio, ySplit.length);

    }
    let yVetorInt = [];
    for (let i = 0; i < vetorY.length; i++) {
        yVetorInt[i] = parseFloat(vetorY[i]);
    }
    console.log(yVetorInt);
    return yVetorInt;
}




function correlacao() {
    let vetX = getXCorrelacao(); //vetor das variáveis independentes
    let vetY = getYCorrelacao(); //vetor das variáveis dependentes

    let vetXQuadrado = []; //vetor que salva os valores do vetor X ao quadrado
    let vetYQuadrado = []; //vetor que salva os valores do vetor y ao quadrado
    let vetMultXY = []; //vetor que salva os valores da multiplicação entre X e Y
    let somatoriaX = 0; //somatoria de todos os valores do vetor X
    let somatoriaY = 0; //somatoria de todos os valores do vetor Y
    let somatoriaXQuadrado = 0; //somatoria de todos os valores do vetor X ao quadrado
    let somatoriaYQuadrado = 0; //somatoria de todos os valores do vetor y ao quadrado
    let somatoriaMultXY = 0; //somatoria de todos os valores do vetor de multiplicaçao entre X e Y]
    let amostra = vetX.length; //tamanho da amostra = nº de variáveis pesquisadas
    let r = 0 //resultado da fórmula

    let alteraveisField = document.getElementById('alteraveis');
    let alteraveisLabel = document.getElementById('alteraveisLabel');
    alteraveisField.style.display = 'inline-flex';
    alteraveisLabel.style.display = 'block';

    for (let i = 0; i < vetX.length; i++) {
        vetXQuadrado[i] = vetX[i] * vetX[i];
        vetYQuadrado[i] = vetY[i] * vetY[i];
        vetMultXY[i] = vetX[i] * vetY[i];
        somatoriaX += vetX[i];
        somatoriaY += vetY[i];
        somatoriaXQuadrado += vetXQuadrado[i];
        somatoriaYQuadrado += vetYQuadrado[i];
        somatoriaMultXY += vetMultXY[i];
    }
    let aux1 = (amostra * somatoriaMultXY) - (somatoriaX * somatoriaY);

    let aux2 = ((amostra * somatoriaXQuadrado) - (somatoriaX * somatoriaX)) * ((amostra * somatoriaYQuadrado) - (somatoriaY * somatoriaY));

    let raizAux2 = Math.sqrt(aux2);

    r = (aux1 / raizAux2).toFixed(2);
    r = parseFloat(r);

    let rPorcent = r * 100; //resultado em porcentagem 
    console.log(rPorcent);


    if (r >= 0.6 && r <= 1) { //3 condicionais pra avaliar o nível de correlação
        return rPorcent + "%: Correlação significativa";
    } else if (r >= 0.3 && r < 0.6) {
        return rPorcent + "%: Correlação fraca";
    } else if (r >= 0 && r < 0.3) {
        return rPorcent + "%: Correlação fraca";
    }
}

function regressao() {
    let vetX = getXCorrelacao(); //vetor das variáveis independentes
    let vetY = getYCorrelacao(); //vetor das variáveis dependentes

    let vetXQuadrado = []; //vetor que salva os valores do vetor X ao quadrado
    let vetYQuadrado = []; //vetor que salva os valores do vetor y ao quadrado
    let vetMultXY = []; //vetor que salva os valores da multiplicação entre X e Y
    let somatoriaX = 0; //somatoria de todos os valores do vetor X
    let somatoriaY = 0; //somatoria de todos os valores do vetor Y
    let somatoriaXQuadrado = 0; //somatoria de todos os valores do vetor X ao quadrado
    let somatoriaYQuadrado = 0; //somatoria de todos os valores do vetor y ao quadrado
    let somatoriaMultXY = 0; //somatoria de todos os valores do vetor de multiplicaçao entre X e Y]
    let amostra = vetX.length; //tamanho da amostra = nº de variáveis pesquisadas
    let a, b = 0;


    for (let i = 0; i < vetX.length; i++) {
        vetXQuadrado[i] = vetX[i] * vetX[i];
        vetYQuadrado[i] = vetY[i] * vetY[i];
        vetMultXY[i] = vetX[i] * vetY[i];
        somatoriaX += vetX[i];
        somatoriaY += vetY[i];
        somatoriaXQuadrado += vetXQuadrado[i];
        somatoriaYQuadrado += vetYQuadrado[i];
        somatoriaMultXY += vetMultXY[i];
    }
    /////////////// encontrando o valor de A (pode fazer uma função pra isso)
    let aux1 = (amostra * somatoriaMultXY) - (somatoriaX * somatoriaY);

    let aux2 = ((amostra * somatoriaXQuadrado) - (somatoriaX * somatoriaX));

    a = aux1 / aux2;
    a = a.toFixed(2);
    a = parseFloat(a);
    /////////////// encontrando o valor de B (pode fazer uma função pra isso)
    let mediaX = somatoriaX / amostra; //média dos valores de X
    let mediaY = somatoriaY / amostra; //média dos valores de Y
    b = mediaY - (a * mediaX);
    b = b.toFixed(2);
    b = parseFloat(b);

    return (a + " . X + " + b + " = Y"); //retornar esta equação de primeiro grau

}




function regressaoAlteravel(valor, valorParametro) {
    let resultado = 0;
    let regressaoValores = regressao(); //chamando o valor retornado da função regressão
    let quebraString = (regressaoValores + "").split(""); //quebrando o string 


    let a = []
    a = quebraString[0] + quebraString[1] + quebraString[2] + quebraString[3]; //encontrando o valor de A
    a = parseFloat(a);

    let b = []
    b = quebraString[11] + quebraString[12] + quebraString[13] + quebraString[14]; //encontrando o valor de B
    b = parseFloat(b);

    if (valorParametro == "x") { //se o valor que o usuário deu é o valor de X:
        // Y reset
        let yAlteravel = document.getElementById("yAlteravel");
        yAlteravel.value = "";


        resultado = (a * valor) + b;
        resultado = resultado.toFixed(2);
        resultado = parseFloat(resultado);
        console.log("Se x vale " + valor + ", y é igual a: " + resultado);
        gerarTabelaProjecao("Se x vale " + valor + ", y é igual a: " + resultado);
    } else if (valorParametro == "y") { ////se o valor que o usuário deu é o valor de Y:
        // X reset
        let xAlteravel = document.getElementById("xAlteravel");
        xAlteravel.value = "";

        resultado = (valor - b) / a;
        resultado = resultado.toFixed(2);
        resultado = parseFloat(resultado);
        console.log("Se y vale " + valor + ", x é igual a: " + resultado);
        gerarTabelaProjecao("Se y vale " + valor + ", x é igual a: " + resultado);
    }
    a = null;
    b = null;
}

function juncaoXY() {
    let vetorXY = [];
    let x = getXCorrelacao();
    let y = getYCorrelacao();
    // preenche vetor com elementos intercalados para o grafico
    for (let i = 0; i < x.length; i++) {
        vetorXY[i] = (([x[i], y[i]]));
    }
    return vetorXY;
}

function gerarGraficoCorrelacao() {
    let xGrafico = getXCorrelacao();
    let yGrafico = getYCorrelacao();
    let vetMenores = [];
    let vetMaiores = [];


    let container = document.getElementById('containerGrafico');
    container.style.border = '3px solid rgb(54, 104, 221) ';
    container.style.boxShadow = '0 0 50px -5px rgb(9, 25, 255)';

    // Cria Canvas
    let canvas = document.createElement('div');
    container.appendChild(canvas);
    canvas.id = 'graficoCorrelacao';

    if (flagElementoCorrelacao == false) {
        flagElementoCorrelacao = true;
        // Cria tabela e inpt '
        let dadosCorrelacao = document.getElementById('dadosCorrelacao');

        // Cria tabela
        let tabela = document.createElement('table');
        tabela.classList.add("table", "table-dark", "table-bordered", "table-striped", "quadroDadosCorrelacao");
        dadosCorrelacao.appendChild(tabela);
        // Criando a linha de cabeçalho da tabela
        let cabecalho = document.createElement('thead');
        cabecalho.classList.add('thead-light');
        // Posicionando a linha do cabeçalho
        tabela.appendChild(cabecalho);
        // Criando as células do cabeçalho'
        let cabec1 = document.createElement('th');
        let cabec2 = document.createElement('th');
        cabec1.innerText = "Correlação de:";
        cabec2.innerText = "Equação:";
        // Posicionando as células de cabeçalho
        cabecalho.appendChild(cabec1);
        cabecalho.appendChild(cabec2);

        let tableBody = document.createElement('tbody');
        tableBody.classList.add("table-striped");
        tabela.appendChild(tableBody);
        // Declata linha
        let tabelaLinha = document.createElement('tr');
        tableBody.appendChild(tabelaLinha);

        let celula1 = document.createElement('td');
        let celula2 = document.createElement('td');
        celula1.innerText = regressao();
        celula2.innerText = correlacao();

        tabelaLinha.appendChild(celula1);
        tabelaLinha.appendChild(celula2);

    } else {
        document.querySelector(".quadroDadosCorrelacao").remove();
        flagElementoCorrelacao = false;
        gerarGraficoCorrelacao();
    }

    // Define os menores valores nos vetores
    let x1 = Math.min.apply(Math, xGrafico);
    let c = regressao();
    let a = []
    a = c[0] + c[1] + c[2] + c[3]; //encontrando o valor de A
    a = parseFloat(a);


    let b = []
    b = c[11] + c[12] + c[13] + c[14]; //encontrando o valor de B
    b = parseFloat(b);

    let y1 = ((a * x1) + b);

    // Insere X1 e Y1 ao vetor de menores pontos
    vetMenores.push(x1);
    vetMenores.push(y1);
    // Define os maiores valores nos vetores
    let x2 = Math.max.apply(Math, xGrafico);
    let y2 = ((a * x2) + b);
    // Insere X2 e Y2 ao vetor de maiores pontos
    vetMaiores.push(x2);
    vetMaiores.push(y2);

    let vetXY = juncaoXY();


    regressao();
    // Criando grafico
    Highcharts.chart('containerGrafico', {
        xAxis: {
            title: 'Independente(X)',
            min: 0,

        },
        yAxis: {
            title: 'Dependente(Y)',
            min: 0
        },
        title: {
            text: 'Grafico de Dispersão'
        },
        subtitle: {
            text: 'Correlacao entre: ' + xGrafico + ' x ' + yGrafico
        },
        series: [{
            regression: true,
            type: 'line',
            name: 'Linha de Regressão',
            data: [vetMaiores, vetMenores

            ],

            marker: {
                enabled: true
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            enableMouseTracking: false
        }, {
            type: 'scatter',
            name: 'Pontos',
            data: vetXY,
            marker: {
                radius: 4
            }
        }]
    });
}

function gerarTabelaProjecao(resultado){
    if (flagProjecao == false) {
        flagProjecao = true;
        // Cria tabela e inpt '
        let quadroDeDados = document.getElementById('quadroDeDados');
        // Cria tabela
        let tabela = document.createElement('table');
        tabela.classList.add("table", "table-dark", "table-bordered", "table-striped", "quadroProjecao");
        quadroDeDados.appendChild(tabela);
        // Criando a linha de cabeçalho da tabela
        let cabecalho = document.createElement('thead');
        cabecalho.classList.add('thead-light');
        // Posicionando a linha do cabeçalho
        tabela.appendChild(cabecalho);
        // Criando as células do cabeçalho'
        let cabec1 = document.createElement('th');
        cabec1.innerText = "Resultado da projecao:";
        // Posicionando as células de cabeçalho
        cabecalho.appendChild(cabec1);
        let tableBody = document.createElement('tbody');
        tableBody.classList.add("table-striped");
        tabela.appendChild(tableBody);
        // Declata linha
        let tabelaLinha = document.createElement('tr');
        tableBody.appendChild(tabelaLinha);
        let celula1 = document.createElement('td');
        celula1.innerText = resultado;
        tabelaLinha.appendChild(celula1);
    } else {
        document.querySelector(".quadroProjecao").remove();
        flagProjecao = false;
        gerarTabelaProjecao(resultado);
    }
}
//// Eventos
//xAlteravel.addEventListener("change", regressaoAlteravel(this.value, "x" );
//yAlteravel.addEventListener("change", regressaoAlteravel(valor, "y");