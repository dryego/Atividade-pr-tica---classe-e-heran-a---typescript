import { Funcionario } from "./controller/funcionario";
import { Pessoa } from "./controller/pessoa";

const pessoa = new Pessoa("Dryego Barbosa", 36);

console.log(pessoa.mostraDados());

const funcionario = new Funcionario("Dryego", 35, 3980);

console.log(funcionario.mostraDados());

console.log(funcionario.mostraSalario());
