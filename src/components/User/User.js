import React from 'react';
import { Link } from 'react-router-dom';

import { AddNewIcon,CheckBoxIcon } from '../../icons/icons';
import UserProfile from '../UserProfile/UserProfile';

export default function User({createProfile,profiles}) {
  const [newUserForm, setNewUserForm] = React.useState(false); // state to change form, from - Who's here? to - Create new profile

  const [name, setValue] = React.useState({}); // value of Name input
  const [messageError, setMessageError] = React.useState(null); // to set Error message if input is empty

  const handleSudmitProfile = (e) =>{ // function to set new profile
    e.preventDefault();
    if(name.length === 0){
      setMessageError(true); // set error if input is empty
    }
    if(name){
    setNewUserForm(false);
    setMessageError(false);// clear error
    createProfile(name) // post new profile
    .catch((err)=>console.log(err));
    }
  }
  const handleChange = (e) =>{ // handle input value
    setValue(e.target.value) 
  }
  const handleUndo = () =>{ // when push button Cancel it will reset error state
    setMessageError(false);
    setValue("");
    setNewUserForm(false);
  }
  const handleNew = () =>{// when push button New it will reset error state
    setNewUserForm(true);
    setValue("");
    setMessageError(false);
  }
  // console.log(profiles.length)
  return (
    <section className='bg-default h-[100vh] text-[grey] flex items-center justify-center py-5'>
 
    <div className={`flex items-center flex-col max-w-[614px] w-full px-3 ${newUserForm && "hidden"}`}>
      <h2 className='text-6xl text-[#fff]'>Кто здесь?</h2>

      <ul className='flex my-7 sm:flex-wrap sm:justify-center'>
      
        {profiles === undefined || 0 ? "Loading..." :
         <>
          {profiles.map((user,id)=>
          <UserProfile key={id} name={user.name}/>
          )}
         </>
        }

      <Link to="/movie">
        <li className='w-[153px] h-[201px] sm:w-[140px] sm:h-[175px] cursor-pointer group mr-7 group flex items-center flex-col'> 
            <div className='rounded-md border-4 border-transparent bg-center bg-cover w-full h-full group-hover:buttonUserScreen' style={{backgroundImage:`url("https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg")`}}></div>
            <span className='mt-3 group-hover:text-[#fff]'>Kids</span>
        </li>
      </Link>
     {profiles.length !== 4 ? 
     (<li className='w-[153px] h-[201px] sm:w-[140px] sm:h-[175px] cursor-pointer group group flex items-center flex-col' onClick={handleNew}>
          <div className='rounded-md flex justify-center items-center bg-center bg-cover w-full h-full group-hover:bg-[#d6d3d3] transition-all'><AddNewIcon styles={'text-7xl sm:text-6xl text-[#000] bg-[#666] group-hover:text-[#fff] rounded-full'}/></div>
          <span className='mt-3 group-hover:text-[#fff]'>Новый</span>
      </li>) : ''}
     
      </ul>
      <div className='flex flex-col items-center'>
        <button className='border-solid border-[grey] border px-6 py-2 mb-5 text-xl hover:text-[#fff] hover:border-[#fff]'>Управление профилями</button>
        <Link to={"movie"} className="hover:text-[red]">Back</Link>
      </div>
    </div>

    <div className={`transition-all max-w-[614px] p-5 w-full ${newUserForm ? "block" : "hidden"}`}>
      <h2 className='text-6xl text-[#fff] mb-5 font-semibold sm:text-4xl'>Новый</h2>
      <p className='mb-5 text-lg sm:text-sm'>Добавьте профиль для другого пользователя Netflix.</p>

      <form onSubmit={handleSudmitProfile}>
        <div className='flex py-5 border-y-[1px] border-[grey] mb-8 justify-between items-center lit:flex-col'>
          <div className='w-[122px] h-[122px] mr-4 lit:mr-0 lit:mb-3'><img className='rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user profile img"/></div>
            <div className='grow relative lit:mb-7'>
              <input
                onChange={handleChange}
                className={`w-full px-3 py-2 border-2 outline-0 border-transparent bg-[#666] text-[#fff] text-lg ${messageError&&name.length <= 0 ? "border-[red]" : ""}`}
                type="text"
                placeholder='Имя'
                value={name}
                />
              {messageError&&name.length <= 0 ? <span className='absolute top-[100%] left-0 text-[#ff0000bf]'>Укажите имя.</span> : ""}
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
        <button onClick={handleUndo} className='text-xl font-medium px-8 pt-1 pb-2 border-[1px] border-[grey] hover:text-[#fff] hover:border-[#fff]'>Отмена</button>
      </form>

    </div>
    
    </section>
  )
}
