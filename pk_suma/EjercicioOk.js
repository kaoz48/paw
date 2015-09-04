var palabra = process.argv [2];
var numeros = palabra.split(","); // cadena de numeros
var sumando = 0;

for (var i = 0 ; i < numeros.length ; i ++ ) 
{
		sumando += parseInt(numeros [i]); 

}
console.log (sumando);