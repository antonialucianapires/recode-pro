## Variáveis

Variáveis são alocações de memória, onde guardamos um determinado tipo de informação temporariamente. Logo, nos referimos à memória RAM do computador. OU SEJA, serve para que possamos guardar dados!

### Qual a difereça entre var, let e const?

O var e o let são variáveis, mas possuem diferença de escopo. 
O var é uma variável global que funcionará em qualquer lugar do programa, independente de onde você declarou essa variável.

O let só funciona dentro do bloco onde foi declarado.

Exemplo:

//Var

if (true) {
  var a = 20;
}

console.log(a);

//Let

if (true) {
  let a = 20;

  console.log(a);
}

//let2 - nesse caso, let está dentro de um bloco maior

let a = 20;
if (true) {
  console.log(a);
}

//Const

Uma const significa dizer que "não é possível" reatribuir valor à constante.
*comportamento parecido com o let em relação ao escopo.

if(true) {
  const a = 20;
  console.log(a);
}

No entanto, há possibilidades para modificar essa constante que é quando utilizamos objeto, arrays, etc. 

//Constante e objeto
const Aluno = {
  name: "Bob",
  age: 17
};

console.log(Aluno);

//Modificando a constante através das propriedades do objeto
Aluno.age = "46";

O que eu não poderia fazer nesse caso? Criar um novo objeto para colocar no lugar do objeto aluno, ou seja, reatribuir um novo objeto.

E se eu quiser bloquear esse objeto para que ele não seja alterado? Utilizo o Object.freeze();

//Congelando um objeto para não ser modificado
const Aluno = {
  name: "Bob",
  age: 17
};

console.log(Aluno)

//Object.freeze(Aluno);

Aluno.age = "10";

........................................................................................................................................

 #### Regras para nomear sua variável (créditos ao Gustavo Guanabara no curso de Javascript)

- Elas podem começar com uma letra, $ ou _.
- Não podem começar com números
- É possível suar letras ou números
- É possível utilizar acentos e símbolos
- Não podem conter espaços (pode utilizar o símbolo de sublinhado _)
- Não podem ser palavras reservadas (alert, function, etc)

#### Dicas para nomear sua variável (créditos ao Gustavo Guanabara no curso de Java):

- Maiúsuclas e minúsculas fazem a diferença
- Tente utilizar nomes coerentes 

<hr>

####  Tipos de dados 

No Java, existem 6 tipos primitivos:

String - cadeias de caracteres;
Number - aceita valores inteiros e reais;
Boolean - true e false;

O comando typeof (tipo de):

let x = 200;
console.log(typeof x);

let z = "Recode";
console.log(typeof z);

let y = true;
console.log(typeof y);

Concatenação de Strings

//Concatenação
//Antes do ES6
const rio = {
  live: "RJ",
  love: "Arraial do Cabo"
};

const text =
  "Eu moro em " + rio.live + " e sou apaixonado por " + rio.love + "!";
console.log(text);

//pulando linha sem es6
const fruits = "banana" + "\n" + "orange" + "\n" + "apple";
console.log(fruits);

//Concatenação com ES6
const newtext = `Eu moro em ${rio.live} e sou apaixonado por ${rio.love} !! `;
console.log(newtext);

//pulando linha com es6
const newfruits = `banana
orange
apple`;
console.log(newfruits);

<hr>

#### Operadores aritméticos

//adição
let a = 30;
let b = 20;

let c = a + b;
console.log(c);

//subtração
let d = a - b;
console.log(d);

//multiplicação
let e = a * b;
console.log(e);

//divisão
let f = a / b;
console.log(f);

//resto da divisão - módulo
let g = a % b;
console.log(g);

//Incremento e Decremento
let h = a++;
console.log(a);

let i = b--;
console.log(b);

//potência
let j = b ** 2;
console.log(j);

//Comparação - igual

let k = (a == b);
console.log(k);

//Observação:
/* Usamos "=" para atribuir e "==" para comparar. O "===" é para saber se, na comparação, o resultado
é exatamente igual*/

// Diferente
let l = (a != b);
console.log(l);

//caso 2

let teste = "1";
let test2 = 1;
let m = (teste != test2);
console.log(m);

// Maior que 

let n = a > b;
console.log(n);

//Maior ou igual a que
let comp = a >= b;
console.log(comp);

// Menor que 
let o = a < b;
,00000console.log(o);

//Menor ou igual a que
let comp2 = a >= b;
console.log(comp2);

<hr>

 #### Operadores Lógicos

Citada anteriormente, a comparação é uma forma de testar/utilizar os valores booleanos. Mas agora, estaremos tratando da comparação de dois tipos booleanos. 

//Operador AND ("e" ou &&)
//O resultado é verdadeiro quando os dois valores forem verdadeiros
let a = true;
let b = true;

let c = a && b;
console.log(c);

//Operador OR ("ou" ou ||)
//O resultado é verdadeiro se pelo menos um dos valores for verdadeiro
let d = true;
let e = false;

let f = a || b;
console.log(f);

//Operador NOT ("não" ou !)
//O resultado é a inversão do valor inicial
let g = true;
console.log(!g);

<hr>

####  Estruturas condicionais
A estrutura condicional permite avaliar uma condição e, a partir dela, executar diferentes linhas de código (DevMedia).

if e else

//Sintaxe

if (condicao) {
 
// bloco de código - apenas uma condição
 
}

//quando há mais de uma condição

,]0,,,,,,,,,,,3

if (condicao) {
  // bloco de código 1
} else {
  // bloco de código 2
}

Switch e case

//Sintaxe

switch(expressão){
 case n1:
    bloco de código 1
    break;
 
 case n2:
   bloco de código 2
   break;
 default:
   bloco de código 3
}

Exemplo Switch/Case:

// Valor impresso no console: "Usuário logado"
let autenticado = true;
 
switch (autenticado) {
    case true:
        console.log("Usuário logado");
        break;
    case false:
        console.log("Usuário não autenticado");
} 

let sexo = "feminino";
 
switch (sexo) {
    case "feminino":
        console.log("Bem-vinda!");
        break;
    case false:
        console.log("Bem-vindo!");
} 

 ##### Criar algoritmo de média de aluno utilizando if/else e switch/case;

<hr>

#### Looping de Repetição

//While

//Utilizando o while para mostrar de 0 a 20;

let y = 0;
while (y <= 20) {
    console.log(y);
    y+=2;
}

//For

for (let x = 0; x <= 20; x++) {
  if (x % 2 == 0) {
      console.log(x);
  }
}
