/* Destructuring Assigment - Atribuição via desestruturação

  Server para interar (interable) de uma forma mais fácil elementos
de um array (interáveis) ou Objects (interáveis).
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao */

//New Array
const arr = ["George ", "Bezerra ", "RJ ", "Brasil"];

//Destructuring Arrays
const [nome, sobrenome, cidade, pais] = arr;

//Print
document.write(nome, sobrenome, cidade, pais);
document.write("<br/><br/>");

//New Object
const data = {
  name: "George",
  surname: "Bezerra",
  city: "RJ",
  site: "georgebezerra.dev",
  social: {
    twitter: "@georgesbezerra",
    linkedin: "georgesbezerra"
  }
};

//Processo default
/* const name = data.name
document.write(name)
document.write("<br/><br/>");

const surname = data.surname
document.write(surname)
document.write('<br/><br/>')

const twitter = data.social.twitter
document.write(twitter)
document.write('<br/><br/>') */

//Destructuring Objects - desestruturação Objeto
/*Obs.: { } = não é um bloco lógico e sim
 a sintaxe do destructuring*/
const { name, surname } = data;
document.write(name);
document.write(surname);
document.write("<br/><br/>");

//Destructuring - Object indentado
const { twitter, linkedin } = data.social;
document.write(twitter);
document.write("<br/><br/>");
document.write(linkedin);
document.write("<br/><br/>");

//Renomeando o valor da variável - LINKEDIN
const { linkedin: IN } = data.social;
document.write(IN);
document.write("<br/><br/>");

/*Definindo um valor default para uma variável que não existe, se não encontrar nada
inseri este valor para dentro*/
const { estado = 'Rio de Janeiro' } = data
document.write(estado);
document.write("<br/><br/>");

/* React - similar ao Destructuring
import { React } from 'react' */

/* Quiz - Crie uma forma de trocar os valores das 2 
variáveis entre si   "b" passe a ser o "a" e "a" passe a ser
 o "b" */
  let a = 42;
  let b = 21;

document.write('a : ', a);
document.write(' , b : ', b);
document.write('<br/><br/>');

//Processo default - Swap Variables
/*   let temp;

  temp = a;
  a = b;
  b = temp;

document.write('a : ', a);
document.write(' , b : ', b);
document.write('<br/><br/>'); */

//Destructuring Swap
[a, b] = [b, a];
document.write("a : ", a);
document.write(" , b : ", b);
document.write("<br/><br/>");
