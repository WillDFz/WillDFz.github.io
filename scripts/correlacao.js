'use strict';

// Formulario
let formCorrelacao = document.getElementById("correlacaoForm");
// Botao Calcular
let botaocalcularCorrelacao = document.getElementById("calcularCorrelacao");
// Flag pra deletar elemento
let flagElementoCorrelacao = false;
//////////////// GETS /////////////////////
//Pega X (X)
function getXCorrelacao() {
    let x = formCorrelacao.x.value;

    let xSplit = x.split(";");
    let xVetorInt = [];
    for (let i = 0; i < xSplit.length; i++) {
        xVetorInt[i] = parseInt(xSplit[i]);
    }

    console.log(xVetorInt);

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

    console.log(yVetorInt);

    return yVetorInt;
}




function correlacao( ) {

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

    console.log(vetXQuadrado);
    console.log(vetYQuadrado);
    console.log(vetMultXY);
    console.log(somatoriaX);
    console.log(somatoriaY);
    console.log(somatoriaXQuadrado);
    console.log(somatoriaYQuadrado);
    console.log(somatoriaMultXY);
    console.log(amostra);


    let aux1 = (amostra * somatoriaMultXY) - (somatoriaX * somatoriaY);
    console.log(aux1);
    let aux2 = ((amostra * somatoriaXQuadrado) - (somatoriaX * somatoriaX)) * ((amostra * somatoriaYQuadrado) - (somatoriaY * somatoriaY));
    console.log(aux2);
    let raizAux2 = Math.sqrt(aux2);
    console.log(raizAux2);
    r = (aux1 / raizAux2).toFixed(2);
    r = parseFloat(r);
    console.log(r);
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



botaocalcularCorrelacao.addEventListener("click", correlacao);