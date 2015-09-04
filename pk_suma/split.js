var palabra = process.argv [2];
var numeros = palabra.split(","); // cadena de numeros
var sumando = 0;

for (var i = 0 ; i < numeros.length ; i ++ ) 
{
	if (numeros[i] != ",")
	{
		var num = parseInt (numeros[i]);
		sumando = (sumando+num); 
	}
}
console.log (sumando);

	