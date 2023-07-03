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
      : console.log(string.split(""))
  
console.log(returnArray("Hola Mundo", ","));


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

