function plus(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let res = num1 + num2;
    document.getElementById("result").value = res;
}
function minus(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let res = num1 - num2;
    document.getElementById("result").value = res;
}
function multi(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let res = num1 * num2;
    document.getElementById("result").value = res;
}
function divi(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let res = num1 / num2;
    document.getElementById("result").value = res;
}
let soma = document.getElementById("soma")
soma.onclick = plus
let subtracao = document.getElementById("subtracao")
subtracao.onclick = minus;
let multiplicacao = document.getElementById("multiplicacao")
multiplicacao.onclick = multi;
let divisao = document.getElementById("divisao")
divisao.onclick = divi;