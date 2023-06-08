// FUNCIONES EXPRESADAS: Una function expression es una función que se asigna a una variable. 

// esto es una function expression
const sum = function (a, b) {
  return a + b
}

// esto es una declaración de función
function sum(a, b) {
  return a + b
}

// ¡Fíjate que la function no tiene nombre en la function expression! Cuando una función no tiene nombre se le llama función anónima. Aunque en este caso, la función está asignada a una variable que sí tiene nombre y por eso podremos utilizarla más adelante.

// El comportamiento es muy similar al de una función declarada con la palabra clave function. Sin embargo, hay una diferencia muy importante entre ambas que debes conocer: el hoisting.

// HOISTING:  es un término que se usa para describir cómo JavaScript parece que mueve las declaraciones funciones al principio del código, de forma que las puedes usar incluso antes de declararlas.

sum(1, 2) // 3

function sum(a, b) {
  return a + b
}

// Lo que está pasando es que JavaScript asigna en memoria durante la fase de compilación las declaraciones de funciones y por eso al ejecutarse el código tiene acceso a esa posición de memoria a la que se refiere la función.

// Eso sería la explicación técnica del hoisting, pero si te sirve de ayuda, puedes pensar que es como si JavaScript moviese las declaraciones de funciones al principio del código.

// Con las funciones expresadas no se aplica el hoisting:

sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}
