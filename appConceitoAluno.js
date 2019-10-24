nota1 = 2.0
nota2 = 7.0

media = ((nota1 + nota2) / 2) .toFixed(1);

conceito = ""

if (media <= 4) {
	conceito = "ruim"
}
else if (media <=6) {
	conceito = "regular"
}
else if (media >= 8) {
	conceito = "bom"
}

else {
	conceito = "ótimo"
}

console.log("Sua média é", media)
console.log("Seu conceito é ", conceito)
