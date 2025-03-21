let user  = prompt("Ingresa una expresion: ")



function diccionarioExpresiones(texto){
    let expresiones = [];
    for (let char of texto){
        if(char === ("[")){
            expresiones.push(char)
        }else if(char === ("]")){
            expresiones.push(char)
        }else if(char === ("(")){
            expresiones.push(char)
        }else if(char === (")")){
            expresiones.push(char)
        }else if(char === ("{")){
            expresiones.push(char)
        }else if(char === ("}")){
            expresiones.push(char)
        }
    }
    return expresiones;
}

function esEquilibrada(texto){
    let expresion = diccionarioExpresiones(texto), equilibrado = false; 
    for (let char of expresion){
        if(char === ("[")){
            let posicion = expresion[(expresion.indexOf(char)) + 1];
            if (posicion === "]"){
                var equilibradoUno = true
            }
    }else if(char === ("(")){
        let posicion = expresion[(expresion.indexOf(char)) + 1];
        console.log(posicion);
        if (posicion === "]"){
            var equilibradoDos = true
        }
    }else if(char === ("{")){
        let posicion = expresion[(expresion.indexOf(char)) + 1];
        console.log(posicion);
        if (posicion === "]"){
            var equilibradoTres = true
        }
    }
    }
    if ((equilibradoUno && equilibradoDos && equilibradoTres) === true){
        equilibrado = true
    }
    return equilibrado

};
console.log(esEquilibrada(user))