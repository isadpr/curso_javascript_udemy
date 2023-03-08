let umaString = 'Um texto';

console.log(umaString[4]);
console.log(umaString.charAt(3));
console.log(umaString.concat(' oi.')); //inutil
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('o')); //começa a buscar de tras pra frente
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/));
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.length);

let outraString = 'O rato roeu a roupa do rei de roma.';

console.log(outraString.replace(/r/g, '#')); //substitui todas as letras r por conta do g
console.log(outraString.slice(2,6));
console.log(outraString.split(' '));
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());
