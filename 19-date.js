let fecha = new Date();
console.log(fecha)
console.log(fecha.getDate()) // dia del mes
console.log(fecha.getDay()) // dia de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(fecha.getMonth()); //mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getFullYear()); // año en el que estamos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString()); // humanamente entendible
console.log(fecha.toDateString()); // 'Sun Jul 02 2023'
console.log(fecha.toLocaleString()); // '2/7/2023, 20:05:48'
console.log(fecha.toLocaleDateString()); // '2/7/2023'
console.log(fecha.toLocaleTimeString()); // 20:07:31
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

console.log(Date.now()); // 1688339542510  significa cuantos segundos han pasado desde el primero de enero de 1970, fecha TimeStump