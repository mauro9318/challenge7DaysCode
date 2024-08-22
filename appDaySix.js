/*let frutas = new Array("Manzanas", "Frutas", "Naranjas");
console.log(`La lista original es: ${frutas}`);
añadirFrutas = new Array("Uvas", "mangos", "peras");
frutas.splice(0, 1, añadirFrutas);
console.log(`La lista modificada es: ${frutas}`);*/





//Declaración e inicialización de las variables a utilizar

//Para este ejercicio solo se usarán 3 categorías
let tipoProductos=["fruta", "bebida", "dulce"];

//variable de control para finalizar el programa
let consulta  = 1;


let fruta = [];
let bebida = [];
let dulce = [];


let modificacionProducto="";

function agregarAlCarro(seleccionTipo, seleccionProductos){
    switch (seleccionTipo){
        case "fruta":
            fruta.push(seleccionProductos);
            break;
        case "bebida":
            bebida.push(seleccionProductos);
            break;
        case "dulce":
            dulce.push(seleccionProductos);
            break;
    }
}

function cambioElementos(tipoProducto, producto){

    switch(tipoProducto){
        case "fruta":
            
            console.log(`Selecciono la seccion frutas`);
            valor = parseInt(fruta.indexOf(producto))
            console.log(valor)
            console.log(typeof(valor))
            console.log(`Seleccionó ${producto} cuyo indice es: ${valor}`);
            console.log(fruta[valor])
            fruta.splice(valor,1)
            console.log(fruta)
            break;
    
        case "bebida":
            console.log("Selecciono la opcion bebida");

    
        case "dulce":
            console.log("Selecciono la opcion dulce");
    
    }
}




while(consulta == 1){
    let seleccionProductos = prompt(`¿Que producto deseas agregar?`);
    
    let seleccionTipo = prompt(`¿Que tipo de producto es?\n
Las opciones disponibles son: ${tipoProductos}`);
    agregarAlCarro(seleccionTipo, seleccionProductos)
    consulta = parseInt(prompt("Si desea continuar presione 1.\nSi desea finalizar presione 0. \n Si sesea elminar un producto presione 2"));

    if (consulta == 2){
        let modificacionTipoProducto = prompt(`Escribe el tipo de producto. Recuerda que se tiene las opciones ${tipoProductos}`);
        
        
        switch (modificacionTipoProducto){
            case "fruta":
                console.log(`Selecciono la seccion frutas`);
                modificacionProducto = prompt(`Escribe el producto que se eliminará de la lista.\nRecuerde que esta es su lista ${fruta}`);
                
                valor = parseInt(fruta.indexOf(modificacionProducto))
                //console.log(valor)
                //console.log(typeof(valor))
                
                //console.log(`Seleccionó ${modificacionProducto} cuyo indice es: ${valor}`);
                //console.log(fruta[valor])
                fruta.splice(valor,1)
                //console.log(fruta)
                consulta = parseInt(prompt("Si desea continuar presione 1.\nSi desea finalizar presione 0. \n Si sesea elminar un producto presione 2"));
                break;
            case "bebida":
                modificacionProducto = prompt(`Escribe el producto que se eliminará de la lista.\nRecuerde que esta es su lista ${bebida}`);
                valor = parseInt(bebida.indexOf(modificacionProducto));
                bebida.splice(valor,1);
                consulta = parseInt(prompt("Si desea continuar presione 1.\nSi desea finalizar presione 0. \n Si sesea elminar un producto presione 2"));
                break;
            case "dulce":
                modificacionProducto = prompt(`Escribe el producto que se eliminará de la lista.\nRecuerde que esta es su lista ${dulce}`);
                valor = parseInt(dulce.indexOf(modificacionProducto));
                dulce.splice(valor,1);
                consulta = parseInt(prompt("Si desea continuar presione 1.\nSi desea finalizar presione 0. \n Si sesea elminar un producto presione 2"));
                break;
            
        }
    }
}

alert(`Esta es tu orden\n 
        frutas: ${fruta}\n
        bebidas: ${bebida}\n
        dulces : ${dulce}`);

