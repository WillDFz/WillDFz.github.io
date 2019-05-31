'use strict'
// Formulario
let formN = document.getElementById("probForm");
// Botao Calcular
let botaoCalcularN = document.getElementById("calcularNormal");
// Flag pra deletar elemento
var flagElementoN = false;
////////////////// GETS ////////////////////////////

// Pega Quantidade
function getQuantidade() {
    let quantidade = form.quantidade.value;
    return parseFloat(quantidade);
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
///////////////////////////////////////// Funcoes de calculo //////////////////////////////////////////////////////////////////


/////////////////////////////FUNÇÃO PARA ENCONTRAR O ELEMENTO NA TABELA
function encontraElemento(media, dp, valor) {

    let formula = Math.abs((valor - media) / dp); //Fórmula de Z 
    let zDecimal = formula.toFixed(2); //O número deve obrigatoriamente ter 2 casas decimais
    

    let z = zDecimal; //Z tá vindo como string
    let quebraString = (z + "").split(""); //quebrando o string Z
    let elementosLinha = [quebraString[0] + quebraString[1] + quebraString[2]]; //vetor auxiliar que guarda os elementos necessários para a linha (x.x) 
    let zColuna = parseFloat(quebraString[3]); //pegando o ultimo valor do String quebrado, que vale ao indice da coluna
    let zLinha = elementosLinha[0]; //passando o valor do vetor para uma variável simples             

    let vet00 = [0.0000, 0.0040, 0.0080, 0.0120, 0.0160, 0.0199, 0.0239, 0.0279, 0.0319, 0.0359];
    let vet01 = [0.0398, 0.0438, 0.0478, 0.0517, 0.0557, 0.0596, 0.0636, 0.0675, 0.0714, 0.0753];
    let vet02 = [0.0793, 0.0832, 0.0871, 0.0910, 0.0948, 0.0987, 0.1026, 0.1064, 0.1103, 0.1141];
    let vet03 = [0.1179, 0.1217, 0.1255, 0.1293, 0.1331, 0.1368, 0.1406, 0.1443, 0.1480, 0.1517];
    let vet04 = [0.1554, 0.1591, 0.1628, 0.1664, 0.1700, 0.1736, 0.1772, 0.1808, 0.1844, 0.1879];
    let vet05 = [0.1915, 0.1950, 0.1985, 0.2019, 0.2054, 0.2088, 0.2123, 0.2157, 0.2190, 0.2224];
    let vet06 = [0.2257, 0.2291, 0.2324, 0.2357, 0.2389, 0.2422, 0.2454, 0.2486, 0.2517, 0.2549];
    let vet07 = [0.2580, 0.2611, 0.2642, 0.2673, 0.2703, 0.2734, 0.2764, 0.2794, 0.2823, 0.2852];
    let vet08 = [0.2881, 0.2910, 0.2939, 0.2967, 0.2995, 0.3023, 0.3051, 0.3078, 0.3106, 0.3133];
    let vet09 = [0.3159, 0.3186, 0.3212, 0.3238, 0.3264, 0.3289, 0.3315, 0.3340, 0.3365, 0.3389];
    let vet10 = [0.3413, 0.3438, 0.3461, 0.3485, 0.3508, 0.3531, 0.3554, 0.3577, 0.3599, 0.3621];
    let vet11 = [0.3643, 0.3665, 0.3686, 0.3708, 0.3729, 0.3749, 0.3770, 0.3790, 0.3810, 0.3830];
    let vet12 = [0.3849, 0.3869, 0.3888, 0.3907, 0.3925, 0.3944, 0.3962, 0.3980, 0.3997, 0.4015];
    let vet13 = [0.4032, 0.4049, 0.4066, 0.4082, 0.4099, 0.4115, 0.4131, 0.4147, 0.4162, 0.4177];
    let vet14 = [0.4192, 0.4207, 0.4222, 0.4236, 0.4251, 0.4265, 0.4279, 0.4292, 0.4306, 0.4319];
    let vet15 = [0.4332, 0.4345, 0.4357, 0.4370, 0.4382, 0.4394, 0.4406, 0.4418, 0.4429, 0.4441];
    let vet16 = [0.4452, 0.4463, 0.4474, 0.4484, 0.4495, 0.4505, 0.4515, 0.4525, 0.4535, 0.4545];
    let vet17 = [0.4554, 0.4564, 0.4573, 0.4582, 0.4591, 0.4599, 0.4608, 0.4616, 0.4625, 0.4633];
    let vet18 = [0.4641, 0.4649, 0.4656, 0.4664, 0.4671, 0.4678, 0.4686, 0.4693, 0.4699, 0.4706];
    let vet19 = [0.4713, 0.4719, 0.4726, 0.4732, 0.4738, 0.4744, 0.4750, 0.4756, 0.4761, 0.4767];
    let vet20 = [0.4772, 0.4778, 0.4783, 0.4788, 0.4793, 0.4798, 0.4803, 0.4808, 0.4812, 0.4817];
    let vet21 = [0.4821, 0.4826, 0.4830, 0.4834, 0.4838, 0.4842, 0.4846, 0.4850, 0.4854, 0.4857];
    let vet22 = [0.4861, 0.4864, 0.4868, 0.4871, 0.4875, 0.4878, 0.4881, 0.4884, 0.4887, 0.4890];
    let vet23 = [0.4893, 0.4896, 0.4898, 0.4901, 0.4904, 0.4906, 0.4909, 0.4911, 0.4913, 0.4916];
    let vet24 = [0.4918, 0.4920, 0.4922, 0.4925, 0.4927, 0.4929, 0.4931, 0.4932, 0.4934, 0.4936];
    let vet25 = [0.4938, 0.4940, 0.4941, 0.4943, 0.4945, 0.4946, 0.4948, 0.4949, 0.4951, 0.4952];
    let vet26 = [0.4953, 0.4955, 0.4956, 0.4957, 0.4959, 0.4960, 0.4961, 0.4962, 0.4963, 0.4964];
    let vet27 = [0.4965, 0.4966, 0.4967, 0.4968, 0.4969, 0.4970, 0.4971, 0.4972, 0.4973, 0.4974];
    let vet28 = [0.4974, 0.4975, 0.4976, 0.4977, 0.4977, 0.4978, 0.4979, 0.4979, 0.4980, 0.4981];
    let vet29 = [0.4981, 0.4982, 0.4982, 0.4983, 0.4984, 0.4984, 0.4985, 0.4985, 0.4986, 0.4986];
    let vet30 = [0.4987, 0.4987, 0.4987, 0.4988, 0.4988, 0.4989, 0.4989, 0.4989, 0.4990, 0.4990];
    let vet31 = [0.4990, 0.4991, 0.4991, 0.4991, 0.4992, 0.4992, 0.4992, 0.4992, 0.4993, 0.4993];
    let vet32 = [0.4993, 0.4993, 0.4994, 0.4994, 0.4994, 0.4994, 0.4994, 0.4995, 0.4995, 0.4995];
    let vet33 = [0.4995, 0.4995, 0.4995, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4997];
    let vet34 = [0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4998];
    let vet35 = [0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998];
    let vet36 = [0.4998, 0.4998, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999];
    let vet37 = [0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999];
    let vet38 = [0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999];
    let vet39 = [0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000];

    switch (zLinha) { //switch para encontrar o elemento

        case "0.0":

            for (let i = 0; i < vet00.length; i++) {
                if (zColuna == i) {
                    return vet00[i];
                }
            }
            break;
        case "0.1":

            for (let i = 0; i < vet01.length; i++) {
                if (zColuna == i) {
                    return vet01[i];
                }
            }
            break;
        case "0.2":

            for (let i = 0; i < vet02.length; i++) {
                if (zColuna == i) {
                    return vet02[i];
                }
            }
            break;
        case "0.3":

            for (let i = 0; i < vet03.length; i++) {
                if (zColuna == i) {
                    return vet03[i];
                }
            }
            break;
        case "0.4":

            for (let i = 0; i < vet04.length; i++) {
                if (zColuna == i) {
                    return vet04[i];
                }
            }
            break;
        case "0.5":

            for (let i = 0; i < vet05.length; i++) {
                if (zColuna == i) {
                    return vet05[i];
                }
            }
            break;
        case "0.6":

            for (let i = 0; i < vet06.length; i++) {
                if (zColuna == i) {
                    return vet06[i];
                }
            }
            break;
        case "0.7":

            for (let i = 0; i < vet07.length; i++) {
                if (zColuna == i) {
                    return vet07[i];
                }
            }
            break;
        case "0.8":

            for (let i = 0; i < vet08.length; i++) {
                if (zColuna == i) {
                    return vet08[i];
                }
            }
            break;
        case "0.9":

            for (let i = 0; i < vet09.length; i++) {
                if (zColuna == i) {
                    return vet09[i];
                }
            }
            break;
        case "1.0":

            for (let i = 0; i < vet10.length; i++) {
                if (zColuna == i) {
                    return vet10[i];
                }
            }
            break;
        case "1.1":

            for (let i = 0; i < vet11.length; i++) {
                if (zColuna == i) {
                    return vet11[i];
                }
            }
            break;
        case "1.2":

            for (let i = 0; i < vet12.length; i++) {
                if (zColuna == i) {
                    return vet12[i];
                }
            }
            break;
        case "1.3":

            for (let i = 0; i < vet13.length; i++) {
                if (zColuna == i) {
                    return vet13[i];
                }
            }
            break;
        case "1.4":

            for (let i = 0; i < vet14.length; i++) {
                if (zColuna == i) {
                    return vet14[i];
                }
            }
            break;
        case "1.5":

            for (let i = 0; i < vet15.length; i++) {
                if (zColuna == i) {
                    return vet15[i];
                }
            }
            break;
        case "1.6":

            for (let i = 0; i < vet16.length; i++) {
                if (zColuna == i) {
                    return vet16[i];
                }
            }
            break;
        case "1.7":

            for (let i = 0; i < vet17.length; i++) {
                if (zColuna == i) {
                    return vet17[i];
                }
            }
            break;
        case "1.8":

            for (let i = 0; i < vet18.length; i++) {
                if (zColuna == i) {
                    return vet18[i];
                }
            }
            break;
        case "1.9":

            for (let i = 0; i < vet19.length; i++) {
                if (zColuna == i) {
                    return vet19[i];
                }
            }
            break;
        case "2.0":

            for (let i = 0; i < vet20.length; i++) {
                if (zColuna == i) {
                    return vet20[i];
                }
            }
            break;
        case "2.1":

            for (let i = 0; i < vet21.length; i++) {
                if (zColuna == i) {
                    return vet21[i];
                }
            }
            break;
        case "2.2":

            for (let i = 0; i < vet22.length; i++) {
                if (zColuna == i) {
                    return vet22[i];
                }
            }
            break;
        case "2.3":

            for (let i = 0; i < vet23.length; i++) {
                if (zColuna == i) {
                    return vet23[i];
                }
            }
            break;
        case "2.4":

            for (let i = 0; i < vet24.length; i++) {
                if (zColuna == i) {
                    return vet24[i];
                }
            }
            break;
        case "2.5":

            for (let i = 0; i < vet25.length; i++) {
                if (zColuna == i) {
                    return vet25[i];
                }
            }
            break;
        case "2.6":

            for (let i = 0; i < vet26.length; i++) {
                if (zColuna == i) {
                    return vet26[i];
                }
            }
            break;
        case "2.7":

            for (let i = 0; i < vet27.length; i++) {
                if (zColuna == i) {
                    return vet27[i];
                }
            }
            break;
        case "2.8":

            for (let i = 0; i < vet28.length; i++) {
                if (zColuna == i) {
                    return vet28[i];
                }
            }
            break;
        case "2.9":

            for (let i = 0; i < vet29.length; i++) {
                if (zColuna == i) {
                    return vet29[i];
                }
            }
            break;
        case "3.0":

            for (let i = 0; i < vet30.length; i++) {
                if (zColuna == i) {
                    return vet30[i];
                }
            }
            break;
        case "3.1":

            for (let i = 0; i < vet31.length; i++) {
                if (zColuna == i) {
                    return vet31[i];
                }
            }
            break;
        case "3.2":

            for (let i = 0; i < vet32.length; i++) {
                if (zColuna == i) {
                    return vet32[i];
                }
            }
            break;
        case "3.3":

            for (let i = 0; i < vet33.length; i++) {
                if (zColuna == i) {
                    return vet33[i];
                }
            }
            break;
        case "3.4":

            for (let i = 0; i < vet34.length; i++) {
                if (zColuna == i) {
                    return vet34[i];
                }
            }
            break;
        case "3.5":

            for (let i = 0; i < vet35.length; i++) {
                if (zColuna == i) {
                    return vet35[i];
                }
            }
            break;
        case "3.6":

            for (let i = 0; i < vet36.length; i++) {
                if (zColuna == i) {
                    return vet36[i];
                }
            }
            break;
        case "3.7":

            for (let i = 0; i < vet37.length; i++) {
                if (zColuna == i) {
                    return vet37[i];
                }
            }
            break;
        case "3.8":

            for (let i = 0; i < vet38.length; i++) {
                if (zColuna == i) {
                    return vet38[i];
                }
            }
            break;
        case "3.9":

            for (let i = 0; i < vet39.length; i++) {
                if (zColuna == i) {
                    return vet30[i];
                }
            }
            break;
        default:
            return 0.5000;

    }


}

///////////////// FUNÇÃO QUE RECEBE O VALOR ENCONTRADO E TRATA AS POSSIBILIDADES DE MAIOR QUE, RETORNANDO O RESULTADO FINAL
function maiorQueDistNormal() {
    let media = getMedia();
    let dp = getDesvioPadrao();
    let valor = getQuantidade();


    let valorEncontrado = encontraElemento(media, dp, valor);
    let resultado, resultadoPorcent = 0;

    if (valor > media) {
        resultado = 0.5 - valorEncontrado;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else if (valor < media) {
        resultado = 0.5 + valorEncontrado;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else {
        return 50 + "%";
    }

}
///////////////// FUNÇÃO QUE RECEBE O VALOR ENCONTRADO E TRATA AS POSSIBILIDADES DE MENOR QUE, RETORNANDO O RESULTADO FINAL
function menorQueDistNormal() {

    let media = getMedia();
    let dp = getDesvioPadrao();
    let valor = getQuantidade();

    let valorEncontrado = encontraElemento(media, dp, valor);




    let resultado, resultadoPorcent = 0;

    if (valor > media) {
        resultado = 0.5 + valorEncontrado;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else if (valor < media) {
        resultado = 0.5 - valorEncontrado;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else {
        return 50 + "%";
    }
}



///////////////// FUNÇÃO QUE RECEBE O VALOR ENCONTRADO E TRATA AS POSSIBILIDADES DE ENTRE, RETORNANDO O RESULTADO FINAL
function entreDistNormal() {

    let media = getMedia();
    let dp = getDesvioPadrao();
    let valor1 = getX();
    let valor2 = getY();

    let valorEncontrado1 = encontraElemento(media, dp, valor1);
    let valorEncontrado2 = encontraElemento(media, dp, valor2);


    let resultado, resultadoPorcent = 0;


    if (valor1 < media && valor2 > media) {
        resultado = valorEncontrado1 + valorEncontrado2;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else if (valor1 > media && valor2 > media) {
        resultado = valorEncontrado2 - valorEncontrado1;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else if (valor1 < media && valor2 < media) {
        resultado = valorEncontrado1 - valorEncontrado2;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else if (valor1 == media && valor2 > media) {
        resultado = valorEncontrado2;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    } else if (valor2 == media && valor1 < media) {
        resultado = valorEncontrado1;
        resultadoPorcent = (resultado * 100).toFixed(2);
        return resultadoPorcent + "%";
    }
}

// Define a operacao e retorna resultado
function operacaoNormal() {
    if (flagElementoN == false) {
        flagElementoN = true;

        let resultado;

        // Index Droplist de condicoes Normal
        let indexNormalList = document.getElementById('condicoesNormal').selectedIndex;

        let campo = document.getElementById('rowDadosProbabilidade');
        let quadro = document.createElement('table');
        quadro.classList.add("table", "table-dark", "table-bordered", "quadroProbNormal");

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


        switch (indexNormalList) {
            case 0:
                // Maior que
                let quantidade = document.getElementById("quantidade").value;
                let media = document.getElementById("media").value;
                let desvioPadrao = document.getElementById("desvioPadrao").value;
                if (quantidade == "" || media == "" || desvioPadrao == "") {
                    alert("Preencha todos os campos!");
                    celula.innerText = "Invalido";
                    break;
                } else {
                    resultado = desvioPadraoDistBinomial();
                    celula.innerText = resultado;

                }

                resultado = maiorQueDistNormal();

                celula.innerText = resultado;
                break;
            case 1:
                // Entre

                resultado = entreDistNormal();
                celula.innerText = resultado;
                break;
            case 2:
                // Menor que

                resultado = menorQueDistNormal();
                celula.innerText = resultado;
                break;

            default:
                break;
        }
    } else {
        // Remove tabela existente
        document.querySelector('.table').remove();
        flagElementoN = false;
        operacaoNormal();
    }
}

///////////////////////////////////////////////////// Eventos /////////////////////////////////////////////
botaoCalcularN.addEventListener("click", operacaoNormal);