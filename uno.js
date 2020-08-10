/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contador;
	var contadorMujeres;
	var contadorHombres;
	var acumuladorEdad;
	var promedioEdad;
	var temperaturaMaxima;
	var bandera;
	var nombreMujerConMasTemperatura;


	bandera = 0;
	acumuladorEdad = 0;
	contadorHombres = 0;
	contadorMujeres = 0;
	contador = 0;

	while(contador < 5){

		do{

			nombre = prompt("ingrese nombre");
	
		}while(!(isNaN(nombre)));

		do{

			temperatura = prompt("ingrese temperatura");
			temperatura = parseInt(temperatura);
		}while(temperatura <= 0 || isNaN(temperatura));

		do{

        sexo = prompt("ingrese sexo");
		}while(sexo != "f" && sexo != "m");

		do{

        edad = prompt("ingrese edad");
        edad = parseInt(edad);
		}while(edad < 0 || isNaN(edad));

		// PUNTO A

		if(sexo == "m"){
			contadorHombres++;
			
		}
		else{
			contadorMujeres++;
			
		}

		//PUNTO B

		acumuladorEdad = acumuladorEdad + edad;
		

		// PUNTO C

		if(bandera == 0 && sexo == "f"){
			bandera++;
			temperaturaMaxima = temperatura;
			nombreMujerConMasTemperatura = nombre;
		}
		else if(temperatura > temperaturaMaxima && sexo == "f"){
			temperaturaMaxima = temperatura;
			nombreMujerConMasTemperatura = nombre;
		}

	
		contador++;
	}

	console.log("la cantidad de hombres es: " + contadorHombres);
	console.log("la cantidad de mujeres es: " + contadorMujeres);

	if(contadorMujeres != 0){ 
	console.log("nombre mujer con mas temperatura " + nombreMujerConMasTemperatura);
	}

	if(contador != 0){
		promedioEdad = acumuladorEdad / contador;
		promedioEdad = promedioEdad.toFixed(2);
		console.log("el promedio de edad es: " + promedioEdad);
		
	}
}
