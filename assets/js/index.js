// acceder al elemento boton
let boton = document.querySelector("button");

// acceder al parrafo 
let parrafo = document.querySelector("p");

// el usuario le da click al boton
boton.addEventListener('click', function () {

   // tener los 3 valores de los select 
let primerSelect = document.querySelector("#primer-select").value;
let segundoSelect = document.querySelector("#segundo-select").value;
let tercerSelect = document.querySelector("#tercer-select").value;
let password = primerSelect + segundoSelect + tercerSelect;


// validar si se cumple la condicion
if (password == "911") (
    parrafo.innerHTML = "password 1 correcto"
 ); else if (password == "714") (
    parrafo.innerHTML = "password 2 correcto"
 ); else (
    parrafo.innerHTML = "password incorrecto"
 )

})
