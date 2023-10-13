//import { Funciones } from "./typescript/Funciones"
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
//import { TiposBasicos } from "./typescript/TiposBasicos"
//import { Contador } from "./components/Contador"
//import { ContadorConHook } from "./components/ContadorConHook"
//import { Login } from "./components/Login"
//import { Usuarios } from "./components/Usuarios"

import { Formulario } from "./components/Formulario"



const App = () => {
  return (
    <div className='mt-2 '>
      <h1>Introducción a <span className="text-primary">TS</span> - React</h1>
      <hr />
      {/* 
      <TiposBasicos/>
      <div className="d-flex justify-content-between">
        <ObjetosLiterales/>
        <Funciones />
      </div> 
      <Contador/>

      <ContadorConHook/>
      <Login/> 

      <Usuarios/> */}

      <Formulario/>
    </div>
  )
}

export default App