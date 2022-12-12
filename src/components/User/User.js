import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <section className='bg-default h-[100vh] text-[grey] flex items-center justify-center flex-col'>
    <h2 className='text-6xl text-[#fff]'>Кто здесь?</h2>
    <div className='flex my-7'>
        <button className='w-[153px] h-[153px] border-dashed border-[grey] border mr-5'>User.name</button>
        <button className='w-[153px] h-[153px] border-dashed border-[grey] border mr-5'>Kids</button>
        <button className='w-[153px] h-[153px] border-dashed border-[grey] border'>Новый</button>
    </div>
    <button className='border-solid border-[grey] border px-6 py-2 mb-5 text-xl'>Управление профилями</button>
    <Link to={"movie"}>Back</Link>
    </section>
  )
}
