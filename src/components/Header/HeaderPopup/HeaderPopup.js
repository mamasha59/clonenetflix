import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import {ArrowIcon, ChangeProfileIcon, TransferProfileIcon,
        AccountIcon,SupportIcon } from '../../../icons/icons';

const HeaderPopup = memo(({onEnter,onLeave,popup,exitProfile}) => {
  return (
    <div onMouseOver={onEnter} onMouseOut={onLeave} className={`${popup ? 'visible' : 'invisible'} absolute right-[3%] top-[100%] bg-[#000000df] mt-1 justify-between xl:right-1 xl:top-16`}>

    <ul className='relative py-6 px-3'>
      <ArrowIcon styles={'absolute top-[-30px] right-[15px] text-3xl rotate-180'}/>
      <Link to="/"><li className='flex items-center text-base cursor-pointer py-2'><ChangeProfileIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Управление профилями</span></li></Link>
      <li className='flex items-center text-base cursor-pointer py-2'><TransferProfileIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Перенос профиля</span></li>
      <li className='flex items-center text-base cursor-pointer py-2'><AccountIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Аккаунт</span></li>
      <li className='flex items-center text-base cursor-pointer py-2'><SupportIcon styles={'mr-2'}/><span className='border-b border-transparent hover:border-[#fff]'>Центр поддержки</span></li>
    </ul>

    <button onClick={exitProfile} className='py-3 text-center mx-0 my-auto w-full border-t-2 border-[#fff] group'><span className='group-hover:border-b hover:border-[#fff]'>Выйти из Netflix</span> </button>
    
  </div>
  )
})

export default HeaderPopup