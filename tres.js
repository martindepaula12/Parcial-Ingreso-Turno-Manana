/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var titular;
	var lugar;
	var temporada;
	var cantidadPasajeros;
	var respuesta = "si";
	var contadorBariloche;
	var contadorSalta;
	var contadorCataratas;
	var lugarMasElegido;
	var titularConMasPasajeros;
	var maximoPasajeros;
	var acumuladorPersonasQueViajanEnInvierno;
	var contadorViajesEnInvierno;
	var promedioPersonasQueViajanEnInvierno;

	acumuladorPersonasQueViajanEnInvierno = 0;
	contadorViajesEnInvierno = 0;
	maximoPasajeros = 0;
	contadorBariloche = 0;
	contadorCataratas = 0;
	contadorSalta = 0;

	while(respuesta == "si"){

		do{
			titular = prompt("ingrese nombre del titular");
		}while(!(isNaN(titular)));

		do
    	{
      		lugar = prompt("ingrese lugar, bariloche, cataratas o salta");
		}while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");
		
		do
    	{
      		temporada = prompt("ingrese temporada: otoño, invierno, verano o primavera");
		}while(temporada != "otoño" && temporada != "invierno" 
		&& temporada != "verano" && temporada != "primavera");

		do{
			cantidadPasajeros = prompt("ingrese cantidad de personas");
			cantidadPasajeros = parseInt(cantidadPasajeros);
		}while(cantidadPasajeros < 0 || isNaN(cantidadPasajeros));

		// PUNTO A

		if(lugar == "bariloche"){
			contadorBariloche++;
			
		}else if(lugar == "cataratas"){
			contadorCataratas++;
			
		}else{
			contadorSalta++;
			
		}

		// PUNTO B

		if(cantidadPasajeros > maximoPasajeros){
			titularConMasPasajeros = titular;
			maximoPasajeros = cantidadPasajeros;
		}

		// PUNTO C
		if(temporada == "invierno"){
			acumuladorPersonasQueViajanEnInvierno = acumuladorPersonasQueViajanEnInvierno + cantidadPasajeros;
			contadorViajesEnInvierno++;
		}





		respuesta = prompt("desea continua si/no");

	}

	// PUNTO A
	if(contadorBariloche > contadorSalta && contadorBariloche > contadorCataratas){
		lugarMasElegido = "bariloche";
	}else if(contadorCataratas > contadorSalta){
		lugarMasElegido = "cataratas";
	}else{
		lugarMasElegido = "salta";
	}

	//PUNTO C

	if(contadorViajesEnInvierno != 0){
		promedioPersonasQueViajanEnInvierno = acumuladorPersonasQueViajanEnInvierno / contadorViajesEnInvierno;
		promedioPersonasQueViajanEnInvierno.toFixed(2);
		console.log("el promedio de las personas que viajan en invierno es: " +
		promedioPersonasQueViajanEnInvierno + " personas por viaje");
	}

	console.log("el titular que lleva mas pasajeros es: " + titularConMasPasajeros);

	console.log("lugar mas elegido " + lugarMasElegido);


}
