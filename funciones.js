/* 

Una función es un bloque de código que realiza una tarea específica cuando se llama. Puedes pensar en una función como en un microondas: le das algo para cocinar, le pasas algunos parámetros (como el tiempo y la potencia) y luego hace su trabajo y te devuelve el resultado.

En JavaScript, las funciones se pueden definir de varias maneras, pero la forma más común y básica es mediante la palabra clave function. 

Las funciones pueden devolver un resultado (un número, una cadena de texto, un booleano...) o puede no devolver nada. En ese caso, la función devuelve undefined.

*/

function saludar() {
  console.log("Hola Ivan!");
}

// llamamamos a la funcion:

saludar();


// devolviendo un resultado:

function sumar() {
  return 1 + 1;
}

// Ahora, cada vez que llamemos a la función sumar, nos devolverá el resultado de la suma.

// podemos guardar el resultado en una variable:
const resultado = sumar()

// o ver en consola directamente el resultado
console.log(sumar()) // -> 2


// funcion que nos devuelve un numero aleatorio del 1 al 10:

function getRandomNumber() {
  const random = Math.random();

   // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10;

  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied);

   // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1;

  return result;
}


// Funciones con parametros

function saludar3(usuario) {
  console.log("Hola " + usuario);
}

saludar3("Ivan");
saludar3("Agustin");

/* 

Ya ves como algo que parece tan sencillo, tiene un poder enorme. Las funciones son la base de la programación y nos permiten crear programas complejos a partir de pequeñas piezas.

Por ejemplo, para crear una calculadora, deberíamos empezar a crear funciones que realicen las operaciones básicas. En este caso necesitaremos parametrizar la función para que acepte los dos números para hacer la operación:

*/

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

const resultadoSuma = sumar(2, 3);
console.log(resultadoSuma);

const resultadoResta = restar(5, 4);
console.log(resultadoResta);


// EL ORDEN DE LOS PARAMETROS IMPORTA:

function cocinarMicroondas(plato, tiempo, potencia) {
  if (plato === '🐥' && tiempo === 1 && potencia === 5) {
    return '🍗'
  }

  if (plato === '🥚' && tiempo === 2 && potencia === 3) {
    return '🍳'
  }

  return '❌ Plato no soportado'
}

const resultado1 = cocinarMicroondas('🐥', 1, 5)
console.log(resultado) // -> 🍗

// si cambiamos el orden no funciona:
const resultado2 = cocinarMicroondas(1, 5, '🐥')
console.log(resultado) // -> '❌ Plato no soportado'

// Esto es porque la función espera que el primer parámetro sea el plato, el segundo el tiempo y el tercero la potencia. Si cambiamos el orden, podemos tener comportamientos inesperados o errores.






