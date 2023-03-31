
var botao = document.getElementById("submit-button");

var formulario = document.getElementsByName("lead");

var camposdoformulario = document.getElementsByTagName("input");


botao.onsubmit = function(){

let resposta = confirm("tem certeza que está tudo certo?")

confirm("tudo certo?")

if (resposta) {
    console.log("bora");
} else {
    console.log("escreva de novo");
    return resposta;
}
}