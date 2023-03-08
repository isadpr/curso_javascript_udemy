let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let auxA;
auxA = varA;
varA = varB;

varB = varC;

varC = auxA;

console.log(varA, varB, varC);

/** FORMA MAIS MODERNA DE FAZER
 * [varA, varB, varC] = [varB, varC, varA]
 */