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


// 15) :
const convertBinaryDecimal = (number = undefined, base = undefined) => {
  if (number === undefined) return console.warn("No ingresaste un numero")
  
  if (typeof number !== "number") return console.error(`El valor ${number} ingresado no es un numero`)

  if (base === undefined) return console.warn("No ingresaste la base a convertir")

  if (typeof base !== "number") return console.error(`El valor ${base} ingresado no es un numero`)

  if (base === 2) {
    return console.log(`${number} base ${base} = ${parseInt(number,base)} base 10`)
  } else if (base === 10) {
    return console.log(`${number} base ${base} = ${number.toString(base)} base 2`)
  } else {
    console.error("El tipo de base a convertir no es valido")
  }
}

convertBinaryDecimal(100, 2);


// 16) : 
const mountDiscount = (price = undefined, discount = 0) => {
  if (price === undefined) return console.warn("No ingresaste un numero")
  
  if (typeof price !== "number") return console.error(`El valor ${price} ingresado no es un numero`)

  if (price <= 0) return console.warn("El monto no puede ser 0 ni negativo")
  
  if (discount <= 0) return console.warn("El descuento no puede ser 0 ni negativo")

  if (typeof discount !== "number") return console.error(`El valor ${discount} ingresado no es un numero`)
  
  return console.log(`${price} - ${discount} = ${price - (price * discount) / 100}`)
}

mountDiscount(1000, 20)


// 17) : 
const calculateYears = (date = undefined) => {
  if(date === undefined) return console.warn("No ingresaste la fecha")
  
  if (!(date instanceof Date)) return console.error(`El valor ingresado no es una fecha`)
  
  let todayLeftDate = new Date().getTime() - date.getTime(),
      yearsInMS = 1000 * 60 * 60 * 24 * 365
      humansYears = Math.floor(todayLeftDate / yearsInMS);
  
  return (Math.sign(humansYears === -1))
    ? console.log(`Faltan ${Math.abs(humansYears)} años para el ${date.getFullYear()}`)
    : (Math.sign(humansYears) === 1)
      ? console.log(`Han pasado ${humansYears} años desde ${date.getFullYear()}`)
      : console.log(`Estamos en el año actual ${date.getFullYear()}`)
}

calculateYears(new Date(1984, 4, 23));


/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/


// 18) :
const countLetters = (string = "") => {
  if(!string) return console.warn("No ingresaste una cadena")

  if(typeof string !== "string") return console.warn("El texto ingresado no es una cadena")

  let vowels = 0,
    consonants = 0

  string = string.toLocaleLowerCase();  

  for(let letter of string) {
    if(/[aeiouáéíóú]/.test(letter)) {
      vowels++;
    }

    if(/[bcdfghjklmnñpqrstvwxyz]/.test(letter)) {
      consonants++
    }
  }
  
  return console.log({
    string,
    vowels,
    consonants
  })
}

countLetters("Hola mundo");


// 19) : 
const validatorName = (name = "") => {
  if(!name) return console.warn("No ingresaste una cadena")

  if(typeof name !== "string") return console.warn("El texto ingresado no es una cadena")

  let regex = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(name)

  return (regex)
    ? console.log("El nombre es valido")
    : console.log("El nombre no es valido")
}

validatorName("Ivan Pugliese");


// 20) :
const validatorEmail = (email = "") => {
  if(!email) return console.warn("No ingresaste un email")

  if(typeof email !== "string") return console.warn("El texto ingresado no es un email")

  let regex = /[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z{2,15}])/i.test(email)

  return (regex)
    ? console.log("El email es valido")
    : console.log("El email no es valido")
}

validatorEmail("ivanpugliese01@gmail.com");


// Bonus: validar patron
const patronValidator = (string = "", patron = undefined) => {
  if(!string) return console.warn("No ingresaste una cadena")

  if(typeof string !== "string") return console.warn("El texto ingresado no es una cadena")

  if(patron === undefined) return console.warn("No ingresaste un patron")

  if(!(patron instanceof RegExp)) return console.warn("El texto ingresado no es una expresion regular")

  let regex = patron.test(string)

  return (regex)
  ? console.log("La cadena cumple con el patron ingresado")
  : console.log("La cadena no cumple con el patron ingresado")
}

patronValidator("Ivan Pugliese", /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g);


/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/


// 21) :
const squaredNumbers = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

  if(!(arr instanceof Array)) return console.error("El texto ingresado no es un arreglo")

  if(arr.length === 0) return console.warn("El arreglo esta vacio")

  for(let num of arr) {
    if(typeof num !== "number") return console.error("El valor ingresado no es un numero")
  }

  const newArr = arr.map(num => num * num)

  return console.log(`Arreglo original: ${arr}, Arreglo elevado al cuadrado: ${newArr}`)
}

squaredNumbers([1,10,15])


// 22) :
const maxMinNumbers = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

  if(!(arr instanceof Array)) return console.error("El texto ingresado no es un arreglo")

  if(arr.length === 0) return console.warn("El arreglo esta vacio")

  for(let num of arr) {
    if(typeof num !== "number") return console.error("El valor ingresado no es un numero")
  }

  return console.log(`Arreglo original: ${arr}, Valor mayor: ${Math.max(...arr)}, Valor menor: ${Math.min(...arr)}`)
}

maxMinNumbers([90,18,100]);


// 23) :
const evenOddsArrays = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

  if(!(arr instanceof Array)) return console.error("El texto ingresado no es un arreglo")

  if(arr.length === 0) return console.warn("El arreglo esta vacio")

  for(let num of arr) {
    if(typeof num !== "number") return console.error("El valor ingresado no es un numero")
  }

  return console.log({
    even: arr.filter(num => num % 2 === 0),
    odds: arr.filter(num => num % 2 === 1)
  })
}

evenOddsArrays([97,120,6,55]);


/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/


// 24) : 
const arraysAscDes = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

  if(!(arr instanceof Array)) return console.error("El texto ingresado no es un arreglo")

  if(arr.length === 0) return console.warn("El arreglo esta vacio")

  for(let num of arr) {
    if(typeof num !== "number") return console.error("El valor ingresado no es un numero")
  }

  return console.log({
    asc: arr.map(el => el).sort((a,b) => a - b),
    des: arr.map(el => el).sort((a,b) => a + b)
  })
}

arraysAscDes([100,50,29,10,200]);


// 25) :
const removeDuplicates = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

  if(!(arr instanceof Array)) return console.error("El texto ingresado no es un arreglo")

  if(arr.length === 0) return console.warn("El arreglo esta vacio")

  if(arr.length === 1) return console.warn("El arreglo debe tener almenos 2 elementos")

  // return console.log({
  //   original: arr,
  //   noDuplicates: arr.filter((value,index,arr) => arr.indexOf(value) === index)
  // })

  return console.log({
   original: arr,
   noDuplicates: [...new Set(arr)] // la naturaleza del set es crear un conjunto de elementos que no se repitan entre si.
  })

}

removeDuplicates(["x", 10, "x", 2, "10", 10, true, true]);


// 26) :
const average = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

  if(!(arr instanceof Array)) return console.error("El texto ingresado no es un arreglo")

  if(arr.length === 0) return console.warn("El arreglo esta vacio")

  for(let num of arr) {
    if(typeof num !== "number") return console.error("El valor ingresado no es un numero")
  }

  return console.log(
    arr.reduce((acu, num, index,arr) => {
      acu = acu + num
      if(index === arr.length - 1) {
        return console.log(`El promedio de la lista de numeros es igual a ${acu / arr.length}`)
      } else {
        return acu
      }
    })
  )
}

average([6,8,9]);


/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Movie {
  constructor({id,titulo,director,estreno,pais,generos,calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
  }

  static generosAceptados() {
    return console.log(`Los generos aceptados son: ${Movie.listaGeneros.join(", ")}`)
  }

  validarCadena(propiedad,valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

    if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena`)

    return true;
  }

  validarLongitudCadena(propiedad,valor,longitud) {
    if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos ${longitud}`)

    return true;
  }

  validarNumero(propiedad,valor) {
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

    if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, no es un numero`)

    return true;
  }

  validarArreglo(propiedad, valor) {
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

    if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, no es un arreglo`)

    if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`)

    for(let cadena of valor) {
      if(typeof cadena !== "string") return console.error("El valor ingresado no es una cadena")
    }
  }

  validarIMDB(id) {
    if(this.validarCadena("IMDB id", id)) {
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
        return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros minusculas, los 7 restantes numeros`)
      }
    }
  }

  validarTitulo(titulo) {
    if(this.validarCadena("Titulo", titulo)) {
      if(this.validarLongitudCadena("Titulo", titulo, 100));
    }
  }

  validarDirector(director) {
    if(this.validarCadena("Director", director)) {
      if(this.validarLongitudCadena("Director", director, 50));
    }
  }

  validarEstreno(estreno) {
    if(this.validarNumero("Año de estreno", estreno)) {
      if(!(/^([0-9]){4}$/.test(estreno))) {
        return console.error(`IMDB id "${estreno}" no es valido, debe ser un numero de 4 digitos`)
      }
    }
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if(this.validarArreglo("Generos", generos)) {
      for(const genero of generos) {
        if(!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(", ")}"`)
          Pelicula.generosAceptados();
        }
      }
    };
  }

  validarCalificacion(calificacion) {
    if(this.validarNumero("Calificacion", calificacion)) {
      return (calificacion < 0 || calificacion > 10)
        ? console.error("La calificacion debe estar en un rango entre 0 y 10")
        : this.calificacion = calificacion.toFixed(1)
    } 
  }

  fichaTecnica() {
    console.log(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais.join(", ")}"\nGeneros: "${this.generos.join(", ")}"\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`)
  }
}

const myMovies = [
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: "tt5642789",
    titulo: "Transformers",
    director: "Sam Witwiki",
    estreno: 2010,
    pais: ["USA"],
    generos: ["Action", "Drama", "Fiction"],
    calificacion: 8.1
  }
]

myMovies.forEach(movie => new Movie(movie).fichaTecnica());