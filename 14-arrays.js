// Arrays = coleccion de datos

[1, 2, 3, 4, 5];

// Los elementos de un array pueden ser de cualquier tipo, incluso otros arrays:
[1, 2, 3, 4, 5, [1, 2, 3]];

// Y, aunque no siempre sea recomendable, puedes mezclar tipos de datos dentro:
['uno', 2, true, null, undefined];

const numbers = [1, 2, 3, 4, 5];
let names = ["Ivan", "Agustin", "Pugliese"];

// Acceder a los elementos de un array:

numbers[0] // 1
numbers[2] // 3

names[1] // Agustin

// Si intentamos acceder a un elemento que no existe, nos devolvera undefined.

// Tambien podemos usar variables para acceder a los elementos de un array:

let position = 2;
numbers[position] // 3

// Modificar elementos de un array:

numbers[0] = 10
numbers[2] = 30

console.log(numbers) // [10, 2, 30, 4, 5]

// ¿Cómo es que pese a que hemos indicado que es una constante const podemos modificar el Array? Aunque hay una explicación mucho más larga, que veremos más adelante, la respuesta corta es que const sólo impide que se reasigne el valor de la variable, no que se modifique el valor en sí.


// Los arrays de JavaScript tienen una serie de métodos y propiedades que nos permiten trabajar con ellos de forma sencilla.
// Un método es una función que se ejecuta sobre un objeto. Una propiedad es una variable que pertenece a un objeto. En este caso, el objeto es un array.

// propiedad length : conocer la longitud de una coleccion de elementos
const frutas = ["manzana", "pera", "platano", "fresa"];
console.log(frutas.length) // 4

// tambien puedo cortar su longitud con dicha propiedad de la siguiente manera: 
frutas.length = 2;

console.log(frutas) // ["manzana", "pera"]
console.log(frutas.length) // 2


// Metodos de arrays:

// Cuando trabajamos con colecciones de elementos, vamos a querer hacer cosas con ellos. Por ejemplo: añadir un elemento, eliminarlo, buscarlo, etc. Para ello, los arrays tienen una serie de métodos que nos permiten hacer estas operaciones:

// .PUSH() : nos permite añadir un elemento al final de un array:
frutas.push("naranja")
console.log(frutas) // ["manzana", "pera", "platano", "fresa", "naranja"]

// .POP(): nos permite eliminar y devolver el ultimo elemento de un array:
const ultimaFruta = frutas.pop()

console.log(frutas) // ["manzana", "pera", "platano", "fresa"]
console.log(ultimaFruta) // "naranja"

// .SHIFT(): eliminar y devuelve el primer elemento de un array:
const primeraFruta = frutas.shift()

console.log(frutas) // ["pera", "platano", "fresa"]
console.log(primeraFruta) // "manzana"

// .UNSHIFT(): añadir un elemento al principio del array:
frutas.unshift("manzana")

console.log(frutas) // ["manzana", "pera", "platano", "fresa"]


// CONCATENAR ARRAYS:

// con el metodo CONCAT():
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5];

const allNumbers = numbers1.concat(numbers2);
console.log(allNumbers) // [1, 2, 3, 4, 5]

// con el SPREAD operator: propaga los elementos de un array
const allNumbersSpread = [...numbers1, ...numbers2];
console.log(allNumbersSpread) // [1, 2, 3, 4, 5]


// RECORRER ARRAYS:

// con while: Podemos crear una variable con let para guardar un puntero al índice del elemento que estamos iterando. En cada iteración, podemos incrementar el valor de la variable en 1, para que en la siguiente iteración se imprima el siguiente elemento.
let i = 0;

while (i < frutas.length) {
  console.log(frutas[i]); // imprime el elemento en la posición i
  i++;
}

// con for: 
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}

// tambien se puede recorrer el array en el orden inverso:
for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]); // imprime el elemento en la posición i
}


// con for of: Además de while y for, existe otra estructura de control que nos permite iterar sobre los elementos de un array: for...of. Esta estructura de control es más simple que for, ya que no necesitamos crear una variable para guardar el índice del elemento que estamos iterando.

for (const fruta of frutas) {
  console.log(fruta); // imprime el elemento en la posición i
}

// Como ves, hay algunas limitaciones en el uso de for...of. Por ejemplo, no podemos usarlo para recorrer un array en orden inverso y tampoco tenemos acceso al índice del elemento que estamos iterando.


// metodo FOREACH(): Ya hemos visto en la clase anterior que los arrays tienen métodos que nos permiten realizar operaciones sobre ellos, como añadir elementos o eliminarlos. Pero tiene muchos más métodos que iremos viendo que nos ayuda a trabajar con ellos.

// Uno de esos métodos es array.forEach(), que nos permite ejecutar una function para cada uno de los elementos del array. Esta función recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array.

frutas.forEach(function (fruta, index, originalArray) {
  console.log("index: " + index);
  console.log(fruta); // imprime el elemento en la posición i
})

// con arrow function:
frutas.forEach((fruta) => {
  console.log(fruta); // imprime el elemento en la posición i
})

// Algo importante es que array.forEach() no devuelve nada, por lo que no podemos asignar el resultado a una variable.


/* 

MÉTODO	ACCESO AL ÍNDICE	ACCESO AL VALOR	PUEDE USAR BREAK	CONTROL MANUAL DEL ÍNDICE
for	✅	✅	✅	✅
while	✅	✅	✅	✅
for...of	❌	✅	✅	❌
forEach	✅	✅	❌*	❌

Aunque técnicamente no puedes utilizar la sentencia break para salir de forEach, puedes simular esto lanzando una excepción y capturándola en un bloque try/catch externo. Obviamente es una mala práctica que no te recomiendo.
Cada uno de estos métodos tiene sus propios casos de uso. for y while son más generales y te permiten controlar el índice manualmente, lo que es útil si necesitas saltar a índices específicos, cambiar el orden de iteración o salir del bucle antes de que se complete.

for...of es más fácil de usar cuando solo necesitas los valores de un array y no te importa el índice. Es especialmente útil también cuando estás trabajando con iterables que no son arrays, como las cadenas de caracteres o los conjuntos (sets).

Finalmente, forEach es una forma muy eficiente y legible de iterar sobre un array si no necesitas break y si no necesitas controlar manualmente el índice.

*/


// BUSQUEDAS DE ARRAYS :

// indexOf : permite encontrar la posicion de un elemento dentro del array, si el elemento no existe, devuelve -1
const emojis = ['✨', '🥑', '😍']

const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon) // 2


// includes: determina si un array incluye un determinado elemento, devolviendo true o false segun corresponda:
const tieneCorazon = emojis.includes('😍')
console.log(tieneCorazon) // -> true
// El método .includes() también funciona con las cadenas de texto. Puedes utilizarlo para buscar una subcadena dentro de una cadena de texto: 'Hola mundo'.includes('Hola') // -> true


// some: te permite verificar si al menos uno de los elementos del array cumple con una condicion.
// Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento cada uno de los elementos del Array y debe retornar un valor booleano.
//Si al menos uno de los elementos retorna true, entonces el método some retorna true. Si ninguno de los elementos retorna true, entonces el método some retorna false.
const tieneCorazon2 = emojis.some(emoji => emoji === '😍');
console.log(tieneCorazon2) // -> true
// Podemos crear funciones más complejas para pasarle al método some. Por ejemplo, podemos crear una función que verifique si un Array contiene un elemento que sea un string de más de 3 caracteres:
const names2 = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names2.some(name => name.length > 3);
console.log(tieneNombreLargo) // false

// Algo importante a tener en cuenta es que el método some deja de iterar sobre el Array en cuanto encuentra un elemento que cumple con la condición. Por ejemplo, si tenemos un Array de 10 elementos y el elemento número 3 cumple con la condición, el método some no va a iterar sobre los 7 elementos restantes:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el numero ${number}`);
  return number > 5;
})

console.log(tieneNumeroMayorA5) // true


// every: El método every te permite verificar si todos los elementos de un Array cumplen con una condición. Es similar a some, pero en lugar de verificar si al menos uno de los elementos cumple con la condición, los verifica todos.
// Si todos los elementos retornan true, entonces el método every retorna true. Si al menos uno de los elementos retorna false, entonces el método every retorna false.

const emojis2 = ['😀', '😂', '😍', '😭', '🥺', '😎']

const todosSonFelices = emojis2.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names3 = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true



// find:  permite encontrar el primer elemento que cumple con una condición. Lo interesante es que este método te devuelve el elemento en sí, no un valor booleano como some y every. Aunque el funcionamiento es igual: hay que pasarle una función como argumento que retorne un valor booleano.
const numbers = [13, 27, 44, -10, 81];

const firstNegativeNumber = numbers.find(number => number < 0);
console.log(firstNegativeNumber) // -> -10

// Si no encuentra ningún elemento que cumpla con la condición, el método find retorna undefined.

const numbers = [13, 27, 44, 81]
// encuentra el primer número negativo
const firstNegativeNumber2 = numbers.find(number => number < 0)
console.log(firstNegativeNumber) // -> undefined


// findIndex: es similar a find, pero en lugar de devolver el elemento que cumple con la condición, devuelve el índice de ese elemento.
const numbers = [13, 27, 44, -10, 81]

const firstNegativeNumberIndex = numbers.findIndex(number => number < 0);
console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10

// Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.
const numbers = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex2 = numbers.findIndex(number => number < 0)
console.log(firstNegativeNumberIndex) // -> -1



// Ordenamiento de arrays: JavaScript proporciona un método incorporado en arrays llamado .sort() para ordenar sus elementos. Por defecto no es muy útil pero puedes personalizar su comportamiento para que ordene los elementos de la manera que necesites.

// Por defecto, .sort() hace una ordenación un poco extraña:
let numeros = [5, 10, 2, 25, 7]
numeros.sort()
console.log(numeros) // [10, 2, 25, 5, 7]
// ¿Qué ha pasado? Este comportamiento puede resultar confuso cuando se trabaja con números, ya que .sort() ordenará los números en función de su valor como cadena de texto, no de su valor numérico.

/* 

Para personalizar cómo sort() ordena los elementos, puedes pasar una función de comparación como argumento. La función de comparación debe devolver:

Un valor negativo si el primer argumento debe aparecer antes que el segundo.
Un valor positivo si el segundo argumento debe aparecer antes que el primero.
Cero si ambos argumentos son iguales.

*/

// de menor a mayor:
numeros.sort(function (a, b) {
  return a - b;
})

console.log(numeros) // [2, 5, 7, 10, 25]

// de forma simplificada:
numeros.sort((a, b) => a - b);

// de mayor a menor:
numeros.sort(function (a, b) {
  return a + b;
})

console.log(numeros) // [2, 5, 7, 10, 25]

// de forma simplificada:
numeros.sort((a, b) => a + b);

// Como ves, .sort() modifica el array original. Si quieres obtener un array ordenado sin modificar el original, puedes usar el método .toSorted(). Sólo ten en cuenta que, ahora mismo, su soporte en navegadores es limitado .
let numerosOrdenados = numeros.toSorted((a, b) => {
  return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]

// También podrías usar el operador de propagación (...) para crear una copia del array original y ordenarla:
const copiaNumeros = [...numeros];
copiaNumeros.sort((a, b) => a - b);


// Transformacion de arrays:

// filter(): El método filter crea un nuevo array con todos los elementos que devuelven true al ejecutar una función que le pasamos como parámetro.

// Por ejemplo, podríamos filtrar en un nuevo array todos los números pares de un array de números:

const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2,4,6];

// O quedarnos con todas las cadenas de texto que tengan la letra a:

const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

const stringsWithA = strings.filter(function (string) {
  return string.includes("a");
})

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']



// map(): El método map crea un nuevo array de la misma longitud que el original, pero con los elementos transformados por una función que le pasamos como parámetro. Así que la función recibirá cada elemento del array y tendremos que devolver el elemento transformado.

// Por ejemplo, podríamos crear un array con el doble de cada número de un array de números:

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers) // [2, 4, 6]

// O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:

const strings2 = ['hola', 'javascript', 'midu', 'programación']

const stringLong = strings2.map((string) => string.length);
console.log(stringLong);



// map + filter: Un nuevo Array con los elementos transformados y filtrados
// En JavaScript podemos crear un encadenamiento de métodos. De esta forma, si un método devuelve un array, podemos llamar a otro método sobre ese array sin necesidad de guardarlo en una variable.
// Imagina que queremos crear un array con el doble de los números y sólo quedarnos con los que sean mayores que 5. Podríamos hacerlo así:

const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleNumbersAndGreaterThanFive = numbers
  .map((number) => number * 2)
  .filter((number) => number > 5);

console.log(doubleNumbersAndGreaterThanFive); // [6, 8, 10, 12, 14]

// También podríamos hacerlo al revés, primero filtrando y luego transformando. Por ejemplo, filtrar los números pares y luego multiplicarlos por 2:

const doubleEvenNumbers = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(doubleEvenNumbers); // [4, 8, 12]



// reduce(): El método reduce es un poco más complejo que los anteriores. Este método te permite crear un único valor a partir de un Array.

/* 

Recibe 2 parametros: una funcion y un valor inicial.

La función recibe tres parámetros:

El acumulador: el valor que se va a ir acumulando en cada iteración
El elemento actual: el elemento del Array que estamos iterando en ese momento.
El índice: la posición del elemento actual en el Array.
Y debe devolver el valor que se va a acumular en cada iteración.

*/

// Un caso de uso muy típico de reduce es sumar todos los elementos de un Array:

const numbers = [1, 2, 3]

const sum = numbers.reduce((acumulador, currentNumber) => {
  return acumulador + currentNumber;
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6

/* 

Vamos a ver qué está pasando en cada iteración:

Iteración 1: el acumulador vale 0 (ya que 0 es el valor inicial) y el elemento actual vale 1. Así que devolvemos 0 + 1 = 1
Iteración 2: el acumulador vale 1 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 2. Así que devolvemos 1 + 2 = 3
Iteración 3: el acumulador vale 3 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 3. Así que devolvemos 3 + 3 = 6

*/


// ¿Recuerdas que hemos visto antes cómo usar map y filter juntos? Pues podrías usar reduce para tener que evitar crear un array intermedio. Por ejemplo, imagina que queremos doblar los números pares y sólo quedarnos con los mayores de 5 (como hicimos en el ejemplo anterior):

const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers2 = numbers.reduce((acumualdor, number) => {
  const doubled = number * 2
  const isEven = doubled % 2 === 0
  const isGreaterThanFive = doubled> 5;

  // si es par y mayor que 5 lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return acumualdor.concat(doubled);
  } else {
    // si no, devolvemos lo que ya teniamos
    return acumualdor
  }
}, []) // el array vacio es el valor inicial

console.log(doubleEvenNumbers2) // [6, 8, 10, 12, 14]

// Lo interesante en este caso es que no hemos tenido que crear un array intermedio con map y filter. Hemos ido acumulando los valores que nos interesaban en cada iteración y los que no nos interesaban los hemos descartado devolviendo lo que ya teníamos en el acumulador.


// Matrices: array de arrays

// Matriz de 2 x 3:

const matriz = [
  [1, 2, 3],
  [4, 5, 6]
]

// acceso a los elementos de una matriz:
let numero = matriz[1][2] // 6

// iteracion sobre matrices: podemos utilizar bucles anidados
for (let i = 0; i < matriz.length; i++) { // {1}
  for (let j = 0; j < matriz[i].length; j++) { // {2}
    console.log(matriz[i][j]);
  }
}
// En este ejemplo, el bucle externo recorre {1} cada fila de la matriz, mientras que el bucle interno {2} recorre cada elemento dentro de una fila específica.

// tambien se puede con forEach:
matriz.forEach((fila,filaIndex) => {
  fila.forEach((columna,columnaIndex) => {
    console.log("Fila" + filaIndex)
    console.log("Columna" + columnaIndex)
    console.log("columna" + columna)
  })
})


// Ejemplo practico de matrices: juego de 3 en raya o tateti
const tablero = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["0", "O", "X"]
]

// Verificar las lineas horizontales:
for (let i = 0; i < tablero.length; i++) {
  if (
    tablero[i][0] === tablero[i][1] &&
    tablero[i][1] === tablero[i][2]
  ) {
    console.log("El ganador es " + tablero[i][0]);
  }
}

// Verificar las lineas verticales:
for (let i = 0; i < tablero.length; i++) {
  if (
    tablero[0][i] === tablero[1][i] &&
    tablero[1][i] === tablero[2][i]
  ) {
    console.log("El ganador es " + tablero[0][i]);
  }
}

// Verificar la diagonal de arriba izquierda a derecha abajo
if (
  tablero[0][0] === tablero[1][1] &&
  tablero[1][1] === tablero[2][2]
) {
  console.log("El ganador es " + tablero[0][0]);
}

// Verificar la diagonal de derecha arriba a izquiera abajo
if (
  tablero[0][2] === tablero[1][1] &&
  tablero[1][1] === tablero[2][0]
) {
  console.log("El ganador es " + tablero[0][2]); // El ganador es X
}


// Ejercicio: 
const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

function findJavaScript(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === "JavaScript") {
        return [i,j]
      }
    }
  }
  return [-1,-1]
}

findJavaScript(matrix)


// Algoritmos con arrays

// Algoritmo para encontrar el numero mayor:
function findMaxAlgorithm(array) {
  let max = array[0] // recuperamos el primer elemento del array

  // recorremos el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // ¿ Es el elemento actual mayor que el maximo?
    if (array[i] > max) {
      max = array[i]; // si es asi, lo guardamos como nuevo maximo
    }
  }

  return max;
}
// En JavaScript podríamos usar el método Math.max para encontrar el número mayor de un array. Se usaría así: Math.max(...array). Pero por motivos didácticos, hemos creado nuestro propio algoritmo. Siempre que puedas, te recomiendo usar Math.max en su lugar.


// Busqueda binaria:

let numbers = [11, 18, 23, 25, 48, 55, 88, 111, 120];

function findNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true
    }
  }
  return false;
}

findNumber(numbers, 55);
// Obviamente, podríamos usar el método .includes() para comprobar si un array contiene un elemento. Pero por motivos didácticos, hemos creado nuestro propio algoritmo. Siempre que puedas, te recomiendo usar .includes() en su lugar.


// Implementacion de la busqueda binaria: La idea de la búsqueda binaria es ir dividiendo el array en dos mitades. Si el elemento que estamos buscando es mayor que el elemento de la mitad del array, tenemos que buscar en la mitad derecha. Si el elemento que estamos buscando es menor que el elemento de la mitad del array, tenemos que buscar en la mitad izquierda. Y así sucesivamente hasta encontrar el elemento que estamos buscando.

function busquedaBinaria(array, elemento) {
  let index = 0; // primer elemento del array
  let final = array.length - 1 // ultimo elemento del array a buscar

  // mientras el indice sea menor o igual que el final seguiremos buscando
  while (index <= final) {
    // calculamos la mitad del array
    // como puede ser impar, usamos Math.floor para redondear hacia abajo
    const mitad = Math.floor((index + final) / 2);

    // si el elemento de la mitad es igual al elemento que estamos buscando encontes encontramos el elemento
    if (array[mitad] === elemento) {
      return mitad
    } else if (array[mitad] < elemento) {
      // si el elemento de la mitad es menor que el elemento que estamos buscando entonces tenemos que buscar en la mitad derecha
      index = mitad + 1
    } else {
      // si el elemento de la mitad es mayor que el elemento que estamos buscando entonces tenemos que buscar en la mitad izquierda
      final = mitad - 1
    }
  }

  // si llegamos hasta aqui, es que no hemos encontrado el elemento y devolvemos -1
  return -1
}

// En JavaScript podríamos usar el método Array.prototype.indexOf para encontrar el índice de un elemento en un array. Se usaría así: array.indexOf(elemento). Pero por motivos didácticos, hemos creado nuestro propio algoritmo. Siempre que puedas, te recomiendo usar Array.prototype.indexOf en su lugar.



// Otro ejercicio:
let numbers = [999,255,121];

function minAndMaxWord(words) {
  let minIndex = 0
  let maxIndex = 0
  for(let i = 1; i < words.length; i++) {
    if(words[i] < words[minIndex]) {
      minIndex = i
    }
    if(words[i] > words[maxIndex]) {
      maxIndex = i
    }
  }
  return [minIndex,maxIndex]
}

minAndMaxWord(numbers)