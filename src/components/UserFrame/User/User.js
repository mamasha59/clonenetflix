import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AddNewIcon } from '../../../icons/icons';

import CreateProfileForm from '../CreateProfileForm/CreateProfileForm';
import UserFrame from '../UserFrame';
import UserProfileItem from '../UserProfileItem/UserProfileItem';

export default function User({createProfile}) {
  
  const {profiles} = useSelector(data => data.user); // currect data from redux

  const [newUserForm, setNewUserForm] = React.useState(false); // state to change form, from - Who's here? to - Create new profile
  const [messageError, setMessageError] = React.useState(null); // to set Error message if input is empty

  const handleSudmitProfile = (name) =>{ // function to set new profile
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

  const handleUndo = (e) =>{ // when push button Cancel it will reset error state
    e.preventDefault()
    setMessageError(false);
    setNewUserForm(false);
  }

  const handleNew = () =>{  // when push button New it will reset error state
    setNewUserForm(true);
    setMessageError(false);
  }

  return (
  <UserFrame>
    <div className={`flex items-center flex-col max-w-[614px] w-full px-3 ${newUserForm && "hidden"}`}>
    <h2 className='text-6xl text-[#fff]'>Кто здесь?</h2>

      <ul className='flex my-7 md:flex-wrap sm:justify-center'>
        {profiles === undefined || 0 ? "Loading..." :
         <>
          {profiles.map((user,id)=> 
          <UserProfileItem redirect={"movie"} key={id} name={user.name} id={user._id}/>
          )}
         </>
         }

        <UserProfileItem id={123123} redirect={"movie"} name={"Kids"} bgImg={"https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"}/>
      
        {profiles.length !== 4 && // button add New profile
            (<li className='w-[153px] h-[201px] sm:w-[140px] sm:h-[175px] cursor-pointer group group flex items-center flex-col' onClick={handleNew}>
              <div className='rounded-md flex justify-center items-center bg-center bg-cover w-full h-full group-hover:bg-[#d6d3d3] transition-all'>
                <AddNewIcon styles={'text-7xl sm:text-6xl text-[#000] bg-[#666] group-hover:text-[#fff] rounded-full'}/>  
              </div>
              <span className='mt-3 group-hover:text-[#fff]'>Новый</span>
            </li>)}
      </ul>
        <Link to="/manage"><button className='border-solid border-[grey] border px-6 py-2 mb-5 text-xl hover:text-[#fff] hover:border-[#fff]'>Управление профилями</button></Link>
    </div>
  
    <CreateProfileForm
      error={messageError}
      handleForm={newUserForm}
      onSubmit={handleSudmitProfile}
      cancelButton={handleUndo}
    />

 </UserFrame>
  )
}
