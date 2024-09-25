import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import Trash from '../assets/images/trash.svg'
import More from '../assets/images/more.svg'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import Modal from '../components/Modal'

function Users() {
  const [showModal, setShowModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const navigate = useNavigate()
  const { users, deleteUser } = useContext(Context)

  function handleDelete(id) {
    setDeleteId(id)
    setShowModal(true)
  }
  function handleDeleteBtn() {
    deleteUser(deleteId)
    setShowModal(false)
  }


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
                  <button onClick={() => handleDelete(item.id)} className='hover:scale-150 duration-300'><img src={Trash} alt="Delete" width={15} height={15} /></button>
                  <button onClick={() => navigate(`/users/${item.id}`)} className='hover:scale-150 duration-300'><img src={More} alt="More" width={15} height={15} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p className="text-center mt-5 font-semibold text-gray-700">Are you sure you want to delete this user?</p>
        <div className='flex justify-evenly space-x-4 mt-10'>
          <button onClick={() => setShowModal(false)} className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300'>Cancel</button>
          <button onClick={handleDeleteBtn} className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300'>Delete</button>
        </div>
      </Modal>
    </div>
  )
}

export default Users