import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Back from '../assets/images/back.svg'

function SingleUser() {
  const navigate = useNavigate()
  const { users } = useContext(Context)
  const { id } = useParams()
  const user = users.find(item => item.id == id)
  console.log(user);
  return (
    <>
      <div className='p-6 flex justify-between border-b-[2px] border-b-[#E5E5E5]'>
        <div className='flex space-x-5'>
          <img onClick={() => navigate(-1)} src={Back} className='hover:scale-150 duration-300 cursor-pointer' alt="Back" width={25} height={25} />
          <h2 className='text-[25px] font-bold'>{user.name}</h2>
        </div>
        <Button type={"submit"} title={"Update user"} />
      </div>
      <div className='p-10 m-6 bg-white rounded-lg border-[1px] border-[#E5E5E5] w-[400px] shadow-lg'>
  <div className="flex items-center mb-4">
    <div className="ml-4">
      <h2 className='text-2xl font-semibold text-gray-800'>User Information</h2>
      <p className='text-gray-500'>Details about the user</p>
    </div>
  </div>
  <div className="space-y-3">
    <p className="text-lg text-gray-600">Name: <strong className="text-gray-800">{user.name}</strong></p>
    <p className="text-lg text-gray-600">Surname: <strong className="text-gray-800">{user.surname}</strong></p>
    <p className="text-lg text-gray-600">Age: <strong className="text-gray-800">{user.age}</strong></p>
    <p className="text-lg text-gray-600">Address: <strong className="text-gray-800">{user.address}</strong></p>
  </div>
</div>
    </>
  )
}

export default SingleUser