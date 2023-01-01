import React from 'react';
import { Link } from 'react-router-dom';

import { SearchIcon, UserIcon, ArrowIcon, NoticeIcon, 
        ChangeProfileIcon, TransferProfileIcon, AccountIcon,
        SupportIcon } from '../../icons/icons';

export default function  Header({handleSignOut}) {
  const [show,setShow] = React.useState(false); // hook to change background of navigation block
  const [popup,setPopup] = React.useState(false); // hook to shov popup via hover

  const changeVis = () =>{
    if(window.scrollY > 0){
      setShow(true);
    }else{
      setShow(false);
    }
  } 

  React.useEffect(()=>{ // to chane backgorund color while scrolling down and up
   window.addEventListener('scroll', changeVis)
   if(window.scrollY > 62){
    window.removeEventListener('scroll',changeVis)
   }
  },[])

  function mouseEnterHandler(e){
    setPopup(true);
    e.stopPropagation();
  }

  function mouseLeaveHandler(e){
    setPopup(false);
    e.stopPropagation();
  }

  return (
    <nav className={`${show ? 'bg-default' : 'bg-transparent'} flex justify-between items-center px-12 fixed top-0 right-0 left-0 ease-in duration-500 bg-gradient z-10 lg:px-2`}>
      <div className='flex items-center'>
          <div className='mr-9 cursor-pointer max-h-[62px] flex md:mr-4'>
            <img className='max-w-[140px] md:max-w-[80px]'src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo Netflix" />
          </div>
          <ul className='flex sm:hidden'>
            <li className='mr-6 text-sm hover lg:text-[10px] md:text-[9px]'>Главная</li>
            <li className='mr-6 text-sm hover lg:text-[10px] md:text-[9px]'>Сериалы</li>
            <li className='mr-6 text-sm hover lg:text-[10px] md:text-[9px]'>Фильмы</li>
            <li className='mr-6 text-sm hover lg:text-[10px] md:text-[9px]'>Новинки и популярное</li>
            <li className='mr-6 text-sm hover lg:text-[10px] md:text-[9px]'>Мой список</li>
            <li className='mr-6 text-sm hover lg:text-[10px] md:text-[9px]'>Поиск по языку</li>
          </ul>
      </div>
        <ul className='flex items-center'>
          <li className='ml-6 cursor-pointer'><SearchIcon styles={'text-2xl'}/></li>
          <li className='ml-6 cursor-pointer lg:hidden'>Kids</li>
          <li className='ml-6 cursor-pointer'><NoticeIcon styles={'text-2xl'}/></li>
          <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='ml-6 cursor-pointer flex group items-center justify-center'>
            <UserIcon styles={'text-2xl'}/>
            <ArrowIcon styles={'group-hover:rotate-180 transition-all'}/>
          </li>
        </ul>
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={`${popup ? 'visible' : 'invisible'} absolute right-[3%] top-[100%] bg-default mt-1 justify-between`}>
          <ul className='relative py-6 px-3'>
            <ArrowIcon styles={'absolute top-[-30px] right-[15px] text-3xl rotate-180'}/>
           <Link to="/"><li className='flex items-center text-base cursor-pointer py-2'><ChangeProfileIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Управление профилями</span></li></Link>
            <li className='flex items-center text-base cursor-pointer py-2'><TransferProfileIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Перенос профиля</span></li>
            <li className='flex items-center text-base cursor-pointer py-2'><AccountIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Аккаунт</span></li>
            <li className='flex items-center text-base cursor-pointer py-2'><SupportIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Центр поддержки</span></li>
          </ul>
          <button onClick={handleSignOut} className='py-3 text-center mx-0 my-auto w-full border-t-2 border-[#fff] group'><span className='group-hover:border-b hover:border-[#fff]'>Выйти из Netflix</span> </button>
        </div>
    </nav>
  )
}
