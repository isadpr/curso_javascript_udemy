/**
 *  Aritméticos
 *  + (adição/concatenação)
 *  - / *
 *  ** (potenciação)
 *  % (resto da divisão)
 */

let contador = 1;
console.log(contador++); //imprime o valor e depois incrementa (1)
console.log(contador); // 2

console.log(++contador); //incrementa e depois imprime o valor (3)
console.log(contador); // 3

// nao faz diferença (boa prática de programação)
let contador2 = 1;
contador2++
console.log(contador2);

//NaN - Not a number

const num1 = 10;
const num2 = Number('5.2');
//parseInt(inteiro), parseFloat(decimais), Number (não faz distinção)
console.log(num1 + num2);
