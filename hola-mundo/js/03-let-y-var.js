'use strict'

// Pruebas con let y var

// Prueba con bar
var numero = 40;
console.log(numero); //40

if(true){
     var numero = 50;
     console.log(numero); // valor 50
}

console.log(numero); // 50

// prueba con Let

var texto = "Curso JS victorroblesweb.es";
console.log(texto); // valor JS

if(true){
   let texto = "Curso  laravel 5 victroroblesweb.es";
   console.log(texto); // valor laravel 5
}

console.log(texto); // valor JS