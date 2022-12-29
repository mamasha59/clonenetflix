import React from 'react'
import { Link } from 'react-router-dom';

export default function UserProfile({name}) {
  return (
  <Link to="/movie">
    <li className='w-[153px] h-[201px] cursor-pointer mr-7 group flex items-center flex-col'>
        <div className='rounded-md border-4 border-transparent bg-center bg-cover w-full h-full group-hover:buttonUserScreen' style={{backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png")`}}></div>
        <span className='mt-3 group-hover:text-[#fff]'>{name || "user name"}</span>
    </li>
  </Link>
  )
}