// Aserciones de tipos
// typeof -> para tipos
// instanceof -> para instancias
// Buena ✅ 
const canvas = document.getElementById('canvas')

// es inferencia -> TypeScript se da cuenta que dentro del if que el canvas solo va ser HTMLCanvasElement
if(canvas instanceof HTMLCanvasElement) { // TypeScript deduce que canvas es un HTMLCanvasElement
    const ctx = canvas.getContext('2d')
}

// Mala ❌
const canvasMala = document.getElementById('canvas') as HTMLCanvasElement

if(canvasMala != null){
    const ctx = canvasMala.getContext('2d')
}

// Intermedia 🟧🟨
const canvasIntermedia = document.getElementById('canvas')

if(canvasIntermedia != null){
    const ctx = (canvasIntermedia as HTMLCanvasElement).getContext('2d')
}