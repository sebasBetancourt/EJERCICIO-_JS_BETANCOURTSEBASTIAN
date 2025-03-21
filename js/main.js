
// user  = prompt("Ingresa una expresion: ")
let user = "holaa ()[]{}"


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
    console.log(expresion);
    for (let char of expresion){
        if(char === ("[")){
            let posicion = expresion[(expresion.indexOf(char)) + 1];
            console.log(posicion);
            if (posicion === "]"){
                let equilibradoUno = true
            }
    }else if(char === ("(")){
        let posicion = expresion[(expresion.indexOf(char)) + 1];
        console.log(posicion);
        if (posicion === "]"){
            let equilibradoDos = true
        }
    }else if(char === ("{")){
        let posicion = expresion[(expresion.indexOf(char)) + 1];
        console.log(posicion);
        if (posicion === "]"){
            let equilibradoTres = false
        }
    }
    }
    if (equilibradoUno())
    return equilibrado

};
console.log(esEquilibrada(user))