/* MAP - FILTER - REDUCE
São métodos de manipulação de Arrays do JavaScript Funcional.
https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
https://www.devmedia.com.br/javascript-map-mapeando-elementos-de-um-array/40648
https://medium.com/@osuissa/javascript-quando-usar-map-filter-ou-reduce-31aa10e33e9 */

/*Você sabe quando usar um ou outro?

Em 2011, chegou em JavaScript map(), filter() e reduce() como alternativas
poderosas tanto para se trabalhar com valores cumulativos, quanto para
criar subconjuntos com base em condições. Estes métodos são úteis para
reduzir a complexidade, trabalhar sem “efeitos colaterais” e, muitas vezes,
tornar o código mais legível.

MAP 
Quando você quer que o resultado seja um Array com O MESMO tamanho do Array
inicial, porém com valores modificados (ou não).
*/

/*O método map() é invocado a partir de um array e recebe como parâmetro uma
função de callback, que é invocada para cada item e retorna o valor do item 
equivalente no array resultante. Nos exemplos abaixo, por exemplo, essa função de
callback retorna o número original elevado ao quadrado, e ou, multiplicando*/

/*Obs: MAP não modifica o array original, ele retorna um novo array com os
valores resultantes do mapeamento. 
Sintaxe: arrayOriginal.map(callback) */

//Ex-01.: Array de números
const numeros = [1,2,3,4,5];
document.write(numeros);
document.write('<br/><br/>')

//Calculo de multiplicação
const mult = numeros.map(value => (value * 2))
document.write(mult);
document.write('<br/><br/>')

//Calculo de potência
const potencia = numeros.map(value => Math.pow(value,2))
document.write(potencia);
document.write('<br/><br/>')

//Quiz - adição e subtração

//Quiz - exemplo abaixo!!!!
const vencedores = [
  {
      nome : "Equipe Super",
      pais : "Brasil"
  },
  {
      nome : "Time Maximo",
      pais : "EUA"
  },
  {
      nome : "Mega Grupo",
      pais : "Canadá"
  }
];

vencedores.map(pais => document.write(pais.pais, `<br /><br />`))

const a = vencedores.map(b => b.nome)
document.write(a)
document.write("<br/><br/>")

//Quiz - crie um map para printar apenas os valores "name".
const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

  //----------------- AULA 2 - MAP -------------------------------

  /* MAP - Quando você quer que o resultado seja um Array
com O MESMO tamanho do Array inicial, porém com valores
modificados (ou não).

MAP  - não modifica o array original, ele retorna um novo
array com os valores resultantes do mapeamento. 

Sintaxe: arrayOriginal.map(callback)  */

//Quiz - crie um map para printar apenas os valores "name".
const data = [
    {
      name: "Butters",
      age: 3,
      type: "dog"
    },
    {
      name: "Lizzy",
      age: 6,
      type: "dog"
    },
    {
      name: "Red",
      age: 1,
      type: "cat"
    },
    {
      name: "Joey",
      age: 3,
      type: "dog"
    }
  ];
  
  /*Ex.: sintaxe: 
    const a = array.map(value, index, array[]) => (callback)
  */
  
  const b = data.map((value, index, array) => value.name);
  document.write(b);
  document.write("<br/><br/>");
  
  const c = data.map((idade) => idade.age);
  document.write(c);
  document.write("<br/><br/>");
  
  const d = data.map(tipo => tipo.type);
  document.write(d);
  document.write("<br/><br/>");
  
  // Durations are in minutes - imprima "name"
  const tasks = [ 
    { 
      name     : 'Write for Envato Tuts+', 
      duration : 120 
    }, 
    { 
      name     : 'Work out', 
      duration : 60 
    }, 
    { 
      name     : 'Procrastinate on Duolingo', 
      duration : 240 
    } 
  ];
  
  //Ex.:01 - Usando FOR - COMO NÃO DEVE SER FEITO!
  const task_names = []; 
  for (var i = 0, max = tasks.length; i < max; i += 1) { 
      task_names.push(tasks[i].name); 
  }
  document.write(task_names)
  document.write("<br/><br/>")
  
  //Ex.:02 - Usando o MAP - COMO DEVE SER FEITO!!
  const task_names02 = tasks.map(
    (task, index, array) => task.name
    );
  document.write(task_names02)
  document.write("<br/><br/>")
  
  //Ex.:03 - Usando o MAP - COMO DEVE SER FEITO!!
  const task_names03 = tasks.map(task => task.duration);
  document.write(task_names03)
  document.write("<br/><br/>")