//cargfando la libreria
var fs = require ('fs');


//Lectura no bloqueante o asincrona
fs.readFile("\documento.txt",'utf-8', function (err,data){
	if(err){
		console.log("Error del archivo....");
		return;
	}	
	console.log(data);
});

//otra operacion
console.log('\nTermino el programa...........');