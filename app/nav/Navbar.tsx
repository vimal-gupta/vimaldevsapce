import React from 'react'
import {SiInternetcomputer} from 'react-icons/si'
export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 flex justify-between bg-white p-5 text-gray-800 shadow-md'>
        <div className='flex items-center gap-2 text-3xl font-semibold text-red-500'>
            <SiInternetcomputer size={34}/>
            <div> Vimal Dev Space</div>
        </div>
        <div>Search </div>
        <div>Login</div>
    </header>
  )
}
