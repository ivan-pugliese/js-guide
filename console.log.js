// console.log

/* 
 console.log() es una función integrada en JavaScript que se utiliza para imprimir mensajes en la consola del navegador o del editor de código. Se utiliza principalmente para depurar el código y para imprimir valores de variables y mensajes para ayudar en el proceso de desarrollo.
*/

console.log("Hola, JavaScript"); // en consola, hola javascript

// tambien puedo averiguar el valor de una variable:

const nombre = "JavaScript";
console.log(nombre);

// Como ya sabes concatenar cadenas de texto, puedes mostrar un mensaje y el valor de una variable en el mismo console.log().

console.log('Hola, ' + nombre)
// -> 'Hola, JavaScript'

// Además, puedes mostrar varios mensajes y valores de variables en el mismo console.log() separándolos por comas.

const version = 2023;
console.log(nombre, version); // JavaScript 2023

// Además de console.log(), existen otros métodos que puedes utilizar para imprimir mensajes en la consola. Algunos de ellos son:

/*
 console.error(): Imprime un mensaje de error en la consola.
 console.warn(): Imprime un mensaje de advertencia en la consola.
 console.info(): Imprime un mensaje de información en la consola.
*/

console.error('Error')
// ❌ Error
console.warn('Advertencia')
// ⚠️ Advertencia
console.info('Información')
// ℹ️ Información