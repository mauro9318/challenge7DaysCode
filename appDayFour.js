//Adivina el número

//El valor tomara un dato aleatorio entre 1 y 9 
let numeroMaximo = 10;
let numeroMinimo = 1;

numeroSecreto = 0;
intentos = 3;

//Funciones empleadas

function obtenerNumeroSecreto (){
    return Math.floor(Math.random()*(numeroMaximo - numeroMinimo + 1)+ numeroMinimo)//la variable numeroMinimo añadida al final de la sentencia sirve para 
                                                                                    //poder considerar al numero 10 entre los valores que se puede tomar de manera aleatoria
}

function comparacionDeValores(secretNumber, givenNumber){   
    if (secretNumber == givenNumber){
        alert(`Felicidades Adivinaste el numero secreto ${numeroSecreto}`);
        return true;
        
        
    }
    else{
        alert(`No es el dato correcto. Te quedan ${intentos} ${(intentos==1) ? 'intento':'intentos'}`);
    }

}



//Se obtiene el valor secreto 
numeroSecreto = obtenerNumeroSecreto();
console.log(numeroSecreto);

while(intentos >= 1){
    //Se pide al usuario que ingrese un valor

    let numeroIngresado = parseInt(prompt("Ingresa el número secreto: "));
    intentos--;

    let respuestaCorrecta = comparacionDeValores(numeroSecreto, numeroIngresado);
    if (respuestaCorrecta){
        break;
    }

}

alert("Termino la ejecución del programa");
