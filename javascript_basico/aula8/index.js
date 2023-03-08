const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');

//template strings
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); //jeito mais moderno de fazer
console.log(`${nome} nasceu em ${anoNascimento}`);
