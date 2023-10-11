
export const TiposBasicos = () => {

    const nombre = 'Pedro' // Typescript aquí infiere el tipo del dato
    const nombre2: string = 'Adasat' // De esta forma se le da el tipo de dato
    let nombre3: string | number = 'Pikachu' // Puede tener más de un tipo de dato

    nombre3 = 123

    const edad = 33 // En este caso al ser una constante el tipo es 33 porque no va a cambiar
    
    const active: boolean = false

    const poderes = ['Velocidad', 'Volar', 'Respirar en el agua'] // Infiere que el array de poderes es un array de string

    //Si no se le señalan los datos en un array... se podrá por defecto 'Any' que hay que evitar
    const powers: string[] = [] //Gestionar un arreglo de string vacío


  return (
    <>
        <h3>Tipos Básicos</h3>
        <ul>
            <li><b>Nombre 1:</b> {nombre} <i>{typeof(nombre)}</i>  \\// edad: {edad}</li>
            <li><b>Nombre 2:</b> {nombre2} <i>{typeof(nombre2)}</i> </li>
            <li><b>Nombre 3:</b> {nombre3} <i>{typeof(nombre3)}</i> </li>
        </ul>
        {active ? 
        <p className="text-success fw-bold">Active</p>
        :
        <p className="text-danger fw-bold">Inactive</p>
        }
        <p> 
        <b>Powers:</b> {' '}
        {poderes.join(', ')}
        </p>



    </>
  )
}
