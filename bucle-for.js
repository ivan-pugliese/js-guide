/*  

La estructura de control for en JavaScript es muy útil para ejecutar una serie de instrucciones un número determinado de veces. A diferencia de while que usa una condición para determinar si se ejecuta o no el bloque de código, for usa un contador que se incrementa en cada iteración hasta que se cumple una condición.

La inicialización se realiza antes de que se inicie el bucle y se utiliza para declarar variables y asignar valores iniciales.

La condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la expresión se evalúa como true, se ejecuta el bloque de código dentro del bucle. Si la expresión se evalúa como false, el bucle termina.

La actualización se utiliza para actualizar el valor de la variable de control del bucle después de cada iteración.

Ejemplo de uso 

*/

for (inicializacion; condicion; incremento) {
  // codigo a ejecutar
}

// Ejemplo, imprimir los numeros del 1 al 10:

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Iterando al reves:

/*
El método for en JavaScript también se puede utilizar para iterar al revés Para ello, se utiliza la sintaxis i-- en la sección de actualización del bucle en lugar de i++.

La sintaxis del método for para iterar en reversa es la siguiente:
*/

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log('¡Despegue 🚀!')
  } else {
    console.log('Faltan ' + i + ' segundos')
  }
}


/* 

Aunque siempre los ejemplos con for son los mismos, ten en cuenta que puedes hacer cualquier cosa en la inicialización, condición y actualización. Podrías, por ejemplo, usar dos variables a la vez.

for (let i = 0, j = 5; i < 5; i++, j--) {
  console.log(i, j);
}
La coma , nos permite declarar dos variables en la inicialización y actualizarlas en la actualización. En este caso la , es un operador que evalua cada uno de sus operandos (de izquierda a derecha) y retorna el valor del último operando.

No es muy común su uso, pero es bueno saber que existe.

*/


// Continue y Break

/* 

Al igual que en while, for también tiene las palabras reservadas continue y break para controlar el flujo de ejecución del bucle.

Recuerda que continue se usa para saltar a la siguiente iteración del bucle y break para salir del bucle.

*/

for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0
  if (esPar) {
    continue
  }

  console.log(i);

  if (i === 7) {
    break;
  }
}


// Bucles anidados 

/*  

Imagina que quieres crear la tabla de multiplicar del 1 al 10. Para ello, necesitas un bucle que itere del 1 al 10 y, dentro de ese bucle, otro bucle que itere del 1 al 10. Esto se puede hacer con dos bucles for anidados (uno dentro del otro).

*/

for (let i = 1; i <= 10; i++){
  for (let j = 1; j <= 10; j++) {
    const resultado = i * j;
    console.log(i + " x " + j + " = " + resultado);
  }
}