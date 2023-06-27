// Datos primitivos

/* numbers
   strings
   booleans
   null
   undefined
   symbol
   bigint
*/

// Datos no primitivos

/* 
  objetos
  funciones
*/


/*** 

Numbers

2 // Entero
3.5 // Decimal
- 10 // Negativo
Infinity // Infinito

// Operaciones aritmeticas con los numbers

suma
2 + 2

resta
2 - 2

multiplicacion
2 * 2

division
2 / 2

modulo
2 % 2

exponente
3 ** 3


 let a = 2;
    let b = new Number(1);
    let c = 7.19;
    let d = "5.6";

    console.log(a, b);
    console.log(c.toFixed(1));
    console.log(c.toFixed(5));
    console.log(parseInt(c));
    console.log(parseFloat(c));
    console.log(typeof c, typeof d);
    console.log(a + b);
    console.log(c + parseInt(d));
    console.log(c + parseFloat(d));
    console.log(c + Number.parseInt(d));
    console.log(c + Number.parseFloat(d));

***/


/*** 
  
Strings

"Hola mundo"
'Hola mundo'
`Hola mundo
 Como estas 
`

concatenacion
"Hola " + "mundo"

        let nombre = "Jon";
        let apellido = 'MirCha';
        let saludo = new String("Hola Mundo");
        let lorem = "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.      ";

        console.log(nombre, apellido, saludo);
        console.log(
          nombre.length,
          apellido.length,
          saludo.length,
          nombre.toUpperCase(),
          apellido.toLowerCase(),
          lorem.includes("amet"),
          lorem.includes("jon"),
          lorem,
          lorem.trim(),
          lorem.split(" "),
          lorem.split(",")
        );
  
***/


/*** 
  
Booleans

true
false

 let verdadero = true;
    let falso = false;
    let v = Boolean(true);
    let f = Boolean(false);

    console.log(verdadero, falso, v, f);
    console.log(typeof verdadero, typeof falso);
    console.log(Boolean(0)); tiende a falso
    console.log(Boolean(-7)); tiende a verdadero
    console.log(Boolean("")); tiende a falso
    console.log(Boolean(" ")); tiende a verdadero
  
***/


/*** 
  
null y undefined

La particularidad de estos dos tipos de datos es que cada uno sólo tiene un valor. El tipo null sólo puede tener el valor null y el tipo undefined sólo puede tener el valor undefined.

Mientras que null es un valor que significa que algo no tiene valor, undefined significa que algo no ha sido definido. Por ejemplo, si creamos una variable sin asignarle ningún valor, su valor será undefined:

let rolloDePapel // -> undefined

También podemos asignar directamente el valor undefined a una variable:

let rolloDePapel = undefined // -> undefined
En cambio, para que una variable tenga el valor null, sólo podemos conseguirlo asignándole explícitamente ese valor:

let rolloDePapel = null
***/
