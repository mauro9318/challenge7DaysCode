/*Declaración e inicialización de las variables */
let numeroUn = 1;
let stringUn = 1;
let numeroTreinta = 30;
let stringTreinta = "30";
let numeroDiez = 10;
let stringDiez = "10";

let numeroUnCopia = 1;

//Comparación de los valores de dos variables
if(numeroUn == stringUn){
    //Si el resultado de la comparación es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
}
else{
    //Si el resultado de la comparación no es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}

//Comparación de los valores de dos variables
if(numeroTreinta == stringTreinta){
    //Si el resultado de la comparación es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor, pero tipos diferentes')
}
else{
    //Si el resultado de la comparación no es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo valor')
}
//Comparación de los valores de dos variables
if(numeroDiez == stringDiez){
    //Si el resultado de la comparación es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
}
else{
    //Si el resultado de la comparación no es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}


//Considerando otra situación en la que tendremos dos valores numéricos distintos sin considerar aún el tipo de dato

if(numeroDiez == stringTreinta){
    //Si el resultado de la comparación es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
}
else{
    //Si el resultado de la comparación no es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}

/*Finalmente si existe la situación en la que la comparación debe considerar el valor almacenado en la variable
y al mismo tiempo el tipo de dato, se debe utilizar el siguiente operador "===". El operador es el signo igual 
escrito tres veces seguidas*/

//Comparacion de dos variables con el mismo valor pero con distinto tipo de dato
if(numeroDiez === stringDiez){
    //Si el resultado de la comparación es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
}
else{
    //Si el resultado de la comparación no es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}

//Comparación de dos variables con el mismo valor y con el mismo tipo de dato
if(numeroUn === numeroUnCopia){
    //Si el resultado de la comparación es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
}
else{
    //Si el resultado de la comparación no es verdadera entonces en la consola saldrá el siguiente mensaje
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}