import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa {
  private salario: number;

  constructor(nome: string, idade: number, salario: number) {
    super(nome, idade);
    this.salario = salario;
  }

  mostraSalario(): string {
    return "salario: " + this.salario;
  }
}
