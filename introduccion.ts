const persona = {
    nombre: 'Sebastián',
    apellido: 'Laos',
    edad: 19
}

console.log(persona.nombre)

// cualquier tipo de dato
// Any también quiere decir que IGNORE el tipado de TypeScript
let anyValue: any = 'Hola'

anyValue.toUpperCase()

// INFERENCIA DE TS
const a = 1
const b = 2
const c = a + b

let text = 'Hola'

text.toLowerCase()

// ❌ text = 2
// ❌ text.propiedadInexistente

// Tipo Unknown
let unknownValue: unknown = 'Hola'

anyValue.toUpperCase()

// any 
let obj: any = {x: 0}
console.log(obj)
obj.bar = 100;
console.log(obj)
obj = 'Hello'
console.log(obj)
const n: number = obj
console.log(obj)


function saludar({name, age}: {name: string, age: number}){
    if(age === 1){
        console.log(`Hola soy ${name} y tengo ${age} año`)
    }
    else{
        console.log(`Hola soy ${name} y tengo ${age} años`)
    }
}

saludar({name: 'Sebastián', age: 1})

// Tipar funciones con parámetros
const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Miguel')
}

const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
    return name
}

console.log(sayHiFromFunction(sayHi))

// Tipar "arrow functions"
const sumar = (a: number, b: number): number => {
    return a + b
}
console.log(sumar(1,2))

const restar: (a: number, b: number) => number = (a, b) => {
    return a - b
}

console.log(restar(3,2))

// never
function throwError(message: string): never {
    if(message) throw new Error(message)
    throw new Error(message)
}

// Arreglos
// Inferencia y funciones anonimas según el contexto
// la inferencia aplica a todas las funciones de arreglos
const nombres = ['Sebastián', 'Matias', 'Victor', 'Lilian']

nombres.forEach(nombre => {
    console.log(nombre.toUpperCase())
})

// Objetos
type User = {
    name: string,
    age: number
}

let user: User = {
    name: 'Sebastián',
    age: 19
}

function createUser(name: string, age: number): User {
    return{ name, age }
}

function alternativeCreateUser(user: User): User {
    const { name, age } = user
    return { name, age }
}

const matias = createUser('Matias', 20)

//Template union types
type HexadecimalColor = `#${string}`
//const color: HexadecimalColor = '0033ff' // hexadecimal : ❌ incorrecto
const color2: HexadecimalColor = '#0033ff' // hexadecimal: ✅ correcto

// Union Types

type UserId = `${string}-${string}-${string}-${string}-${string}` // UUID
type User2 = {
    readonly id?: UserId
    name: string
    age: number
    isActive?: boolean
}

let user2: User2 = {
    name: 'Sebastián',
    age: 19
}

function createUser2(user2: User2): User2 {
    const { name, age } = user2
    return { id: crypto.randomUUID(), name, age, isActive: true }
}

const matias2 = createUser2({name: 'Matias', age:20})

type UserId2 = `${string}-${string}-${string}-${string}-${string}` // UUID
type UserZodiacalSign = 'Aries' | 'Aries' | 'Tauro' | 'Géminis' | 'Cáncer' | 'Leo' | 'Virgo' | 'Libra' | 'Escorpio' | 'Sagitario' | 'Capricornio' | 'Acuario' | 'Piscis'

// Types Intersection
type UserBasicInfo ={
    name: string
    age: number
}
type UserProperties = {
    readonly id?: UserId
    isActive?: boolean
    zodiacalSign?: UserZodiacalSign
}

type User3 = UserBasicInfo & UserProperties

let user3: User3 = {
    name: 'Sebastián',
    age: 19
}

function createUser3(input: UserBasicInfo): User3 {
    const { name, age } = input
    return { id: crypto.randomUUID(), name, age, isActive: true }
}

const matias3 = createUser3({name: 'Matias', age:20})
matias3.zodiacalSign = 'Acuario'
//Template union types
type HexadecimalColor2 = `#${string}`
//const color: HexadecimalColor = '0033ff' // hexadecimal : ❌ incorrecto
const color3: HexadecimalColor = '#0033ff' // hexadecimal: ✅ correcto


// Type Indexing

type UserProperties2 = {
    isActive: boolean,
    address: {
        country: string,
        city: string
    }
}

const addressUser: UserProperties2['address'] = {
    country: 'Perú',
    city: 'Lima'
}

// Type from value

const address = {
    country: 'Perú',
    city: 'Lima'
}

type Adress = typeof address

const addressBerlin: Adress = {
    country: 'Alemania',
    city: 'Berlín'
}

// type from function return

function createAddress(){
    return{
        country: 'Perú',
        city: 'Lima'
    }
}

type Address2 = ReturnType<typeof createAddress>

// Arrays | Arreglos
const languages: (string | number)[] = []

languages.push('Español')
languages.push('Inglés')
languages.push('Francés')
languages.push(2)

// Matrices y tuplas
type CellValue = 'X' | 'O' | ''
type GameBoard = [
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue]
]

const gameBoard: GameBoard = [
    ['X','O','O'],
    ['O','X','X'],
    ['X','','O']
]