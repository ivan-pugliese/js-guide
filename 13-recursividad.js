/*

La recursividad es una técnica de programación que consiste en que una función se llame a sí misma.
Pero claro, si una función se llama a sí misma, ¿cuándo termina? ¿cómo se evita que se llame infinitamente? Con una condición base.

*/

// Vamos a crear una función que cuente desde un número hasta cero:

function cuentaAtras(numero) {
  // condicion base: si el numero que recibe es menor de 0 salimos de la funcion.
  if (numero < 0) return;

  // si es mayor o igual a 0, lo mostramos.
  console.log(numero);

  // llamamos a la funcion con el numero anterior.
  cuentaAtras(numero - 1);
}

cuentaAtras(3);
// -> 3
// -> 2
// -> 1
// -> 0

// veriamos asi la ejecucion:

/* 

cuentaAtras(3) -> (muestra 3)
               \ 
          cuentaAtras(2) -> (muestra 2)
                       \
                  cuentaAtras(1) -> (muestra 1)
                               \
                          cuentaAtras(0) -> (muestra 0)
                                        \
                                   cuentaAtras(-1) -> salida

*/

// ¡Cuidado! Si no ponemos la condición base, la función se llamará infinitamente y el navegador se quedará bloqueado. Cuando hacemos recursividad SIEMPRE hay que tener una condición que haga que la función salga de sí misma.


// Usando recursividad y devolviendo un valor:

// el factorial de un numero es el resultado de multiplicar ese numero por todos los anteriores hasta llegar a 1. Por ejemplo: el factorial de 5 es 5*4*3*2*1 = 120.

function factorial(numero) {
  // condicion base: si el numero es 0 o 1, devolvemos 1 y no llamamos a la funcion de nuevo.
  if (numero === 1 || numero === 0) {
    return 1
  } else {
    // si el numero es mayor que 1, llamamos a la funcion.
    return numero * factorial(numero - 1)
  }
}

console.log(factorial(5)) // Resultado: 120
console.log(factorial(3)) // Resultado: 6


// La recursividad es un concepto que cuesta entender al principio. ¿Una función que se llama a sí misma? A mucha gente le vuela la cabeza.

// ¿Qué te recomiendo para aprenderlo? Primero, entiende los ejemplos que hemos hecho y dibuja en un papel cómo se ejecutan las funciones.

/*  

Después, haz estos ejercicios de recursividad:

Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)

*/

function calcularSuma(numero) {
  if (numero === 0) {
    return
  } else {
    return numero + calcularSuma(numero - 1)
  }
}

calcularSuma(3);


function sucesionFibonacci(numero) {
  if (numero <= 1) {
    return numero;
  } else {
    return sucesionFibonacci(numero - 1) + sucesionFibonacci(numero - 2);
  }
}

sucesionFibonacci(6);

// sucesionFibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)