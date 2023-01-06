import React from 'react';

import { SearchIcon, UserIcon, ArrowIcon, NoticeIcon} from '../../icons/icons';
import HeaderPopup from './HeaderPopup/HeaderPopup';

export default function Header({handleSignOut, titles}) {
  const [show,setShow] = React.useState(false); // hook to change background of navigation block
  const [popup,setPopup] = React.useState(false); // hook to shov popup via hover
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeVis = () =>{
    if(window.scrollY > 80&&!show){
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
  },[changeVis])

  const mouseEnterHandler = (e) =>{
    setPopup(true);
  }

  const mouseLeaveHandler =(e) =>{
    setPopup(false);
  }

  return (
    <nav className={`${show ? 'bg-default' : 'bg-transparent'} flex justify-between items-center px-12 fixed top-0 right-0 left-0 ease-in duration-500 bg-gradient z-10 lg:px-2`}>
      <div className='flex items-center'>
          <div className='mr-9 cursor-pointer max-h-[62px] flex md:mr-4'>
            <img className='max-w-[140px] md:max-w-[80px]'src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo Netflix" />
          </div>
          <ul className='flex sm:hidden'>
            {titles.map((item,index)=>
            <li key={index} className='mr-6 text-sm hover lg:text-[10px] md:text-[9px]'>{item.title}</li>)}
          </ul>
      </div>
      <ul className='flex items-center'>
        <li className='ml-6 cursor-pointer'><SearchIcon styles={'text-2xl'}/></li>
        <li className='ml-6 cursor-pointer lg:hidden'>Kids</li>
        <li className='ml-6 cursor-pointer'><NoticeIcon styles={'text-2xl'}/></li>
        <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='ml-6 cursor-pointer flex group items-center justify-center'>
          <UserIcon styles={'text-2xl'}/>
          <ArrowIcon styles={`${popup &&'rotate-180 transition-all'} md:invisible`}/>
        </li>
      </ul>
        <HeaderPopup onEnter={mouseEnterHandler} onLeave={mouseLeaveHandler} popup={popup} exitProfile={handleSignOut}/>
    </nav>
  )
}
