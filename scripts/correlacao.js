'use strict';

// Formulario
let formCorrelacao = document.getElementById("correlacaoForm");
// Botao Calcular
let botaocalcularCorrelacao = document.getElementById("calcularCorrelacao");
// Flag pra deletar elemento
let flagElementoCorrelacao = false;

var xLinha;
var yLinha;
//////////////// GETS /////////////////////
//Pega X (X)
function getXCorrelacao() {
    // Pega valor do campo
    let x = formCorrelacao.x.value;
    // Remove espacos
    let valor = x.replace(/\s+/g, '');
    // Separa por ; e transforma em vetor
    let xSplit = valor.split(";");
    let xVetorInt = [];
    for (let i = 0; i < xSplit.length; i++) {
        xVetorInt[i] = parseInt(xSplit[i]);
    }
    return xVetorInt;
}
//Pega Y (Y)
function getYCorrelacao() {
    // Pega valor do campo
    let y = formCorrelacao.y.value;
    // Remove espacos
    let valor = y.replace(/\s+/g, '');
    // Separa por ; e transforma em vetor
    let ySplit = valor.split(";");
    let yVetorInt = [];
    for (let i = 0; i < ySplit.length; i++) {
        yVetorInt[i] = parseInt(ySplit[i]);
    }
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

    /// Gambiarra culpa do Danilo --'//////////

    xLinha = a;
    yLinha = b;

    console.log(xLinha);
    console.log(yLinha);
    console.log((a + " . X + " + b + " = Y"));
    return (a + " . X + " + b + " = Y"); //retornar esta equação de primeiro grau

}




function regressaoAlteravel(valor, valorParametro) {
    let resultado = 0;
    let regressaoValores = regressao() //chamando o valor retornado da função regressão
    let quebraString = (regressaoValores + "").split(""); //quebrando o string 


    let a = []
    a = quebraString[0] + quebraString[1] + quebraString[2] + quebraString[3]; //encontrando o valor de A
    a = parseFloat(a);


    let b = []
    b = quebraString[11] + quebraString[12] + quebraString[13] + quebraString[14]; //encontrando o valor de B
    b = parseFloat(b);


    if (valorParametro == "x") { //se o valor que o usuário deu é o valor de X:
        resultado = (a * valor) + b;
        resultado = resultado.toFixed(2);
        resultado = parseFloat(resultado);
        return "Se x vale " + valor + ", y é igual a: " + resultado;
    } else if (valorParametro == "y") { ////se o valor que o usuário deu é o valor de Y:
        resultado = (valor - b) / a;
        resultado = resultado.toFixed(2);
        resultado = parseFloat(resultado);
        return "Se y vale " + valor + ", x é igual a: " + resultado;
    }


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

    
    let canvas = document.createElement('div');
    container.appendChild(canvas);
    canvas.id = 'graficoCorrelacao';
    


    // Define os menores valores nos vetores
    let x1 = Math.min.apply(Math, xGrafico);
    let y1 = Math.min.apply(Math, yGrafico);

    // Insere X1 e Y1 ao vetor de menores pontos
    vetMenores.push(x1);
    vetMenores.push(y1);
    // Define os maiores valores nos vetores
    let x2 = Math.max.apply(Math, xGrafico);
    let y2 = Math.max.apply(Math, yGrafico);
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
            text: 'Grafico de Dispersao'
        },
        subtitle: {
            text: 'Correlacao entre: ' + xGrafico + ' x ' + yGrafico
        },
        series: [{
            regression: true,
            type: 'line',
            name: 'Linha de Regressao',
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

//// Eventos
botaocalcularCorrelacao.addEventListener("click", correlacao);
botaocalcularCorrelacao.addEventListener("click", gerarGraficoCorrelacao);