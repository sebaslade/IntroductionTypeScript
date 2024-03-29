import { type IAvenger } from "./types.d"

class Avenger implements IAvenger{
    name: string
    powerScore: number
    wonBattles: number
    age: number

    constructor(name: string, powerScore: number){
        this.name = name
        this.powerScore = powerScore
    }

    get fullName(){
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number){
        if(newPower <= 100){
            this.powerScore = newPower
        }else{
            throw new Error("Power score can't be more than 100")
        }
    }
}

const avengers = new Avenger('Spiderman', 80)
avengers.power = 90