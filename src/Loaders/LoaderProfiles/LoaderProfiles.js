import React from 'react'

export default function LoaderProfiles() {
  return (
    <div className="w-1/4 h-full relative flex items-center justify-center">
        <div className="flex flex-col animate-[preloader_1.5s_ease-in-out_infinite] p-2">
            <div className='bg-[#80808051] w-[220px] h-[20px] mb-8 rounded-sm'></div>
            <ul className='flex mb-28 lit:mb-14'>
                    <li className='bg-[#80808051] w-[160px] h-[160px] flex mr-6 rounded-sm relative justify-center items-center lit:w-24 lit:h-24'>
                        <span className='absolute top-[100%] w-10 h-2 bg-[#80808051] mt-3 rounded-sm'></span>
                    </li>
                    <li className='bg-[#80808051] w-[160px] h-[160px] flex mr-6 rounded-sm relative justify-center items-center lit:w-24 lit:h-24'>
                        <span className='absolute top-[100%] w-10 h-2 bg-[#80808051] mt-3 rounded-sm'></span>
                    </li>
            </ul>
             <ul className='flex flex-col mx-auto my-0 items-center'>
                <li className='bg-[#80808051] w-[220px] h-[20px] mb-3 rounded-sm'></li>
                <li className='bg-[#80808051] w-[80px] h-[20px] rounded-sm'></li>
            </ul>
        </div>
    </div>
  )
}
