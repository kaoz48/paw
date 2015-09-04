//blocking Mode programa que lee un archivo de forma bloqueandte
//Carga un modulo nativo de node que permite trabajar con archivos

var fs = require ('fs'); //file stream
//Leyendo el archivo
var contenido = 
			fs.readFileSync('\documento.txt','utf-8');
			console.log(contenido);
			//haciendo otra operacion
		console.log('\El programa termino...')