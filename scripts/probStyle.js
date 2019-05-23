'use strict';

/////////////////////////////////// Declaracao de variaveis e elementos //////////////////////////////////////////////////////
// Droplist de condicoes Uniforme
let condicoesList = document.getElementById('condicoes');
// Droplist de condicoes Binomial
let condicoesListBi = document.getElementById('condicoesBinomial');
// Droplist de condicoes Normal
let condicoesNormal = document.getElementById('condicoesNormal');
// Botao Uniforme 
let botaoUniforme = document.getElementById('uniformeBtn');
// Botao Binomial 
let botaoBinomial = document.getElementById('binomialBtn');
// Botao Normal 
let botaoNormal = document.getElementById('normalBtn');

// Input de Quantidade (N)
let quantidade = document.getElementById('quantidade');
// Formulario entre
let entreForm = document.getElementById('entreForm');
// Min Max Formulario
let minMaxForm = document.getElementById('minMaxForm');
// Input X
let valorX = document.getElementById('x');
// Input Y
let valorY = document.getElementById('y');
// Sucesso input (P)
let sucesso = document.getElementById('sucesso');
// Fracasso input (Q)
let fracasso = document.getElementById('fracasso');
// Ate input 
let ateMax = document.getElementById('ateMax');
// Variavel/Evento 
let evento = document.getElementById('variavel');
// binomialForm1
let binomialForm1 = document.getElementById('binomialForm1');
// binomialForm2
let binomialForm2 = document.getElementById('binomialForm2');
// Tamanho input 
let tamanhoN = document.getElementById('tamanhoN');
// Normal Formulario 
let normalForm = document.getElementById('normalForm');

////////////// Botoes de Calculo ////////////
// Calcular Uniforme
let calcularUniforme = document.getElementById("calcularUniforme");
// Calcular Binomial
let calcularBinomial = document.getElementById("calcularBinomial");
// Calcular Normal
let calcularNormal = document.getElementById("calcularNormal");




function selecaoUniforme() {
    selecionaCondicao();
    
    document.querySelector('.table').remove();
}

function selecaoBinomial() {
    selecionaCondicaoBinomial();
    
    document.querySelector('.table').remove();
}

function selecaoNormal() {
    selecionaCondicaoNormal();
    
    document.querySelector('.table').remove();

}
//////////////////////////////////////////////////////////// Uniforme//////////////////////////////
function selecionaCondicao() {
    // Apaga campos de outra aba
    // Droplists
    condicoesListBi.style.display = "none"
    condicoesNormal.style.display = "none";
    // Inputs


    binomialForm1.style.display = "none";

    binomialForm2.style.display = "none";
    normalForm.style.display = "none";
    calcularBinomial.style.display = "none";
    calcularNormal.style.display = "none";

    // Mostra campo de selecao desta aba
    condicoesList.style.display = "inline-block";
    calcularUniforme.style.display = "inline-block";
    let condicoes = condicoesList.selectedIndex;

    switch (condicoes) {
        case 0:
            //Maior que
            quantidade.style.display = "inline-block";
            // Min Max
            minMaxForm.style.display = "inline-block";

            entreForm.style.display = "none";

            minMaxForm.style.marginBottom = "0";

            tamanhoN.style.display = "none";
            


            break;
        case 1:
            // Entre 
            quantidade.style.display = "none";
            entreForm.style.display = "inline-block";

            
            break;
        case 2:
            //Menor que
            quantidade.style.display = "inline-block";
            minMaxForm.style.display = "inline-block";
            entreForm.style.display = "none";
            
            break;
        case 3:
            //Desvio e Variacao
            quantidade.style.display = "none";
            entreForm.style.display = "none";
            minMaxForm.style.display = "inline-block";
            
            break;
        case 4:
            // Valor Medio
            quantidade.style.display = "none";
            entreForm.style.display = "none";
            minMaxForm.style.display = "inline-block";
            
            break;
        default:
            break;
    }
}
////////////////////////////////////////////// Binomial ///////////////////////////

function selecionaCondicaoBinomial() {
    // Apaga campos de outra aba
    entreForm.style.display = "none";
    quantidade.style.display = "none";
    condicoesList.style.display = "none";
    condicoesNormal.style.display = "none";
    minMaxForm.style.display = "none";
    normalForm.style.display = "none";
    calcularUniforme.style.display = "none";
    calcularNormal.style.display = "none";

    ateMax.style.display = "none";
    // Mostra campos dessa aba
    condicoesListBi.style.display = "inline-block";

    binomialForm1.style.display = "inline-block";
    binomialForm2.style.display = "inline-block";

    calcularBinomial.style.display = "inline-block";

    let condicoes = condicoesListBi.selectedIndex;
    switch (condicoes) {
        case 0:
            // Probabilidade
            tamanhoN.style.display = "inline-block";
            tamanhoN.style.width = "45%";
            tamanhoN.style.float = "right";

            sucesso.style.width = "45%";

            fracasso.style.display = "inline-block";

            binomialForm1.style.marginBottom = "1rem";

            binomialForm2.style.width = "100%";
            evento.style.display = "inline-block";
            evento.style.width = "100%";
            
            break;
        case 1:
            // Media
            evento.style.display = "none";
            fracasso.style.display = "none";

            tamanhoN.style.display = "inline-block";
            tamanhoN.style.width = "100%";
            tamanhoN.style.float = "unset";

            binomialForm1.style.width = "100%";
            binomialForm1.style.margin = "0";
            sucesso.style.width = "100%";
            
            break;
        case 2:
            // Desvio Padrao
            tamanhoN.style.display = "inline-block";
            tamanhoN.style.width = "45%";
            tamanhoN.style.float = "right";

            sucesso.style.width = "45%";

            fracasso.style.display = "inline-block";

            binomialForm1.style.marginBottom = "1rem";

            binomialForm2.style.display = "none";

            
            break;
        default:
            break;
    }

}

///////////////////////////////////// Normal ////////////////////////////

function selecionaCondicaoNormal() {
    // Apaga campos de outra aba
    condicoesList.style.display = "none";
    quantidade.style.display = "none";
    minMaxForm.style.display = "none";
    entreForm.style.display = "none";
    condicoesListBi.style.display = "none";
    tamanhoN.style.display = "none";
    binomialForm1.style.display = "none";

    calcularUniforme.style.display = "none";
    calcularBinomial.style.display = "none";
    ateMax.style.display = "none";


    // Mostra campos dessa aba
    condicoesNormal.style.display = "inline-block";
    normalForm.style.display = "inline-block";
    binomialForm2.style.display = "none";

    calcularNormal.style.display = "inline-block";

    let condicoes = condicoesNormal.selectedIndex;

    switch (condicoes) {
        case 0:
            //Maior que
            quantidade.style.display = "inline-block";

            minMaxForm.style.display = "none";
            entreForm.style.display = "none";

            minMaxForm.style.marginBottom = "0";
            
            break;
        case 1:
            // Entre
            entreForm.style.display = "inline-block";
            quantidade.style.display = "none";
            
            break;
        case 2:
            // Menor que
            quantidade.style.display = "inline-block";

            minMaxForm.style.display = "none";
            entreForm.style.display = "none";

            minMaxForm.style.marginBottom = "0";
            
            break;
        default:
            break;
    }
}




//////////////////////////////////// Acoes de botoes e inputs ///////////////////////////////////////


// Acionado sempre que uma opcao for escolhida
condicoesList.addEventListener("change", selecionaCondicao);
condicoesListBi.addEventListener("change", selecionaCondicaoBinomial);
condicoesNormal.addEventListener("change", selecionaCondicaoNormal);

botaoUniforme.addEventListener("click", selecaoUniforme);
botaoBinomial.addEventListener("click", selecaoBinomial);
botaoNormal.addEventListener("click", selecaoNormal);