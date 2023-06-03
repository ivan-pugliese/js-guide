/* 
 Un bucle es una estructura de control que permite repetir un bloque de instrucciones. Vamos, repetir una tarea tantas veces como queramos.

 En JavaScript, existen varias formas de lograrlo, y una de ellas es el bucle con while. El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple una determinada condición. 

 El bucle comienza evaluando la condición dentro de los paréntesis. Si la condición es true, se ejecuta el código dentro de las llaves.

 Después de ejecutar el código, la condición se evalúa de nuevo, y si sigue siendo verdadera, el código dentro de las llaves se ejecuta de nuevo. Este proceso se repite hasta que la condición se evalúa como falsa.

 Ten en cuenta que, si la condición es falsa desde el principio, el código dentro de las llaves nunca se ejecutará.

 A cada vuelta del bucle se le llama iteración. Una iteración es la repetición de un proceso o acción un número determinado de veces, de manera ordenada y sistemática.
*/

while (condicion) {
  // codigo a ejecutar mientras se cumpla la condicion.
}

let cuentaAtras = 10;

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1;
  console.log(cuentaAtras + " segundos");
}

// Los bucles while son muy potentes, pero también pueden ser peligrosos. Si la condición nunca se evalúa como falsa, el bucle se ejecutará infinitamente.

// Saliendo de un bucle con break:

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1;
  if (cuentaAtras === 5) { // si la cuentaAtras es 5, salimos del bucle
    break; // <---- salimos del bucle
  }
  console.log(cuentaAtras + " segundos");
}

// Saltando una iteracion con continue:

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1
  if (cuentaAtras % 2 === 0) { // si la cuentaAtras es un numero par...
    continue; // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras + " segundos");
}


// Anidacion de bucles:

const NUMERO_REVISIONES = 3;

while (cuentaAtras > 0) {

  console.log(cuentaAtras);

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0;

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    revisionesRealizadas = revisionesRealizadas + 1;
    console.log(revisionesRealizadas + " revisiones realizadas...");
  }

  cuentaAtras = cuentaAtras - 1;
}

// Las variables creadas con let y const que se crean dentro de un bucle, solo existen dentro de ese bucle. Cuando el bucle termina, la variable desaparece. De hecho si intentas acceder a ella fuera del bucle, te dará un error.

console.log(revisionesRealizadas) // -> ERROR: ReferenceError