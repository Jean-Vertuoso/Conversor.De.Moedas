"use strict";
//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
const rdCirculo = document.getElementById("idCirc");
const rdRetangulo = document.getElementById("idRetan");
const rdTriRetan = document.getElementById("idTrianRet");
const rdTriEquil = document.getElementById("idTrianEq");
var lbBaseRaioOuLado = document.getElementById("idTrocaLabBase");
const baseRaioOuLado = document.getElementById("idCirAndTriaEq");
var lbLadoOuAltura = document.getElementById("idTrocaLabAlt");
const ladoOuAltura = document.getElementById("idRetanOuTrianRet");
const botaoCalcular = document.getElementById("idBotao");
//-------------------------------------------------------------------- Inicialização do programa ------------------------------------------------------------------------------\\
//iniciar();
//f//unction iniciar(){
//}
//-------------------------------------------------------------------- Função realizar cálculo e mostrar na tela --------------------------------------------------------------\\
//----------------------------------------------------------------- Função de controle caixas de digitação e labels -----------------------------------------------------------\\
botaoCalcular.onclick = function () {
    console.log(baseRaioOuLado.value);
};
rdCirculo.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite o raio";
    ladoOuAltura.style.visibility = "hidden";
};
rdRetangulo.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite a base";
    ladoOuAltura.style.visibility = "visible";
};
rdTriRetan.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite a base";
    ladoOuAltura.style.visibility = "visible";
};
rdTriEquil.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite o lado";
    ladoOuAltura.style.visibility = "hidden";
};
