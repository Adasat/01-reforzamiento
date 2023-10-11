/* El objetivo de una intefaz es decirle a Typescript 
cómo lucen los objetos y sus reglas de validación
*/
//Moldeas el objeto para que se gestione
interface Persona {
    nombreCompleto: string,
    edad: number,
    dirección: Dirección 
}


interface Dirección {
    pais: string,
    casaNo: number
}



export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Adasat',
        edad: 33,
        dirección: {
            pais: 'Canarias',
            casaNo: 248
        }
    }

   // persona.nombreCompleto = 'Pedro Adasat'  --> Javascript permitiría hacer esto, pero Typescript no

  return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </div>
  )
}
