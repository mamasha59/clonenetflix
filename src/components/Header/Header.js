import React from 'react'

import { AiOutlineSearch,AiOutlineUser } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';

export default function Header() {
  const [show,setShow] = React.useState(false);

  const changeVis = () =>{
    if(window.scrollY > 0){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  React.useEffect(()=>{
   window.addEventListener('scroll', changeVis)
   return ()  => window.removeEventListener('scroll',changeVis)
  },[])
  
  return (
    <nav className={`${show ? 'bg-[#141414]' : 'bg-transparent'} flex justify-between items-center px-12 fixed top-0 right-0 left-0 ease-in duration-500 bg-gradient z-10`}>
      <div className='flex items-center'>
          <div className='mr-9 cursor-pointer max-h-[62px] flex'>
            <img className='max-w-[140px]'src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo Netflix" />
          </div>
          <ul className='flex'>
            <li className='mr-6 text-sm hover'>Главная</li>
            <li className='mr-6 text-sm hover'>Сериалы</li>
            <li className='mr-6 text-sm hover'>Фильмы</li>
            <li className='mr-6 text-sm hover'>Новинки и популярное</li>
            <li className='mr-6 text-sm hover'>Мой список</li>
            <li className='mr-6 text-sm hover'>Поиск по языку</li>
          </ul>
      </div>
        <ul className='flex items-center'>
          <li className='ml-6 cursor-pointer'><AiOutlineSearch className='text-2xl'/></li>
          <li className='ml-6 cursor-pointer'>Kids</li>
          <li className='ml-6 cursor-pointer'><IoIosNotificationsOutline className='text-2xl'/></li>
          <li className='ml-6 cursor-pointer'><AiOutlineUser className='text-2xl'/></li>
        </ul>
    </nav>
  )
}
