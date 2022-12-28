import React from 'react';

import { AiOutlineSearch,AiOutlineUser } from 'react-icons/ai';
import { IoIosNotificationsOutline,IoMdArrowDropdown } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';
import { CgUserlane} from 'react-icons/cg';
import { BiUserPin,BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Header({handleSignOut}) {
  const [show,setShow] = React.useState(false); // hook to change background of navigation block
  const [popup,setPopup] = React.useState(false); // hook to shov popup via hover

  const changeVis = () =>{
    if(window.scrollY > 0){
      setShow(true)
    }else{
      setShow(false)
    }
  } 

  React.useEffect(()=>{ // to chane backgorund color while scrolling down and up
   window.addEventListener('scroll', changeVis)
   if(window.scrollY > 62){
    window.removeEventListener('scroll',changeVis)
   }
  },[])
  
  // console.log("hi")
  return (
    <nav className={`${show ? 'bg-default' : 'bg-transparent'} flex justify-between items-center px-12 fixed top-0 right-0 left-0 ease-in duration-500 bg-gradient z-10`}>
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
          <li onMouseEnter={() => setPopup(true)} onMouseLeave={(e) => setPopup(false)} className='ml-6 cursor-pointer flex group items-center justify-center'>
            <AiOutlineUser className='text-2xl'/>
            <IoMdArrowDropdown className='group-hover:rotate-180 transition-all'/>
          </li>
        </ul>
        <div onMouseEnter={() => setPopup(true)} onMouseLeave={() => setPopup(false)} className={`${popup ? 'visible' : 'invisible'} absolute right-[3%] top-[100%] bg-default mt-1 justify-between`}>
          <ul className='relative py-6 px-3'>
            <IoMdArrowDropdown className='absolute top-[-30px] right-[15px] text-3xl rotate-180'/>
           <Link to="/"><li className='flex items-center text-base cursor-pointer py-2'><FaPencilAlt className='mr-2'/><span className='border-b border-transparent hover:border-[#fff]'>Управление профилями</span></li></Link>
            <li className='flex items-center text-base cursor-pointer py-2'><BiUserPin className='mr-2'/><span className='border-b border-transparent hover:border-[#fff]'>Перенос профиля</span></li>
            <li className='flex items-center text-base cursor-pointer py-2'><CgUserlane className='mr-2'/><span className='border-b border-transparent hover:border-[#fff]'>Аккаунт</span></li>
            <li className='flex items-center text-base cursor-pointer py-2'><BiSupport className='mr-2'/><span className='border-b border-transparent hover:border-[#fff]'>Центр поддержки</span></li>
          </ul>
          <button onClick={handleSignOut} className='py-3 text-center mx-0 my-auto w-full border-t-2 border-[#fff] group'><span className='group-hover:border-b hover:border-[#fff]'>Выйти из Netflix</span> </button>
        </div>
    </nav>
  )
}
