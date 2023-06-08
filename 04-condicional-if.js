/* 
 El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:
*/

if (condicion) {
  // codigo que se ejecuta si la condicion es verdadera. 
}

// Ejemplo

const edad = 18;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else if (edad >= 16) {
  console.log("Es CASI mayor de edad");
} else {
  console.log("Es menor de edad");
}

/* 
 El programa comprueba la primera condición. Si es true, ejecuta el código dentro del bloque if. Si es false, comprueba la siguiente condición. Si es true, ejecuta el código dentro del bloque else if. Si es false, ejecuta el código dentro del bloque else.

 Dicho de otra forma, entrará en el primer bloque que cumpla la condición y no entrará en los demás. Si no cumple ninguna, entonces entrará en el bloque else.
*/


// Anidacion de condiciones

const tieneCarnet = true;

if (edad >= 18) {
  if (tieneCarnet) {
    console.log("Puede conducir");
  } else {
    console.log("No puede conducir");
  }
} else {
  console.log("No puedes conducir");
}

// En muchas ocasiones vas a querer evitar la anidación innecesaria de condicionales ya que se hacen difíciles de leer y mantener. En estos casos es mejor utilizar operadores lógicos para crear la condición:

if (edad >= 18 && tieneCarnet) {
  console.log("Puede conducir");
} else {
  console.log("No puede conducir");
}

// Otra técnica muy interesante es la de guardar el resultado de la condición en una variable, para que tus condiciones sean mucho más legibles:

const puedeConducir = edad >= 18 && tieneCarnet;

if (puedeConducir) {
  console.log("Puede conducir");
} else {
  console.log("No puede conducir");
}

//  A este tipo de técnica se le llama refactorización y consiste en mejorar el código sin cambiar su comportamiento.

// Es importante que sepas que las llaves {} no siempre son obligatorios. Si el bloque de código sólo tiene una línea, puedes omitir las llaves:

if (edad >= 18)
  console.log("Eres mayor de edad");
else
  console.log("Eres menor de edad");  

// Tambien se puede escribir en la misma linea:
if (edad >= 18) console.log("Eres mayor de edad");
else console.log("Eres menor de edad");