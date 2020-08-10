/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var marca;
  var precio;
  var peso;
  var tipo;
  var respuesta = "si";
  var acumuladorPeso;
  var marcaMasCaroLiquidos;
  var marcaMasLivianoSolidos;
  var pesoMinimo;
  var precioMasCaro;
  var bandera;
  var contadorLiquidos;
  var contadorSolidos;
  
  contadorLiquidos = 0;
  contadorSolidos = 0;
  precioMasCaro = 0;
  bandera = 0;
  acumuladorPeso = 0;

  while(respuesta == "si"){

    do{
      marca = prompt("ingrese marca");
    }while(!(isNaN(marca)));

    do{
      precio = prompt("ingrese precio");
      precio = parseFloat(precio);
    }while(precio <= 0.0 || isNaN(precio));

    peso = prompt("ingrese peso");
    peso = parseFloat(peso);

    while(peso <= 0.0 || isNaN(peso)){
      peso = prompt("error, ingrese peso correcto");
      peso = parseFloat(peso);
    }

    do{
      tipo = prompt("ingrese tipo: solido o liquido");
    }while(tipo != "solido" && tipo != "liquido");

    //PUNTO A

    acumuladorPeso = acumuladorPeso + peso;
    console.log("peso total compra " + acumuladorPeso);


    // PUNTO B

    if(precio > precioMasCaro && tipo == "liquido"){
      marcaMasCaroLiquidos = marca;
      console.log("la marca mas caro liquidos es: " + marcaMasCaroLiquidos);
      precioMasCaro = precio;
      console.log("el precio mas caro liquidos es: " + precioMasCaro);

    }

    // PUNTO C

    if(bandera == 0 && tipo == "solido"){
      bandera++;
      pesoMinimo = peso;
      console.log("peso minimo " + pesoMinimo);
      marcaMasLivianoSolidos = marca;
      console.log("la marca del mas liviano de los solidos es: " + marcaMasLivianoSolidos); 

    }else if(peso < pesoMinimo && tipo == "solido"){
      pesoMinimo = peso;
      console.log("peso minimo " + pesoMinimo);
      marcaMasLivianoSolidos = marca;
      console.log("la marca del mas liviano de los solidos es: " + marcaMasLivianoSolidos); 

    }

    // contadores liquido y solido

    if(tipo == "solido"){
      contadorSolidos++;
    }else{
      contadorLiquidos++;
    }

    respuesta = prompt("desea continuar si/no");
  }

  console.log("peso total compra " + acumuladorPeso);

  if(contadorLiquidos != 0){ 
  console.log("la marca mas caro liquidos es: " + marcaMasCaroLiquidos);
  }

  if(contadorSolidos != 0){
  console.log("la marca del mas liviano de los solidos es: " + marcaMasLivianoSolidos); 
  }

}
