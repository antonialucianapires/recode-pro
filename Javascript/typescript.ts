/Nome da classe
class Carro{
  //atributos
  private modelo: string;
  private numeroDePortas: number;
  private velocidade: number = 0;

  //construtor
  constructor(modelo: string, numeroDePortas: number){
     this.modelo = modelo;
     this.numeroDePortas = numeroDePortas;
  }

  //métodos
  public acelerar(): void{
      this.velocidade = this.velocidade + 10;
  }

  public parar(): void{
      this.velocidade = 0;
  }

  public velocidadeAtual(): number {
     return this.velocidade;
  }
}
//instânciar a classe Carro - criando Object
let carroA = new Carro()
console.log(carroA)

//instânciar a classe Carro - criando Object Fusca
let fusca = new Carro('Fusca', 2)
console.log(fusca)

let gol = new Carro('Gol', 4)
console.log(gol)
 