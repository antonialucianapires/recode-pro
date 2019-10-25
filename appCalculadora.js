let x;
let resultado = 0;

function menu() {
  x = prompt(`Escolha a operação:
  (+) Soma
  (-) Subtração
  (*) Multiplicação
  (/) Divisão
  (m) Media
  (t) tabuada
  (0) Sair do programa`);
}

while (x != 0) {
  menu();
  switch (x) {
    case "+": //soma
      let a = Number(prompt(`Digite o Valor de A: `));
      let b = Number(prompt(`Digite o Valor de B: `));
      resultado = a + b;
      alert(`A soma de ${a} + ${b} é ${resultado}.`);
      break;

    case "-": //subtração
      let c = Number(prompt(`Digite o Valor de A: `));
      let d = Number(prompt(`Digite o Valor de B: `));
      resultado = c - d;
      alert(`A subtração de ${c} - ${d} é ${resultado}.`);
      break;

    case "*": //multiplicação
      let e = Number(prompt(`Digite o Valor de A: `));
      let f = Number(prompt(`Digite o Valor de B: `));
      resultado = e * f;
      alert(`A multiplicação de ${e} * ${f} é ${resultado}.`);
      break;

    case "/": //divisão
      let g = Number(prompt(`Digite o Valor de A: `));
      let h = Number(prompt(`Digite o Valor de B: `));
      resultado = g / h;
      if (h != 0) {
        alert(`A divisão de ${g} / ${h} é ${resultado}.`);
      } else {
        alert(`Não se pode dividir nenhum valor por 0.`);
      }
      break;

    case "m": //media
      let i = Number(prompt(`Digite o Valor de A: `));
      let j = Number(prompt(`Digite o Valor de B: `));
      resultado = Number(i + j) / 2;
      alert(`A média entre ${i} e ${j} é ${resultado}.`);
      break;
    case "t": //tabuada
      let k;
      let numero = Number(prompt("Digite número:"));
      alert(`A tabuada de ${numero} é: `);
      for (k = 1; k <= 10; k++) {
        resultado = numero * k;
        document.write(`${numero} x ${k} = ${resultado}<br>`);
      }
      break;

    case "0":
      break;
  }
}
