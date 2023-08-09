// date(0) - 01/01/1970 timestamp unix ou epoca unix
//const date = new Date(2019, 3, 20, 15, 14, 27, 500); // a, m, d, h, M, s, ms (MES COMEÇA NO 0, LOGO 3 É ABRIL)
const date = new Date('2019-04-20 20:20:59')
console.log('Dia', date.getDate());
console.log('Mês', date.getMonth() + 1); // Mês começa do zero
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Min', date.getMinutes());
console.log('Seg', date.getSeconds());
console.log('ms', date.getMilliseconds());
console.log('Dia semana', date.getDay()); // 0 - Domingo, 6 - Sábado
console.log(date.toString());