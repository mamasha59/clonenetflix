import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

export default function User() {
  const [newUserForm, setNewUserForm] = React.useState(false); // state to change form, from - Who's here? to - Create new profile

  const [name, setValue] = React.useState('');

  const [messageError, setMessageError] = React.useState("");

  const  handleSudmitProfile = (e) =>{ // function to set new profile
    e.preventDefault();
    if(name.length === 0){
      setMessageError(true);
    }
    if(name){
    setNewUserForm(false);
    setMessageError(false);
    }
  }
  
  const handleChange = (e) =>{ // handle input value
    setValue(e.target.value);
  }
  const handleUndo = () =>{ // when push button Cancel it will reset error state
    setMessageError(false);
    setValue("");
    setNewUserForm(false);
  }
  const hendleNew = () =>{// when push button New it will reset error state
    setNewUserForm(true);
    setValue("");
    setMessageError(false);
  }
  return (
    <section className='bg-default h-[100vh] text-[grey] flex items-center justify-center'>
 
    <div className={`flex items-center flex-col max-w-[614px] w-full ${newUserForm && "hidden"}`}>
      <h2 className='text-6xl text-[#fff]'>Кто здесь?</h2>
      <ul className='flex my-7'>

        <li className='w-[153px] h-[201px] cursor-pointer rounded-md mr-7 group flex items-center flex-col'>
            <div className='border-4 border-transparent bg-center bg-cover w-full h-full group-hover:buttonUserScreen' style={{backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png")`}}></div>
            <span className='mt-3 group-hover:text-[#fff]'>{name || "user name"}</span>
        </li>

        <li className='w-[153px] h-[201px] cursor-pointer group rounded-md mr-7 group flex items-center flex-col'> 
            <div className='border-4 border-transparent bg-center bg-cover w-full h-full group-hover:buttonUserScreen' style={{backgroundImage:`url("https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg")`}}></div>
            <span className='mt-3 group-hover:text-[#fff]'>Kids</span>
        </li>
        <li className='w-[153px] h-[201px] cursor-pointer group rounded-md group flex items-center flex-col' onClick={hendleNew}>
            <div className='flex justify-center items-center bg-center bg-cover w-full h-full group-hover:bg-[#d6d3d3] transition-all'><AiOutlinePlus className='text-7xl text-[#000] bg-[#666] group-hover:text-[#fff] rounded-full'/></div>
            <span className='mt-3 group-hover:text-[#fff]'>Новый</span>
        </li>
     
      </ul>
      <div className='flex flex-col items-center'>
        <button className='border-solid border-[grey] border px-6 py-2 mb-5 text-xl hover:text-[#fff] hover:border-[#fff]'>Управление профилями</button>
        <Link to={"movie"} className="hover:text-[red]">Back</Link>
      </div>
    </div>
    <div className={`transition-all max-w-[614px] w-full ${newUserForm ? "block" : "hidden"}`}>
      <h2 className='text-6xl text-[#fff] mb-5 font-semibold'>Новый</h2>
      <p className='mb-5 text-lg'>Добавьте профиль для другого пользователя Netflix.</p>

      <form onSubmit={handleSudmitProfile}>
        <div className='flex py-5 border-y-[1px] border-[grey] mb-8 justify-between items-center'>
          <div className='w-[122px] h-[122px] mr-4'><img className='rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user profile img"/></div>
            <div className='grow relative'>
              <input
                onChange={handleChange}
                className={`w-full px-3 py-2 border-2 outline-0 border-transparent bg-[#666] text-[#fff] text-lg ${messageError&&name.length <= 0 ? "border-[red]" : ""}`}
                type="text"
                placeholder='Имя'
                value={name}
                />
              {messageError&&name.length <= 0 ? <span className='absolute top-[100%] left-0 text-[#ff0000bf]'>Укажите имя.</span> : ""}
            </div>
          <label className='text-[#fff] ml-4 flex flex-row-reverse text-lg'>Ребенок?
            <input className='bg-inherit' type="checkbox" />
          </label>
        </div>
        <button className='text-xl font-medium px-8 pt-1 pb-2 mr-5 bg-[#fff] text-[#000] hover:bg-[red] hover:text-[#fff]'>Продолжить</button>
        <button onClick={handleUndo} className='text-xl font-medium px-8 pt-1 pb-2 border-[1px] border-[grey] hover:text-[#fff] hover:border-[#fff]'>Отмена</button>
      </form>

    </div>
    
    </section>
  )
}
