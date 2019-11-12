/*Arrow Functions

Arrow Functions — Declaração, funcionamento, escopos 
01 - https://www.w3schools.com/js/js_arrow_function.asp
02 - https://blog.da2k.com.br/2019/01/07/javascript-tudo-sobre-arrow-functions/
03 - https://medium.com/@raphalima8/arrow-functions-declara%C3%A7%C3%A3o-funcionamento-escopos-e-o-valor-de-this-9cb6449bca31
*/

/*
O que são e como funcionam as Arrow Functions?
A nova versão do JavaScript, a ES6, trouxe novas features e dentre elas
uma nova forma de criar funções usando o operador =>. Esta nova forma de 
se trabalhar com funções são chamadas Arrow Functions.
*/

//Função
/* function teste01(param1, param2){
  corpo da função
  return
}

//Arrow Function
const teste02 = (param1, param2) => {
  corpo da função
  return
} */

const soma = (num1, num2) => {
    return num1 + num2 
 }
 document.write(soma(1,2))
 
 document.write("<br/><br/>")
 
 /*Podemos encurtar ainda mais a sintaxe de uma arrow function,
  desde que ela possua apenas uma  declaração: */
 
  const sum = (num1, num2) => num1 + num2
  document.write(sum(1,2))
  document.write("<br/><br/>")
 
 
  /*Quiz - usando Arrow Function cria funções operações
   matemáticas  */