export const PI = Math.PI;

export let usuario = "Ivan";
let password = "qwerty";

function saludar() { // default : significa que cuando se importe o se mande a llamar, la funcion saludar se exporta automaticamente
  console.log("Hola Modulos ES6");
}

export default password; // asi cuando es una variable o funcion expresada

// las clases tambien permiten la exportacion por defecto