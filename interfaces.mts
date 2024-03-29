/*
type Heroe = {
    id: string
    name: string
    age: number
}
*/

// No se pueden repetir los tipos
// Pero se pueden repetir las interfaces

interface Heroe {
    id: string
    name: string
    age: number
    saludar: () => void
}

const hero: Heroe = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar: () => {
        console.log('Hola')
    }
}

// tienda
interface Producto {
    id: number
    name: string
    price: number
    quantity: number
}

interface Zapatilla extends Producto{
    talla: number
}

interface CarritoCompras {
    totalPrice: number
    productos: Producto[]
}

/* 
interface CarritoOps {
    add(product: Producto): void,
    remove(id: number): void,
    clear(): void
}
*/

interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
    clear: () => void
}

const carrito: CarritoCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            name: 'Gaseosa',
            price: 100,
            quantity: 1
        }
    ]
}