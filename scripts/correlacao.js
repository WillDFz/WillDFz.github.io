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
    let x = formCorrelacao.x.value;

    let xSplit = x.split(";");
    let xVetorInt = [];
    for (let i = 0; i < xSplit.length; i++) {
        xVetorInt[i] = parseInt(xSplit[i]);
    }



    return xVetorInt;
}
//Pega Y (Y)
function getYCorrelacao() {
    let y = formCorrelacao.y.value;

    let ySplit = y.split(";");
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
    console.log(vetorXY);
    return vetorXY;
}



function gerarGraficoCorrelacao() {
    let xGrafico = getXCorrelacao();
    let yGrafico = getYCorrelacao();

    let vetXY = juncaoXY();
    console.log(xGrafico);
    console.log(yGrafico);

    regressao();

    Highcharts.theme = {
        colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
            '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
        ],
        chart: {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 1,
                    y2: 1
                },
                stops: [
                    [0, '#2a2a2b'],
                    [1, '#3e3e40']
                ]
            },
            style: {
                fontFamily: '\'Unica One\', sans-serif'
            },
            plotBorderColor: '#606063'
        },
        title: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '20px'
            }
        },
        subtitle: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase'
            }
        },
        xAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            title: {
                style: {
                    color: '#A0A0A3'

                }
            }
        },
        yAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            tickWidth: 1,
            title: {
                style: {
                    color: '#A0A0A3'
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            style: {
                color: '#F0F0F0'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    color: '#B0B0B3'
                },
                marker: {
                    lineColor: '#333'
                }
            },
            boxplot: {
                fillColor: '#505053'
            },
            candlestick: {
                lineColor: 'white'
            },
            errorbar: {
                color: 'white'
            }
        },
        legend: {
            itemStyle: {
                color: '#E0E0E3'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#606063'
            }
        },
        credits: {
            style: {
                color: '#666'
            }
        },
        labels: {
            style: {
                color: '#707073'
            }
        },

        drilldown: {
            activeAxisLabelStyle: {
                color: '#F0F0F3'
            },
            activeDataLabelStyle: {
                color: '#F0F0F3'
            }
        },

        navigation: {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                theme: {
                    fill: '#505053'
                }
            }
        },

        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: '#505053',
                stroke: '#000000',
                style: {
                    color: '#CCC'
                },
                states: {
                    hover: {
                        fill: '#707073',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    },
                    select: {
                        fill: '#000003',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            inputBoxBorderColor: '#505053',
            inputStyle: {
                backgroundColor: '#333',
                color: 'silver'
            },
            labelStyle: {
                color: 'silver'
            }
        },

        navigator: {
            handles: {
                backgroundColor: '#666',
                borderColor: '#AAA'
            },
            outlineColor: '#CCC',
            maskFill: 'rgba(255,255,255,0.1)',
            series: {
                color: '#7798BF',
                lineColor: '#A6C7ED'
            },
            xAxis: {
                gridLineColor: '#505053'
            }
        },

        scrollbar: {
            barBackgroundColor: '#808083',
            barBorderColor: '#808083',
            buttonArrowColor: '#CCC',
            buttonBackgroundColor: '#606063',
            buttonBorderColor: '#606063',
            rifleColor: '#FFF',
            trackBackgroundColor: '#404043',
            trackBorderColor: '#404043'
        },

        // special colors for some of the
        legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        background2: '#505053',
        dataLabelsColor: '#B0B0B3',
        textColor: '#C0C0C0',
        contrastTextColor: '#F0F0F3',
        maskColor: 'rgba(255,255,255,0.3)'
    };
    Highcharts.setOptions(Highcharts.theme);
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
            data: [
                [xLinha],
                [yLinha]
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