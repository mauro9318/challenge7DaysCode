//Declaración e inicialización de las variables a utilizar

//Para este ejercicio solo se usarán 3 categorías
let tipoProductos=["fruta", "bebida", "dulce"];

//variable de control para finalizar el programa
let consulta  = 1;


let fruta = [];
let bebida = [];
let dulce = [];

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




while(consulta == 1){
    let seleccionProductos = prompt(`¿Que producto deseas agregar?`);
    
    let seleccionTipo = prompt(`¿Que tipo de producto es?\n
Las opciones disponibles son: ${tipoProductos}`);
    agregarAlCarro(seleccionTipo, seleccionProductos)
    consulta = parseInt(prompt("Si desea continuar presione 1 y si desea finalizar presione 0"));
}

alert(`Esta es tu orden\n 
        frutas: ${fruta}\n
        bebidas: ${bebida}\n
        dulces : ${dulce}`);

