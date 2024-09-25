import React from 'react'
import Logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto bg-blue-900'>
        <div className='p-[22px] border-b-[2px] border-b-[#FFF]'>
            <img className='mx-auto' src={Logo} alt="logo" width={100} height={40} />
        </div>
        <ul className='p-10 space-y-3'>
            <li>
                <NavLink className="text-white text-[17px] font-semibold p-2 rounded-lg w-full block text-center" to={"/"}>Users</NavLink>
            </li>
            <li>
                <NavLink className="text-white text-[17px] font-semibold p-2 rounded-lg w-full block text-center" to={"/companies"}>Companies</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar