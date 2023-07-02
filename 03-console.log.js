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


console.log(console);
    console.error("Esto es un error");
    console.warn("Esto es un aviso");
    console.info("Esto es un mensje informativo");
    console.log("Un registro de lo que ha pasado en nuestra aplicación");

    let nombre1 = "Jon",
      apellido = "MirCha",
      edad = 35;

    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(nombre, apellido, edad);
    console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
    console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
    console.clear();
    console.log(window);
    console.log(document);
    console.dir(window);
    console.dir(document);
    console.clear();

    console.group("Cursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();

    console.groupCollapsed("Cursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();
    console.clear();
    console.log(console);
    console.table(Object.entries(console).sort());

    const numeros = [1, 2, 3, 4, 5],
      vocales = ["a", "e", "i", "o", "u"];

    console.table(numeros);
    console.table(vocales);

    const perro = {
      nombre: "Boni",
      raza: "Boxer",
      color: "cafe"
    }
    console.table(perro);
    console.clear();

    console.time('Cuanto tiempo tarda mi código');
    const arreglo = Array(1000000);

    for (let i = 0; i < arreglo.length; i++) {
      arreglo[i] = i;
    }

    console.timeEnd('Cuanto tiempo tarda mi código');
    //console.log(arreglo);

    console.clear();


    for (let i = 0; i <= 100; i++) {
      console.count("código for");
      console.log(i);
    }

    console.clear();

    let x = 3,
      y = 2,
      pruebaXY = "Se espera que X siempre sea menor que Y";

    console.assert(x < y, { x, y, pruebaXY });