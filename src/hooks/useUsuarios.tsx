import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, User } from "../interfaces/reqRes.interface"

export const useUsuarios = () => {
  
    const [users, setUsers] = useState<User[]>([])

    const paginaRef = useRef(0)

    useEffect(() => {
        loadingUser()
    }, [])

    const loadingUser = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0 ){
            setUsers(resp.data.data)
            
        } else {
            paginaRef.current--
            alert('No hay más registros')
        }
    }   

    const nextPage = () => {
        paginaRef.current++
        loadingUser()
    }

    const previewPage = () => {
        if(paginaRef.current > 1){
            paginaRef.current--
            loadingUser()
        }
    }
    

    return {
        users, 
        nextPage,
        previewPage
    }

  

}
