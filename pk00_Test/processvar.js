//La variable processvar 
//me perimte acceder 
//a los argumentos que son pasados
//a un programa de Node
//Desde la linea de comados
//EJEMPLO
 


console.log("Los argumentos pasados" +
	"desde la linea de comandos es "+
	process.argv);
	
console.log("El tipo de dato de " + "process.argv es "+ typeof(process.argv));

console.log("El primer elemento del vector de argumento es " + process.argv[0]);

console.log("El segundo elemento del vector de argumento es " + process.argv[1]);