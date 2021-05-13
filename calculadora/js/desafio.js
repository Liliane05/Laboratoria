var spanResposta = document.querySelector("#resposta")
var valorDaHora = document.querySelector("#valor-hora")
var horaDeProjeto = document.querySelector("#horas-projeto")


function calcular(){
 var total = (valorDaHora.valueAsNumber * horaDeProjeto.valueAsNumber).toFixed(2);
 

 spanResposta.textContent = "R$" + total




}
