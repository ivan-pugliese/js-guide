// POO (Programacion Orientada a Objetos)

/*
 Clases - Modelo a seguir.
 Objetos - Es una instancia de una clase
 Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
 Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/


const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonidos porque estoy vivo")
  }
}

console.log(animal);

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos porque estoy vivo")
  }
}

console.log(animal2);


// Funcion constructora

 function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;

  //Métodos
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  }

  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }
} 

const snoopy = new Animal("Snoopy", "Macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");


//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
} 

//Métodos agregados al prototipo de la función constructora
 Animal.prototype.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
 }

 Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
} 
// Mejora del renidimiento de la explicacion, mas espacio en memoria, esto igualmente es como interpreta js, ahora usamos clases. 


// Herencia prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu !!!!");
} 

const snoopy2 = new Perro("Snoopy", "Macho", "Mediano"),
    lolaBunny2 = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar(); 


// Clases y Herencia
 class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Métodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
console.log(scooby);

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //super() es un metodo que manda a llamar al constructor de la clase padre.
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guau Guau");
  }

  // un metodo estatico se puede ejecutar sin la necesidad de instanciar la clase, sin la necesidad de haber creado un objeto
  static queEres() {
    console.log("Los perros somos animales mamiferos de la familia caninos.")
  }

  // Setters(Establecer el valor) y Getters(Obtener el valor) de un atributo que exista en nuestra clase, pero que a la hora de crear la instancia no lo definimos:
  get getRaza() { // metodo obtenedor
    return this.raza
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

console.log(scooby.getRaza) // null
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza) // gran danes