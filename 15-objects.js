// Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.

// Para declarar un objeto usamos las llaves {} y dentro las propiedades y métodos separados por comas ,. Cada propiedad o método se define con una clave y un valor separados por dos puntos :

const persona = {
  name: "Ivan",
  age: 24,
  isWorking: true
}

// Las propiedades y métodos de un objeto pueden ser de cualquier tipo de JavaScript, incluso otros objetos o arrays:

const persona2 = {
  name: "Ivan",
  age: 24,
  isWorking: true,
  family: ["Mariela, Ailen, Tiago"],
  address: {
    street: "Alberdi",
    number: 122,
    city: "Buenos Aires"
  },
  walk: function () { // <- método
    console.log('Estoy caminando')
  }
}

persona2.name // Ivan

persona2.family[0] // Mariela

persona2.address.street // Alberdi

persona2.walk() // Estoy caminando

// Si intentamos acceder a una propiedad o método que no existe, nos devolverá undefined.

// Puedes usar variables para acceder a las propiedades y métodos de un objeto. Para ello, tienes que usar la notificación por corchetes [] :

const keyName = "name";
persona2[keyName];

//También necesitas usar los corchetes si la clave de la propiedad o método tiene espacios o caracteres especiales.

const persona3 = { 'full name': 'Dani' }

console.log(persona['full name']) // -> Dani

// ❌ no puedes hacer esto
// persona.full name
// Siempre que puedas, evita usar espacios o caracteres especiales en las claves de las propiedades y métodos de un objeto. Aunque se puede, es más complicado de leer y de escribir.


// Igual que podemos acceder a las propiedades de un objeto, podemos añadir nuevas propiedades o modificar las existentes:

persona3.age = 30;

console.log(persona3) // -> { name: 'Dani', age: 30 }

// Para eliminar una propiedad de un objeto usamos la palabra reservada delete.
delete persona3.age


// Atajo al crear un objeto:
// Imagina que quieres crear un objeto y que algunas de sus propiedades usen como valor algunas variables que ya tenemos.

const name = 'Spidey'
const universe = 42

const spiderman = {
  name: name,
  universe: universe,
  powers: ['web', 'invisibility', 'spider-sense']
}

// En este caso, podemos usar un atajo para crear el objeto. Si la propiedad y la variable tienen el mismo nombre, podemos omitir el valor y dejar solo el nombre de la propiedad.

const spiderman2 = {
  name, // <- automáticamente asigna el valor de la variable name
  universe, // <- automáticamente asigna el valor de la variable universe
  powers: ['web', 'invisibility', 'spider-sense']
}


// Destructuración: el atajo al recuperar propiedades

// A veces queremos recuperar el valor de la propiedad y guardarlo en una variable, para usarlo más adelante. Haríamos algo así:

const universe1 = spiderman.universe
console.log(universe) // 42

const powers1 = spiderman['powers'][1]
console.log(powers) // 'invisibility'

// A la hora de acceder a las propiedades existe un atajo llamado desestructuración (o destructuring en inglés) muy interesante que nos permite recuperar el valor de una propiedad y guardarlo en una variable de una.
// Lo importante es que tengamos en cuenta que la variable que se creará tendrá el mismo nombre que la propiedad que estamos recuperando:

const spiderman3 = {
  name2: "Spidey",
  universe2: 42, 
  powers: ['web', 'invisibility', 'spider-sense']
}

const { universe2, name2, powers } = spiderman3
console.log(universe2) // 42
console.log(name2) // 'Spidey'
console.log(powers) // ['web', 'invisibility', 'spider-sense']


// Renombrar variables y valores por defecto:
const { universe: universeNumber } = spiderman
console.log(universeNumber) // 42

// Si la propiedad no existe, podemos asignarle un valor por defecto:
const { name3, isAvenger = false } = spiderman
console.log(name3) // 'Spidey'
console.log(isAvenger) // false

/**
 El objeto que hemos creado antes no tenía la propiedad isAvenger, pero al recuperarla le hemos asignado un valor por defecto de false. Si no le hubiéramos asignado un valor por defecto, la variable isAvenger sería undefined.

 Así que si recuperamos una propiedad que no existe, la variable que se creará tendrá el valor por defecto que le hayamos asignado. Y lo hacemos usando el operador =.

 Esto es muy útil, por ejemplo, para recuperar opciones o configuración del usuario que quizás no ha definido todos los valores pero tenemos claro qué comportamiento queremos que tenga nuestra aplicación por defecto.
 */


// Objetos anidados y atajo:

const spiderman4 = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense'],
  partner: {
    name4: 'Mary Jane',
    universe: 42,
    powers: ['red hair', 'blue eyes']
  }
}

// Si queremos recuperar la propiedad name del objeto partner y guardarla en una variable, podemos hacerlo así:
// const { partner } = spiderman
// const { name4 } = partner
// console.log(name4) // 'Mary Jane'

// Pero también podemos hacerlo en una sola línea:
const { partner: { name4 } } = spiderman



// Iterando con for...in : nos permite crear un bucle que itera sobre todas las propiedades enumerables de un objeto, en un orden arbitrario:
for (const property in spiderman4) {
  console.log(`${property}: ${spiderman[property]}`)
}
// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense

// No confundas el bucle for...in con el de for...of que vimos en la sección de arrays. El primero itera sobre las propiedades enumerables de un objeto, mientras que el segundo itera sobre los elementos de un objeto iterable (como los elementos de un array, por ejemplo).


// Transformar un objeto en un array :
// A veces queremos transformar un objeto en un array para poder iterar sobre él. Para esto podemos utilizar el método Object.keys(), Object.values() o Object.entries().
// Cada uno de estos métodos retorna un array, pero cada uno de ellos contiene elementos diferentes. Vamos a verlos uno por uno.

// Iterar con Object.keys() : retorna un array con las propiedades enumerables de un objeto.
const properties = Object.keys(spiderman4);
console.log(properties.length) // 4
properties.forEach(property => {
  console.log(property)
})

// -> name
// -> universe
// -> powers

// ¿Qué son las propiedades enumerables? Por defecto, cuando añadimos propiedades a un objeto, estas son enumerables, es decir, que se pueden iterar sobre ellas. Sin embargo, como veremos más adelante, podemos crear propiedades que, por lo que sea, nos interesa que no sean enumerables. A veces estas son más de uso interno, como métodos auxiliares que el propio lenguaje JavaScript tiene, y no queremos que aparezcan cuando iteramos sobre un objeto.


// Iterando con Object.values() : retorna un array con los valores correspondientes a las propiedades enumerables de un objeto:

const values = Object.values(spiderman4);
values.forEach(value => {
  console.log(value)
})
// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]


// Iterando con Object.entries(): etorna un array de arrays, donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto:

const entries = Object.entries(spiderman4)
entries.forEach(entry => {
  console.log(entry)
})
// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]


entries.forEach(entry => {
  const property = entry[0]
  const value = entry[1]
  
  console.log(`${property}:  ${value}`)
})


// Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
// Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.

function getKeysOfBooleanValues(obj) {
      return Object.keys(obj).filter(function(key) {
      return typeof obj[key] === 'boolean';
  });
}


// Operador de encadenamiento opcional : Si intentamos acceder a una propiedad de un objeto que no existe... ¡se romperá nuestra aplicación!
// Por suerte, existen formas de evitar que esto ocurra. En esta clase veremos algunas de ellas y presentaremos el operador de Encadenamiento Opcional, también llamado Optional Chaining.
// Este operador es especialmente útil cuando trabajamos con objetos que podrían tener estructuras complejas o variables que podrían no estar definidas en determinados momentos de la ejecución de nuestro código.


// El error fatal de intentar leer una propiedad de undefined: 
const gamesystem = {
  name: 'PS5',
  price: 550,
  specs: {
    cpu: 'AMD Ryzen Zen 2',
    gpu: 'AMD Radeon RDNA 2',
  }
}

console.log(gamesystem.name) // -> PS5

console.log(gamesystem.specifications) // -> undefined

console.log(gamesystem.specifications.ram) 
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined
// El error parece inocente pero fíjate. En lugar de usar la propiedad specs hemos usado specifications. Pero esto es suficiente para que JavaScript nos diga que no puede leer la propiedad ram de undefined.

// Evitando el error con if:
if (typeof gamesystem.specifications === 'object') {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}

// ¡Cuidado con esto! Al usar el operador typeof con un valor null nos dice que es object. Esto es un error histórico del lenguaje. Así que si la propiedad specifications es null, el if se ejecutará y obtendremos un error al intentar acceder a ram. Para evitar esto, podemos añadir una comprobación extra: gamesystem.specifications !== null.


// El operador In para comprobar si una propiedad existe:
console.log('name' in gamesystem) // -> true
console.log('specifications' in gamesystem) // -> false
console.log('specs' in gamesystem) // -> true

if ('specifications' in gamesystem) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}

// El operador in puede ser interesante para comprobar si una propiedad existe en un objeto, pero no nos sirve para comprobar si el valor de esa propiedad es undefined y habría que hacer comprobaciones extra para evitar el error.
if (
  'specifications' in gamesystem &&
  gamesystem.specifications !== undefined &&
  gamesystem.specifications !== null) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}

// El operador de Encadenamiento Opcional, ?.
// El Operador de Encadenamiento Opcional ?. permite leer el valor de una propiedad ubicada profundamente dentro de una cadena de objetos conectados, sin tener que validar expresamente que cada referencia en la cadena es válida: 
console.log(gamesystem.specifications?.cpu)
// -> undefined
console.log(gamesystem.specs?.cpu)
// -> AMD Ryzen Zen 2

// Si la propiedad specifications no existe, el operador ?. devuelve undefined y no se produce ningún error. Si la propiedad existe, el operador ?. devuelve el valor de la propiedad.

// Uno de los principales beneficios del operador de encadenamiento opcional es que simplifica nuestro código y lo hace más legible. En lugar de tener que hacer varias comprobaciones para asegurarnos de que un objeto y sus propiedades existen, podemos intentar acceder directamente a la propiedad que nos interesa, y JavaScript no se quejará si no existe.

// Este operador es especialmente útil en aplicaciones con datos dinámicos, donde no siempre podemos garantizar la estructura exacta de nuestros objetos.
const user = {
  name: 'Peter',
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      push: false,
      marketing: undefined
    }
  }
}

// la forma clásica de acceder a una propiedad anidada de forma segura
// let email = undefined
if (user && user.settings &&
  user.settings.notifications &&
  user.settings.notifications.email) {
  email = user.settings.notifications.email
}

console.log(email) // -> true

// con Optional Chaining Operator
const email = user?.settings?.notifications?.email
console.log(email) // -> true



/**
 Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:

Un objeto con la información del fondo marino
Una cadena de texto con el nombre del lugar que queremos explorar
Una cadena de texto con el nombre del objeto que queremos encontrar
Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y buscar el objeto treasure. Así que intentaríamos acceder a ocean.deep.treasure.


Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.


Vamos a necesitar asegurarnos que el robot no se rompa, que cuestas mucho dinero, en el caso que no pueda encontrar el lugar o el objeto que le hemos pedido. Así que vamos a usar el operador de encadenamiento opcional para evitar errores.
 */

function searchInOcean(ocean, section, item) {
  if (ocean?.[section]?.[item] !== undefined) {
    return true;  // El objeto se encontró
  } else {
    return false; // El objeto no se encontró
  }
}  