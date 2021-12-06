'use strict'

// Condicional IF
// Si a es igual a b entonces haz algo

var edad = 18;
var nombre= "David Suarez";

/*=======================
Operadores relacionales
Mayor: >
Menor: <
Menor o igual: <=
Mayor o igual: >
Igual: ==
Distinto: != 
=========================*/

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre+" tiene "+edad+" Años, es mayor de edad");

    if(edad <= 33){
    console.log("Todavia eres milenial");
    }else if(edad >= 70){
    console.log("Eres anciano");
    }else{
    console.log("Ya no eres milenial");
    }

}else{
    // Es menor de edad
    console.log(nombre+" tiene "+edad+" Años, es menor de edad");
}

/*
// Operadores lógicos
AND(Y): &&
OR(O): ||
Negación: !
*/

// Negación
var year = 2018;

if(year!=2016){
    console.log("El año no es 2016, realmente es :"+year);
}

//AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

if(year == 2008 || year == 2018){
   console.log("El año acaba en 8"); 
}

