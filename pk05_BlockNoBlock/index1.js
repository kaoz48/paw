//NON bloking Model
//-------------------

//cargfando la libreria
var fs = require ('fs');

//Manejador	(HANDLER)
var manejador = function (err,data){
	if(err){
		console.log("Error del archivo....");
		return;
	}	
	console.log(data);
};

//Lectura no bloqueante o asincrona
fs.readFile("\documento.txt",'utf-8',manejador);

//otra operacion
console.log('\nTermino el programa...........');