// Variables

/***
 A la hora de crear programas, es vital poder almacenar la información para poder utilizarla en un futuro. En JavaScript, usamos variables para conseguirlo.

 Para crear una variable podemos usar la palabra reservada let y le damos un nombre a la variable. Por ejemplo:
***/

let numero  // variable llamada numero pero sin asignarle ningun valor.

numero = 1;

numero + 1; // 1 + 1

numero = 5 // le podemos reasignar un valor.

numero = numero + 1 // 5 + 1

// El valor de una variable puede ser cualquier tipo de dato:

let welcomeText = "Hola!";

let isCool = true;

// Constantes
/***
 Las constantes son variables que no pueden ser reasignadas y siempre deben der inicializadas con algun valor. Para crear una constante, usamos la palabra reservada const:
***/

const PI = 3.1415;

PI = 3 // -> TypeError: Assignment to constant variable. 

// const RADIUS = ❌ SyntaxError: Missing initializer in const declaration.



// Variables con var
/***
 En JavaScript, también podemos crear variables usando la palabra reservada var. Es la forma más antigua y es normal que encuentres muchos tutoriales que lo usen. Sin embargo, a día de hoy, no es recomendable usar var ya que tiene comportamientos extraños que pueden causar errores en tu código.
***/


// Nombre de las variables
/***
 En JavaScript, los nombres de las variables pueden contener letras, números y el guión bajo (_). Además, el primer carácter del nombre de la variable no puede ser un número.

 Es importante tener en cuenta que los nombres de las variables son sensibles a las mayúsculas y minúsculas, lo que significa que miVariable y mivariable son dos variables diferentes en JavaScript.

 También es importante que los nombres de las variables sean descriptivos. Por ejemplo, si queremos almacenar el nombre de un usuario, podemos llamar a la variable userName. De esta forma, cuando leamos el código, sabremos que la variable contiene el nombre de un usuario.

 Existen diferentes nomenclaturas para nombrar las variables: camelCase, snake_case y SCREAMING_CASE.

 camelCase es la forma más común de nombrar las variables en JavaScript. Consiste en escribir la primera palabra en minúsculas y las siguientes palabras con su primera letra en mayúsculas.

 let camelCase = 1
 let camelCaseIsCool = 2
 let userName = 'midudev'

 snake_case es una forma de nombrar que consiste en escribir todas las palabras en minúsculas y separarlas con guiones bajos. Por ejemplo:

 let snake_case = 1
 let snake_case_is_cool = 2
 let user_name = 'midudev'

 Lo más habitual, y es buena idea, es usarlo en los nombres de archivos.

 SCREAMING_CASE es una forma de nombrar que consiste en escribir todas las palabras en mayúsculas y separarlas con guiones bajos. Por ejemplo:

 const SCREAMING_CASE = 1
 const SCREAMING_CASE_IS_COOL = 2
 const USER_NAME = 'midudev'
 
 Para las constantes, con valores que no van a cambiar, es muy común usar SCREAMING_CASE. Así se puede distinguir fácilmente de las variables que sí cambian de valor. Por eso, no debes usarla para nombrar variables con let.
***/