function mostrarLongitud(objeto: number | string) {
    if(typeof objeto === 'string'){
        return objeto.length
    }
}

mostrarLongitud('1')

//
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

function jugar(personaje: Personaje){
    if(personaje.company === 'Nintendo'){
        personaje.saltar() // <- Infiere que ya es Mario
        return
    }
    personaje.correr()
}