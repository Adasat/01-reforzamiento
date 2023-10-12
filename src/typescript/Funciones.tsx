
export const Funciones = () => {

    const sumar = () => { // Infiere el tipado si no le pone
        return 1 + 2
    }

    const funcion = ():string => {
        return 'Hola Mundo'
    }

    const funcionSumar = (a:number, b:number) => { //Se le pasa el tipo a los argumentos sino se pone por defecto any y en forma strict da problemas
        return a + b
    }


  return (
    <div className="d-flex-column">
        <h3>Funciones</h3>
        <p>El resultado es {sumar()}</p>
        <p>El resultado de la función es <b>{funcion()}</b></p>
        <p>El resultado de la función Sumar dos argumentos es: <b>{funcionSumar(2, 3)}</b></p>




    </div>
  )
}
