//function saludar(){
//		var mensaje = "Hola Cesar...";
//		console.log(mensaje);
//}
//	console.log(mensaje);	Error

//haciendo un clousure
function retornafuncionSaludo(){
	var mensaje = "Hola Erik..";
	return function(){
		console.log(mensaje);
	}
}
var saludar = retornafuncionSaludo();
saludar();