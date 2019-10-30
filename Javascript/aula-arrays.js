//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
//Exemplo 01 - declar variáveis
let car01 = "fiat";
let car02 = "volvo";
let car03 = "BMW";
/* document.write(car01);
document.write(car02);
document.write(car03); */

/* Arrays
Uma array é útil pois armazena múltiplos valores
em uma única e organizada estrutura de dados.
Você pode definir uma nova array listando 
valores separados por vírgulas entre colchetes [].

Obs: Princípio básico de Estrutura de dados.
*/

//Exemplo 02 - declar variáveis
const cars = ["fiat", "volvo", "BMW"];
//document.write(cars)

const artista = ["Joe Cocler", "Bob Dylan", "Axy Rose"];
//document.write(artista)

//Exemplo 03 - array aninhada
//criando um array - 'arraysInArrays'- composta de 3
// arrays
const arraysInArrays = [
  [1, 2, 3],
  ["joão", "michael"],
  [true, false, true, false]
];
//document.write(arraysInArrays);

/*Indexação
Lembre-se de que os elementos de uma array são indexados
começando na posição 0. Para acessar um elemento em uma array, use
o nome da array imediatamente seguido pelos colchetes contendo o
índice do valor que você quer acessar.*/

//Exemplo 04 - "printando" um elemento do array pelo indice
const frutas = ["banana", "tangerina", "abacate"];
/* document.write(frutas[0])
document.write(frutas[1])
document.write(frutas[2]) */

/*Se desejar mudar um valor de um elemento em um array,
você pode fazê-lo definindo ele como igual a um novo valor.*/

//Exemplo 05 - alterando o índice de um elemento.
frutas[2] = "morango";
//document.write(frutas);

//Exemplo 06 - acrescetando um valor ao array.
frutas[3] = "cupuaçu";
//document.write(frutas)

//Exemplo 07 -
//document.write(frutas[4])
/******************************************* */

/* 8.Quiz: O preço está certo:
Instruções:
Iniciando com esta array de prices, altere o preço do 1º, 3º e 7º 
elementos na array. 
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

DICA: o 1º elemetno de qualquer array possui como índice o 0.
Depois, imprima a array prices. */
/************************************************ */
/* 9.Métodos e propriedades das arrays:
DICA: o JavaScript fornece um grande número de métodos embutidos para
modificar arrays e acessar valores dentro dela. Veja a documentação
MDN, ou digite []. no console do JavaScript, para ver uma lista de 
todos os métodos para array disponíveis.

10.Tamanho: Array.length
Você pode descobrir o tamanho de uma array usando sua propriedade 
length. */
const sobremesa = ["manjar", "pavê", "pudim"];
//document.write(sobremesa);

/*array.propriedade que expressa o tamanho do array - que retorna o
número de elementos do array */

//document.write(sobremesa.length);

//Quiz - qual o tamanho deste array ?
const inventory = [["gold pieces", 25], ["belt", 4], ["ring", 1], ["shoes", 2]];
//document.write(inventory.length)

/************************************************/
/* 11.Push:
Quer dizer que você pode encontrar o tamanho de uma array. Mas, e se
você quiser modificar uma array?
Felizmente, arrays possuem muitos métodos embutidos para adição e 
remoção de elementos. Os dois métodos mais comuns para modificação de
uma array são push() e pop().

Push
Você pode usar o método push() para adicionar elementos ao fim de uma
array.
Por exemplo, imagine a seguinte distribuição de queijos:
Então, você pode mover  (adicionar) queijos para o (no) fim da array 
usando o método push().
*/
const queijos = ["mussarela", "minas", "parmesão", 'prato', 'coalho'];
//document.write(queijos)

/*Movendo (adicionar) o queijo búfala para o fim da fila */
queijos.push("búfala");
//document.write(queijos);

/*Pop
Alternativamente, você pode usar o método pop()
para remover elementos do fim de uma array.
*/
queijos.pop()
// document.write(queijos);
/********************* */


queijos.splice(1,1)


queijos.splice(1,2)
document.write(queijos)
document.write("<br/><br/><br/>")

/*splice() é um método incrivelmente poderoso que permite que você 
manipule suas arrays em uma variedade de maneiras. Qualquer 
combinação de adição ou remoção de elementos pode ser realizada em
uma simples linha de código.
Dê uma olhada na documentação MDN para ver uma longa lista de 
exemplo de fragmentos de códigos demonstrando o poder do método 
splice() e, então, tente os próximos conjuntos de quiz de 
programação.*/
queijos.splice(0,0, 'MINAS');
document.write(queijos)
document.write("<br/><br/><br/>")

/*************DESAFIO *******************/
/* 02 - Quiz: Cores do arco-iris:
Instruções:
James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são 
normalmente listadas nesta ordem:

const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

mas James tinha isto:


Usando somente o método splice(), insira as cores que faltam na array e 
remova a cor "Blackberry", seguindo estes passos:

1.Remova "Blackberry"
2.Adicione "Yellow" e "Green"
3.Adicione "Purple" */

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

/*GABARITO */
rainbow.splice(2, 2, 'Yellow', 'Green', 'Purple', 'Blue' )
document.write(rainbow)
