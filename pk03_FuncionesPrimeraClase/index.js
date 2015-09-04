//funciones como primera clase
var funcionSaludar = function(nombre){
	console.log("Hola %s" ,nombre);
};

var funcionDespide = function(nombre){
	console.log("Adios %s" ,nombre);	
};

//Manejadores - Handlers (manejador) - Delegados
var mensaje = function(nombre, handler){
		handler(nombre);
};

//Usando la funcion mensaje
mensaje("Cesar",funcionSaludar);