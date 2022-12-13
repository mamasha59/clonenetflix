import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai';

export default function User() {
  return (
    <section className='bg-default h-[100vh] text-[grey] flex items-center justify-center flex-col'>
    <h2 className='text-6xl text-[#fff]'>Кто здесь?</h2>
    <div className='flex my-7'>
        <button className='mr-5 buttonUserScreen'>User.name</button>
        <button className='mr-5 buttonUserScreen'>Kids</button>
        <button className='buttonUserScreen'><AiOutlinePlus className='text-5xl'/></button>
    </div>
    <button className='border-solid border-[grey] border px-6 py-2 mb-5 text-xl hover:text-[#fff] hover:border-[#fff]'>Управление профилями</button>
    <Link to={"movie"} className="hover:text-[red]">Back</Link>
    </section>
  )
}
