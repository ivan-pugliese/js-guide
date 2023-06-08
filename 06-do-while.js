// Aunque no es muy famoso ni muy utilizado, es interesante que sepas que existe en JavaScript un bucle que se ejecuta al menos una vez, y luego se repite mientras se cumpla una condición. Este bucle se llama do while y tiene la siguiente sintaxis:

do {
  // código que se ejecuta al menos una vez
} while (condición);

let respuesta 

do {
  respuesta = confirm("Te gusta JavaScript?");
} while (respuesta);

// ¿Por qué hay que poner la variable respuesta fuera? Porque si no, no podría ser usada en la condición del bucle. Ya vas viendo lo que comentámos antes del ámbito de las variables.

// Si el usuario pulsa "Aceptar", la variable respuesta valdrá true y el bucle se repetirá. Si el usuario pulsa "Cancelar", la variable respuesta valdrá false y el bucle se detendrá.