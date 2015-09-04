//Tipos de funciones el javascript

saluda("pepe");

//Declaracion de funciones (function delcarations)
function saluda (name){
	console.log("hola "+ name);
}

//Function expression
//Crear una variable y asignarle una funcion anonima
var despide = function (name){
	console.log("Adios "+ name);		
}
despide ("Alejandro");