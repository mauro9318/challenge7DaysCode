let opcion = 1;
let continuar = 1;
while (continuar == 1){

    let areaEleccion = prompt("¿Que camino seguiras FRONTEND o BACKEND?. Escribe la respuesta como el texto mostrado en mayúsculas");
    let frontendFramework = null;
    let opciontecnologias = [];


    if(areaEleccion != ""){
        if(areaEleccion == "frontend"){
            //el area es frontend
            alert(`Tu área de eleccion es ${areaEleccion}`);
            frontendFramework = prompt("¿Qué tecnología deseas aprender, REACT o VUE?");
            let areaFull = prompt(`¿Deseas seguir especializándote en ${areaEleccion} o te convertirás en desarrollador FULLSTACK?`);
            let numeroTecnologias = prompt("¿En cuántas tegnologías te gustaría especializarte?");
            for(i = 1; i<= numeroTecnologias; i++){
                opciontecnologias[i] = prompt(`Introduce tu opcion ${i}: `);
            }
            alert(`Las tecnologías introducidas fueron : ${opciontecnologias}`);

            alert (`Buena tu eleccion de ${areaEleccion} y querer aprender ${frontendFramework}. Aprenderas mucho`);
            let continuar = parseInt(prompt ("Deseas volver a introducir datos. 1 para SI, 2 para NO"));
            if (continuar == 2){
                break;
            }
        }
        else if(areaEleccion == "backend"){
            //el area es backend
            alert(`Tu área de eleccion es ${areaEleccion}`);
            backendFramework = prompt("¿Qué tecnología deseas aprender, C# o JAVA?");
            let areaFull = prompt(`¿Deseas seguir especializándote en ${areaEleccion} o te convertirás en desarrollador FULLSTACK?`);
            let numeroTecnologias = prompt("¿En cuántas tegnologías te gustaría especializarte?");
            for(i = 1; i<= numeroTecnologias; i++){
                opciontecnologias[i] = prompt(`Introduce tu opcion ${i}: `);
            }
            alert(`Las tecnologías introducidas fueron : ${opciontecnologias}`);
            alert (`Buena tu eleccion de ${areaEleccion} y querer aprender ${backendFramework}. Aprenderas mucho`);
            let continuar = parseInt(prompt("Deseas volver a introducir datos. 1 para SI, 2 para NO"));
        }

        else{
            alert("No introdujo una opción válida");
        }

    }
    else{
        alert("Recuerda que la pregunta debe ser respondida")
    }

    continuar = 2;


}
alert("Terminó la ejecución del programa");

