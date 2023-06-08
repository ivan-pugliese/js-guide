// Arrow functions: Las funciones flecha son siempre funciones anónimas y function expressions. Esto significa que no tienen nombre y que se asignan a una variable.

const funcionFlecha = () => {
  // codigo a ejecutar
}

// En lugar de la palabra clave function, utilizamos una flecha => para definir la función. También podemos omitir los paréntesis alrededor de los parámetros si solo tenemos uno:

const saludar = nombre => {
  console.log("Hola " + nombre);
}

// Ventajas de las arrow functions:

/* 

Sintaxis más concisa: la sintaxis de las funciones flecha es más corta y más fácil de leer que la sintaxis de las funciones regulares, especialmente cuando se trabaja con funciones de una sola línea.

Return implícito: las funciones flecha puede devolver el valor de la expresión sin usar la palabra clave return cuando son de una sola línea. Esto hace que las funciones flecha sean aún más cortas y más fáciles de leer.

Funciones anónimas más legibles: las funciones flecha son una forma más legible y concisa de crear funciones anónimas en JavaScript, lo cual puede hacer que nuestro código sea más fácil de entender.

*/


// return implicito: Cuando una función flecha tiene una sola expresión, podemos omitir las llaves {} y la palabra clave return para hacerla aún más corta. Esto se conoce como return implícito.

// Declaración de función regular
function sumar(a, b) {
  return a + b
}

// Función flecha
const sumarFlecha1 = (a, b) => {
  return a + b
}

// Función flecha con return implícito
const sumarFlecha2 = (a, b) => a + b