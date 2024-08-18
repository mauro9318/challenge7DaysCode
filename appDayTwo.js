/*Sección del código donde se captura y almacenan los datos introducidos en variables*/

nombreIntroducido = prompt("¿Cual es tu nombre?");
aniosIntroducido = prompt("¿Cuántos años tienes?");
lenguajeIntroducido = prompt("¿Que lenguaje de programación estas estudiando?")

/*Sección del código donde se muestra la información proporcionada por el usuario*/

/*Se muestra información por consola */
//console.log(`Hola ${nombreIntroducido}, tienes ${aniosIntroducido} y ya estas aprendiendo ${lenguajeIntroducido}!`)


/*Condición que permite verificar si todos las preguntas fueron respondidas. Si alguna casilla se deja en blanco,
el programa mostrará un mensaje de información*/
if(nombreIntroducido != "" && aniosIntroducido !="" && lenguajeIntroducido !=""){
    /*Se muestra información en pantalla del navegador*/
    alert(`Hola ${nombreIntroducido}, tienes ${aniosIntroducido} y ya estas aprendiendo ${lenguajeIntroducido}!`);


    /*Sección del codigo donde se pide al usuario que escoja una opción */
    numeroSeleccion = parseInt(prompt(`¿Te gusta estudiar ${lenguajeIntroducido}?. Responde con el número 1 para SI o con el número 2 para NO`));


    //console.log(typeof(numeroSeleccion));


    /*Sección del código donde dependiendo de la opción introducida el programa  mostrará un resultado */

    /*Se hace uso de una estructura de control condicional IF-ELSE*/
    if (numeroSeleccion == 1){
        //console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito");
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito");
    }
    else if(numeroSeleccion == 2){
        //console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    }

    else{
        console.log("Introdujiste una opción NO VALIDA");
        alert("Introdujiste una opción NO VALIDA");
    }
}

else{
    alert("No introdujo los datos correctamente. Asegúrese de llenar todos los campos");
}

