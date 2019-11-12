/*       Rest Params
https://medium.com/magnetis-backstage/p%C3%ADlulas-de-javascript-operador-spread-e-par%C3%A2metro-rest-afd1f0266036
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
*/

/*O Rest Paramns é uma variação do Spread Operator:
Se pensarmos no operador spread como alguém que tira os
elementos de uma caixa e espalha em outro lugar, podemos dizer
que o parâmetro rest faz o oposto: ele coleta elementos
espalhados e guarda em uma caixa.*/

/*O parâmetro rest também é escrito com reticências ... e
permite representar um número indefinido de elementos como um
array. Vamos esclarecer com um exemplo: */

/* Por fim, podemos também utilizar o parâmetro rest para representar
um número indefinido de argumentos em uma função variádica — ou seja,
uma função que recebe um número infinito de parâmetros.
Vamos criar com ele uma função que soma qualquer quantidade de números e
retorna o resultado: */

//Ex01.:
function listAuthor(editora, ...autores){
    document.write(editora)
    document.write(autores)
  }
  /*Agora, é possível chamar a função listAuthor() com qualquer número de
  parâmetros:*/
  
  listAuthor('Voz ', 'Tómas de Aquino', 'Leonardo Boff', 'Agostinho de Hipona')
  document.write("<br/><br/>");
  
  //Ex02.:
  function fun1(...valores) {
    document.write(valores.length);
  }
  fun1();  // 0 
  document.write("<br/><br/>")
  
  fun1(5); // 1
  document.write("<br/><br/>")
  
  fun1(5, 6, 7); // 3
  document.write("<br/><br/>")