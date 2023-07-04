/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

// 1) :
const countCharacters = (string = "") =>
  !string
    ? console.warn("No ingresaste ninguna cadena")
    : console.log(`La cadena ${string} tiene ${string.length} caracteres`); 
  
console.log(countCharacters("Hola mundo"));    


// 2) : 
const trimCharacters = (string = "", length = undefined) =>
  !string
    ? console.warn("No ingresaste ninguna cadena")
    : (length === undefined)
      ? console.warn("No ingresaste la longitud para recortar el texto")
      : console.log(string.slice(0,length))

console.log(trimCharacters("Hola mundo", 4));


// 3) :
const returnArray = (string = "", character = undefined) =>
  !string
    ? console.warn("No ingresaste ninguna cadena")
    : (character === undefined)
      ? console.warn("No ingresaste un separador")
      : console.log(string.split(character))
  
returnArray("Hola que tal", " ");


// 4) : 
const repeatText = (string = "", repeat = undefined) => {
  if (!string) return console.warn("No ingresaste ninguna cadena")
  
  if (repeat === undefined) return console.warn("No ingresaste una cantidad de veces a repetir")

  if (repeat === 0) return console.error("El numero de veces no puede ser 0")

  if (Math.sign(repeat) === -1) return console.error("El numero de veces no puede ser negativo")
  
  for (let i = 1; i <= repeat; i++) {
    console.log(`${string}, ${i}`)
  }
}
console.log(repeatText("Hola mundo", 3))


/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/


// 5) :
const reverseString = (string = "") => {
  if (!string) return console.warn("No ingresaste ninguna cadena de texto")
  
  return string.split("").reverse().join("")
}

reverseString("Hola mundo");


// 6) :
const repeatWordInText = (string = "", word = "") => {
  if(!string) return console.warn("No ingresaste ninguna cadena")
  
  if(!word) return console.warn("No ingresaste ninguna palabra")
  
  let count = 0,
      i = 0;
  
  while(i !== -1) {
    i = string.indexOf(word,i)
    if(i !== -1) {
      i++
      count++
    }
  }
  return console.log(`La palabra ${word} se repite ${count} veces`);
}

repeatWordInText("hola mundo adios mundo", "mundo");


// 7) :
const palindromeChecker = (string = "") => {
  if(!string) return console.warn("No ingresaste una cadena")
  
  string = string.toLowerCase()
  let reverseString = string.split("").reverse().join("")
  
  if(string !== reverseString) return false
  
  return true
 
}

palindromeChecker("Salas")


// 8) :
const deletePatronCharacters = (string = "", patron = "") => 
  (!string)
    ? console.warn("No ingresaste ninguna cadena")
    : (!patron)
      ? console.warn("No ingresaste ningun patron")
      : console.log(string.replace(new RegExp(patron,"ig"), ""))

deletePatronCharacters("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/


// 9) :
const randomNumber = () => {
  let max = 600
  let min = 501
  
  let random = Math.round(Math.random() * (max-min) + min)
  return random
}
    
randomNumber();


// 10) : 
const capicuaNumber = (number = 0) => {
  if(!number) return console.warn("No ingresaste un numero")
  
  if(typeof number !== "number") return console.error(`El valor ${number} ingresado no es un numero`)
  
  number = number.toString();
  let reverse = number.split("").reverse().join("")
  
  return (number === reverse)
    ? console.log("Si es capicua")
    : console.log("No es capicua")
}

capicuaNumber(11)


// 11) :
const factorial = (number = undefined) => {
  if(number === undefined) return console.warn("No ingresaste un numero")
  
  if(typeof number !== "number") return console.error(`El valor ${number} ingresado     no es un numero`)
  
  if(number <= 0) return console.error("No se puede sacar el factorial de 0 o un numero negativo, debe ser entero positivo")
  
  let factorial = 1
  
  for(let i = number; i > 1; i--) {
    factorial = factorial * i
  }
  
  return factorial
}

factorial(5);


/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/


// 12) :
const primeNumber = (number = undefined) => {
  if(number === undefined) return console.warn("No ingresaste un numero")
  
  if(typeof number !== "number") return console.error(`El valor ${number} ingresado no es un numero`)
  
  if(number <= 0) return console.error("No se puede sacar el factorial de 0 o un numero negativo, debe ser entero positivo")
  
  if(number === 1) return console.error("El numero no puede ser 1")
  
  let divisible = false;
  
  for(let i = 2; i < number; i++) {
    if((number % i) === 0) {
      divisible = true;
      break;
    } 
  }
  
  return(divisible)
    ? console.log("El numero ingresado no es primo")
    : console.log("El numero ingresado es primo")
}

primeNumber(19);


// 13) :
const evenOrOdd = (number = undefined) => {
  if(number === undefined) return console.warn("No ingresaste un numero")
  
  if (typeof number !== "number") return console.error(`El valor ${number} ingresado no es un numero`)
  
  return (number % 2 === 0) 
    ? console.log("El numero ingresado es par")
    : console.log("El numero ingresado es impar")  
}

evenOrOdd(2);


// 14) :
const convertDegrees = (grados = undefined, unidad = undefined) => {
  if(grados === undefined) return console.warn("No ingresaste numeros a convertir")
  
  if(typeof grados !== "number") return console.error(`El valor ${grados} ingresado, no es un numero`)
  
  if(unidad === undefined) return console.warn("No ingresaste el tipo de grados a convertir")
  
    if(typeof unidad !== "string") return console.error(`El valor ${unidad} ingresado, no es una cadena`)
  
  if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")
  
  if(unidad === "C") {
    return console.log(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`)
  } else if (unidad === "F") {
    return console.log(`${grados}°F = ${Math.round((grados -32) * (5/9))}°F`)
  } else {
    return console.error("El tipo de grados a convertir no es valido")
  }
}

convertDegrees(100, "F");


/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

