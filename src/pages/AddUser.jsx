import React, { useContext } from 'react'
import Button from '../components/Button'
import Back from '../assets/images/back.svg'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function AddUser() {
  const {users, setUsers} = useContext(Context)
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const data = {
      id:users.length,
      name:e.target.name.value,
      surname:e.target.surname.value,
      age:e.target.age.value,
      address:e.target.address.value
    }
    setUsers([...users, data])
    toast.success('Successfully added!')
    setTimeout(() => {
      navigate(-1)
    },1000)
  }

  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
      <form onSubmit={handleSubmit}>
        <div className='p-6 flex justify-between border-b-[2px] border-b-[#E5E5E5]'>
          <div className='flex space-x-5'>
            <img onClick={() => navigate(-1)} src={Back} className='hover:scale-150 duration-300 cursor-pointer' alt="Back" width={25} height={25} />
            <h2 className='text-[25px] font-bold'>Add Users</h2>
          </div>
          <Button type={"submit"} title={"Save User"} />
        </div>
        <div className='p-5 m-5 bg-white rounded-lg w-[50%]'>
          <div className='mb-5'>
            <label className='text-[15px] font-semibold'>Name</label>
            <input type='text' className='w-full border-2 border-gray-400 rounded-md p-2' placeholder='Enter Name' required name='name'/>
          </div>
          <div className='mb-5'>
            <label className='text-[15px] font-semibold'>Surname</label>
            <input type='text' className='w-full border-2 border-gray-400 rounded-md p-2' placeholder='Enter Surname' required name='surname'/>
          </div>
          <div className='mb-5'>
            <label className='text-[15px] font-semibold'>Age</label>
            <input type='number' className='w-full border-2 border-gray-400 rounded-md p-2' placeholder='Enter Age' required name='age'/>
          </div>
          <div>
            <label className='text-[15px] font-semibold'>Address</label>
            <input type='text' className='w-full border-2 border-gray-400 rounded-md p-2' placeholder='Enter Address' required name='address'/>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddUser