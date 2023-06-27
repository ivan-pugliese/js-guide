/* 

En JavaScript, la sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de código dependiendo del valor de una expresión. Esta estructura es útil cuando queremos realizar diferentes acciones basadas en una única variable.

Sintaxis
La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido. Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada caso y evitar que se sigan evaluando el resto de casos.

*/

switch (expresion) {
  case valor1:
    //codigo a ejecutar si la expresion coincide con valor1
    break
  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}


const dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("¡Hoy es lunes! 😢")
    break

  default:
    console.log("No es lunes, YAY! 🚀")
    break
}


// Ejemplo utilizando el objeto Date (hora y fecha):

/*  

En JavaScript podemos recuperar la información de la hora y la fecha usando el objeto Date. Este objeto tiene un método llamado getDay() que nos devuelve el día de la semana en formato numérico, siendo 0 el domingo y 6 el sábado.

Igual que console es un objeto. También Date lo es. Un objeto en JavaScript no es muy diferente a un objeto en la vida real. Tiene propiedades y funciones que podemos usar. En este caso, getDay() es una función que nos devuelve el día de la semana.

*/


const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("¡Hoy es domingo! 😴")
    break
  case 1:
    console.log("¡Nooo, es lunes! 😢")
    break
  case 2:
    console.log("¡Hoy es martes! 🥵")
    break
  case 3:
    console.log("¡Hoy es miércoles! 🤓")
    break
  default:
    console.log("Se acerca el fin de! 🚀")
    break
}


// En ocasiones, queremos que varios casos ejecuten el mismo código. En lugar de repetir el mismo código en cada caso, podemos agruparlos usando el mismo case para cada uno de ellos:

switch (dia) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
}


// El patron switch(TRUE): Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
}

