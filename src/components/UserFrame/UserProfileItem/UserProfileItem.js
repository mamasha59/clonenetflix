import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentProfile } from '../../../redux/slicers/userSlice';

export default function UserProfileItem({name,bgImg,redirect,id}) {
  
  const dispatch = useDispatch();

  const handleSetProfile = () =>{
    dispatch(setCurrentProfile(id))
  }

  return (
  <Link to={`/${redirect}`}>
    <li onClick={handleSetProfile} className='w-[153px] h-[201px] sm:w-[140px] sm:h-[175px] cursor-pointer mr-7 group flex items-center flex-col'>
        <div className='rounded-md border-4 border-transparent bg-center bg-cover w-full h-full group-hover:buttonUserScreen' style={{ backgroundImage:`url(${bgImg ? bgImg : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})`}}>
        </div>
        <span className='mt-3 group-hover:text-[#fff]'>{name || "user name"}</span>
    </li>
  </Link>
  )
}
