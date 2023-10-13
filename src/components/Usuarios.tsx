import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, User } from '../interfaces/reqRes.interface';

export const Usuarios = () => {
    const [users, setUsers] = useState<User[]>([])

    const paginaRef = useRef(0)

    console.log(paginaRef.current)

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
            paginaRef.current++
        } else {
            alert('No hay más registros')
        }
        
       
    }   

    const renderItem = ({id, first_name, last_name, email, avatar}: User) => {
        return (
        <tr key={id.toString()}>
            <td>
                <img 
                src={avatar} 
                alt='user avatar'
                style={{
                    width: 35,
                    borderRadius: 100
                }}
                />
            </td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
        )
    }

  return (
    <>
        <h3>Usuarios:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>email</th>
                </tr>

            </thead>
            <tbody>
                {
                    users.map( user => renderItem(user) )
                }
            </tbody>
        </table>

        <button 
            className="btn btn-primary"
            onClick={loadingUser}
        >
            Next
        </button>



    </>
  )
}
