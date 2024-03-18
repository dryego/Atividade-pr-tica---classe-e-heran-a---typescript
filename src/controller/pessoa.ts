export class Pessoa {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mostraDados(): string {
    return "nome: " + this.nome + " - " + "Idade: " + this.idade;
  }
}
