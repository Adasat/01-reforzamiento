import { useState } from "react"

export const useCounter = ( inicial: number = 0) => {
    const [value, setValue] = useState(inicial) //Typescript infiere el valor génerico

    const acumular = (numero: number) => {
        setValue(value + numero)
    }

    return {
        value, 
        acumular
    }
}
