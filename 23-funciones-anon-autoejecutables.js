// Funcion anonima autoejecutable
(function () {
  console.log("Mi primer IIFE");

})();

(function (d,w,c) {
  console.log("Mi segunda IIFE");
  console.log(d)

})(document, window, console);

 //Formas de escribir las funciones Anónimas Autoejecutables
       //Clásica
       (function () {
         console.log('versión Clásica')
       })();

       //La Crockford (JavaScript The Good Parts)
       ((function () {
         console.log('versión Crockford')
       })());

       //Unaria
       +function () {
         console.log('versión Unaria')
       }();

       //Facebook
       !function () {
         console.log('versión Facebook')
       }(); 