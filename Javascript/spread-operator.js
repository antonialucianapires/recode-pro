
/*Spread Operator - Trabalham com elementos que são interáveis (array, string, Object) e
desmembra-los em pequenas partes. Ele basicamente permite que expressões
expandam o conteúdo de arrays em locais onde múltiplos elementos são
esperados. */

/*Pense no operador spread como alguém que tira os elementos de
uma caixa e espalha em outro lugar, */

//Exe.:
document.write([...'George'])
document.write("<br/><br/>");

//Imprimindo se usar o operador spred.:
let frontend = ['react ', 'angular ', 'vue ']
document.write(frontend)
document.write("<br/><br/>");

//Imprimindo usando o operador spred
document.write(...frontend)
document.write("<br/><br/>");


/*Note que neste caso eu não usei o Spread. Ao colocar o array dentro
 de outro array  */
let middle = [3, 4];
let arr = [1, 2, middle, 5, 6];
document.write(arr);
document.write("<br/><br/>");

/*Agora experimente colocar ‘…’ antes do array middle para você ver
o que acontece, como abaixo:*/
let middle02 = [3, 4];
let arr02 = [1, 2, ...middle02, 5, 6];
document.write(arr02);
document.write("<br/><br/>");
/*Spread significa espalhar, ou seja, este operador é usado para ‘espalhar’
os elementos de um array quando interpretado em tempo de execução.
Neste último caso, os itens de middle foram espalhados dentro de arr. */

//Segredo #1 – Cópia de arrays com Spread

//Acham que funcionam !!
let alfabeto = ["a", "b", "c"];
document.write(alfabeto);
document.write("<br/><br/>");
let arr03 = alfabeto;
document.write(arr03);
document.write("<br/><br/>");

/*Não é uma cópia do array alfabeto, mas sim o próprio array alfabeto,
uma vez que a referência de memória de ambos é a mesma. Como provar isso?*/
alfabeto.push("d");
document.write(arr03);
document.write("<br/><br/>");

document.write(alfabeto);

//Outra forma de provar que não é clone -> const alfabeto === arr03

//Obs: Não esqueça que com slice é possível copiar arrays.
document.write("<br/><br/>");

//Criando uma cópia do array.
let caracteres = ["a", "b", "c"];
let arr04 = [...caracteres];
document.write(arr04);

//Provando que é um clone -> const caracteres === arr04
document.write("<br/><br/>");
/*Ao expandirmos o array com o Spread, o valor de seus itens são copiados
pra dentro do outro array. Ambos arrays são independentes, então é 
claramente uma forma de copiar arrays que funciona. */

//Segredo #2 – Concatenação de arrays com Spread
let letras = ['a', 'b', 'c'];
let letter = ['d', 'e', 'f'];

//Antes, sem usar o  Spread Operator - método concat
let a = letras.concat(letter)
document.write(a);
document.write("<br/><br/>");

//Usando o Spread Operator
letras = [...letras, ...letter];
document.write(letras);
document.write("<br/><br/>");

//Iserindo um novo elemento dentro da concatenação
let b = [...letras, 'RJ', ...letter]
document.write(b)
document.write("<br/><br/>");

//Segredo #3 – String para Array
let str = "hello";
let chars = [...str];
document.write(chars);