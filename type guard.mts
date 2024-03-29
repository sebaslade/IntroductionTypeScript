interface Mario{
    company: 'Nintendo',
    nombre: string,
    saltar: () => void
}

interface Sonic{
    company: 'Sega'
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

//type guard requiere de un dato booleano
// Comprueba si el personaje es Sonic
function checkIsSonic(personaje: Personaje): personaje is Sonic{
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje){
    if(checkIsSonic(personaje)){
        personaje.correr()
    }
}

// tipo never

function fn(x: string | number){
    if(typeof x === 'string'){
        // x es string
        x.toLowerCase()
    }else if(typeof x === 'number'){
        // x es number
        x.toFixed(2)
    }else{
        // x es never
        x
    }
}