import React, { useContext } from 'react'
import Button from '../components/Button'
import Trash from '../assets/images/trash.svg'
import More from '../assets/images/more.svg'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

function Users() {
  const navigate = useNavigate()
  const { users, deleteUser } = useContext(Context)

  return (
    <div>
      <div className='p-6 flex justify-between border-b-[2px] border-b-[#E5E5E5]'>
        <h2 className='text-[25px] font-bold'>Users</h2>
        <Button onClick={() => navigate("/users/add")} title={"Add User"} />
      </div>
      <div className='p-5'>
        <table className='bg-white w-full rounded-md'>
          <thead>
            <tr>
              <th className='p-2 border-b-[1px] border-slate-300'>ID</th>
              <th className='p-2 border-b-[1px] border-slate-300'>Name</th>
              <th className='p-2 border-b-[1px] border-slate-300'>Surname</th>
              <th className='p-2 border-b-[1px] border-slate-300'>Age</th>
              <th className='p-2 border-b-[1px] border-slate-300'>Address</th>
              <th className='p-2 border-b-[1px] border-slate-300'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item.id}>
                <td className='text-center p-2'>{index + 1}</td>
                <td className='text-center p-2'>{item.name}</td>
                <td className='text-center p-2'>{item.surname}</td>
                <td className='text-center p-2'>{item.age}</td>
                <td className='text-center p-2'>{item.address}</td>
                <td className='text-center p-2 space-x-4'>
                  <button onClick={() => deleteUser(item.id)} className='hover:scale-150 duration-300'><img src={Trash} alt="Delete" width={15} height={15} /></button>
                  <button onClick={() => navigate(`/users/${item.id}`)} className='hover:scale-150 duration-300'><img src={More} alt="More" width={15} height={15} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users