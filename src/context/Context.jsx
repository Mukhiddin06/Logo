import { createContext, useState } from "react";

export const Context = createContext()

export const UserContext = ({children}) => {
    const [users, setUsers] = useState([]);
    function deleteUser(id){
        const deleteIndex = users.findIndex(item => item.id == id)
        users.splice(deleteIndex, 1)
        setUsers([...users])
    }
    return (
        <Context.Provider value={{ users, setUsers, deleteUser }}>{children}</Context.Provider>
    )
}