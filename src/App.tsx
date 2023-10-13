//import { Funciones } from "./typescript/Funciones"
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
//import { TiposBasicos } from "./typescript/TiposBasicos"
//import { Contador } from "./components/Contador"

import { Usuarios } from "./components/Usuarios"

//import { ContadorConHook } from "./components/ContadorConHook"
//import { Login } from "./components/Login"



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
      <Login/> */}

      <Usuarios/>
    </div>
  )
}

export default App