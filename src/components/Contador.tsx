import { useState } from "react"


export const Contador = () => {
    const [value, setValue] = useState(0) //Typescript infiere el valor génerico

    const acumular = (numero: number) => {
        setValue(value + numero)
    }


  return (
    <>
      <h3>Contador: <small>{value}</small></h3>  

      <button className='btn btn-primary' onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className='btn btn-secondary' onClick={() => acumular(-1)}>
        -1
      </button>

    </>
  )
}
