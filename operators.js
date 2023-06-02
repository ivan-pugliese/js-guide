// Operadores de comparación

/*** 

mayor >
mayor o igual >=
menor <
menor o igual <=

estrictamente igual ===
estrictamente diferente !==

¿Y si usamos el operador > con cadenas de texto?
Aunque no es muy común, podemos usar los operadores > , >=, < y <= para comparar cadenas de texto.

JavaScript comparará las cadenas de texto según el valor de su código Unicode.

Por ejemplo, la letra A tiene un valor de 65 y la letra B tiene un valor de 66. Por lo tanto, la letra A es menor que la letra B. Pero ten cuidado, ya que las letras mayúsculas tienen un valor menor que las letras minúsculas.


debes saber que true es mayor que false.


***/


// Operadores lógicos

/*** 

Operador lógico AND &&
El operador lógico AND se indica con &&. Devuelve true cuando ambos valores que conecta son true.

true && true // → true
true && false // → false
false && false // → false
Un ejemplo en la vida real sería preguntar. ¿Están todas las luces encendidas? Se comprueba cada luz y si todas están encendidas (true), entonces la respuesta es true. Si alguna luz está apagada (false), entonces la respuesta es false.

Operador lógico OR ||
El operador lógico OR se indica con || y devuelve true cuando cualquiera de los valores que conecta es true.

true || true // → true
true || false // → true
false || false // → false
Un ejemplo en la vida real sería preguntar. ¿Hay alguna luz encendida? Se comprueba cada luz y si alguna está encendida (true), entonces la respuesta es true. Sólo si todas las luces están apagadas (false), entonces la respuesta es false.

Operador lógico NOT !
El operador lógico NOT se indica con ! e invierte el valor de un valor booleano. Se pone delante del valor que queremos invertir.

!true // → false
!false // → true
Un ejemplo en la vida real sería pulsar el interruptor de la luz. Si la luz está encendida (true), entonces pulsando el interruptor la apagamos (false). Si la luz está apagada (false), entonces pulsando el interruptor la encendemos (true).


Combinando operadores lógicos, aritméticos y de comparación
Los operadores lógicos y los operadores de comparación se pueden combinar para crear expresiones más complejas. Por ejemplo, podemos preguntar si un número está entre dos valores.

2 < 3 && 3 < 4 // → true
En este caso, la expresión se evalúa como true porque 2 < 3 es true y 3 < 4 es true. Si cualquiera de las dos expresiones fuera false, entonces la expresión sería false.

También puedes usar paréntesis para agrupar operaciones y usar operadores lógicos y aritméticos.

(2 + 2) < 3 && (10 < (8 * 2)) // → false
Igualmente, es importante que sepas que las operaciones aritméticas tienen precedencia sobre las operaciones de comparación.

2 + 2 < 3 && 10 < 8 * 2

// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false


Operador typeof

El operador typeof devuelve una cadena de texto que indica el tipo de un operando. Puede ser usado con cualquier tipo de operando, incluyendo variables y literales.

const MAGIC_NUMBER = 7
typeof MAGIC_NUMBER // "number"

typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof "Hola mundo" // "string"

Existe, sin embargo, un valor especial en JavaScript, null, que es considerado un bug en el lenguaje. El operador typeof devuelve "object" cuando se usa con null:

typeof null // "object"

Lo correcto sería que typeof null devolviera "null", pero es un error histórico que no se puede corregir sin romper el código existente.

Por eso, si quieres comprobar si una variable es null, debes usar la comparación estricta ===:

const foo = null
foo === null // true

El operador typeof es muy útil cuando se usa con operadores de comparación. Por ejemplo, para comprobar si una variable es del tipo que esperamos:

const age = 42
typeof age === "number" // true
Una vez que tenemos expresiones lógicas, podemos empezar a encadenar operadores lógicos para comprobar múltiples condiciones:

const age = 42
typeof age === "number" && age > 18 // true
***/