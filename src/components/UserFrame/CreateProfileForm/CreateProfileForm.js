import React from 'react'
import { CheckBoxIcon } from '../../../icons/icons';

export default function CreateProfileForm({onSubmit,cancelButton,handleForm,error}) {

  const [name, setValue] = React.useState(""); // value of Name input

  const handleChange = (e) =>{ // handle input value
    setValue(e.target.value) 
  }

  const createProfile = (e) =>{
    e.preventDefault()
    onSubmit(name);
    setValue("");
  }

  return (
    <div className={`transition-all max-w-[614px] p-5 w-full ${handleForm ? "block" : "hidden"}`}>
      <h2 className='text-6xl text-[#fff] mb-5 font-semibold sm:text-4xl'>Новый</h2>
      <p className='mb-5 text-lg sm:text-sm'>Добавьте профиль для другого пользователя Netflix.</p>

      <form onSubmit={createProfile}>
        <div className='flex py-5 border-y-[1px] border-[grey] mb-8 justify-between items-center lit:flex-col'>
          <div className='w-[122px] h-[122px] mr-4 lit:mr-0 lit:mb-3'><img className='rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user profile img"/></div>
            <div className='grow relative lit:mb-7'>
              <input
                onChange={handleChange}
                className={`w-full px-3 py-2 border-2 outline-0 border-transparent bg-[#666] text-[#fff] text-lg ${error&&name.length <= 0 ? "border-[red]" : ""}`}
                type="text"
                placeholder='Имя'
                value={name}
                />
              {error&&name.length <= 0 ? <span className='absolute top-[100%] left-0 text-[#ff0000bf]'>Укажите имя.</span> : ""}
            </div>
            <label htmlFor='check-box' className='text-[#fff] ml-4 flex flex-row-reverse text-lg relative cursor-pointer'>Ребенок?
              <input
                className='appearance-none h-8 w-8 border-2 border-[grey] cursor-pointer mr-1'
                type="checkbox"
                id='check-box'
                />
              <CheckBoxIcon styles={'absolute left-1 top-1 text-2xl opacity-0 check1'}/>
            </label>
        </div>
        <button className='text-xl font-medium px-8 pt-1 pb-2 mr-5 bg-[#fff] text-[#000] hover:bg-[red] hover:text-[#fff]'>Продолжить</button>
        <button onClick={cancelButton} className='text-xl font-medium px-8 pt-1 pb-2 border-[1px] border-[grey] hover:text-[#fff] hover:border-[#fff]'>Отмена</button>
      </form>
    </div>  
  )
}
