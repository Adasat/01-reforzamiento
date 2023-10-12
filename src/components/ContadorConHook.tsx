import { useState } from "react"
import { useCounter } from "../hooks/useCounter"


export const ContadorConHook = () => {

   const {value, acumular} = useCounter()

  return (
    <>
      <h3>Contador con Hook: <small>{value}</small></h3>  

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
