const funcoes = require('../funcoes/funcoes')

function teste(funcao,cenario,valorEsperado,retornoDaFuncaoTestada){
    if(valorEsperado == retornoDaFuncaoTestada)
        console.log(`Funcão ${funcao} no cenário ${cenario} foi aprovada`);      
    else
        console.log(`Funcão ${funcao} no cenário ${cenario} foi reprovada`);
};

teste("somarNumeros",1,10,funcoes.somarNumeros(5,5));
teste("somarNumeros",2,10,funcoes.somarNumeros(5,4));
teste("subtrairNumeros",1,0,funcoes.subtrairNumeros(5,5));
teste("subtrairNumeros",2,-5,funcoes.subtrairNumeros(5,10));

module.exports = {};