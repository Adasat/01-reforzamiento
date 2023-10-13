import { useUsuarios } from "../hooks/useUsuarios";
import { User } from "../interfaces/reqRes.interface";

export const Usuarios = () => {
    
    const {users, nextPage, previewPage} = useUsuarios()

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
            onClick={previewPage}
        >
            Preview
        </button>

        &nbsp;
        
        <button 
            className="btn btn-primary"
            onClick={nextPage}
        >
            Next
        </button>



    </>
  )
}
