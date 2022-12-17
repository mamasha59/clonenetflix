import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoEyeSharp } from 'react-icons/io5';

export default function FormSign() {
    
    const email = useRef(null); // input email
    const password = useRef(null);// input password
    const redirect = useNavigate(); // hook to redirect when user  created
    const [text,setText] = useState(''); // state to show message of form
    const [showPas, setShowPass] = useState(false);// state to show password or hide


    const urlAdress = useLocation(); // hook to determine currently url name

    const showError = (err) =>{ // function to set message of form and then hide it
        setText(err)
        setTimeout(()=>{setText("")},5000) // after 5seconds it'l hide
    }

    // function validateEmail(string) {
    //     var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //     return re.test(String(string).toLowerCase());
    // }

    async function handleSubmit(e){
      e.preventDefault();
      await axios.post("http://localhost:3001/signup",{email: email.current.value,password: password.current.value})
      .then((res) => {
        console.log(res)
        if (res.status === 201 || res.status === 200) {
            showError("Account created!")
            redirect("/movie")
        }
        if (res.status === 400) {
            console.log("Такой email уже существует")
        }
        }).catch((err) => {
            if(err.response.status === 409){
                showError("email уже используется!")
            }
            // console.log("Ошибка регистрации: " + err)
        })
    }
    
  return (
    <section className='bg-default h-[100vh] flex flex-col items-center justify-center relative bg-center bg-cover text-[grey] z-0 
    after:bg-defaultOpacity after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-[1]' 
    style={{backgroundImage:`url("https://www.pazarlamasyon.com/wp-content/uploads/2019/10/Netflix-4.jpg")`}}>
        
        <div className='cursor-pointer max-h-[80px] absolute top-0 left-0 ml-10 z-10'>
            <img className='max-w-[140px]'src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo Netflix" />
        </div>

    <div className='flex flex-col px-[60px] py-7 bg-[#000000b0] z-10 rounded-md max-w-[400px] w-full m-2 relative'>
            <span className='text-[#ff0000a5] absolute right-0 top-1 first-letter:uppercase transition-all mr-2 underline'>{text}</span>

    {urlAdress.pathname === "/signup" 
    ? (<h2 className='text-4xl mb-6 font-bold text-[#fff]'>Sign Up</h2>)
    : (<h2 className='text-4xl mb-6 font-bold text-[#fff]'>Sign In</h2>)
    }

       {urlAdress.pathname === "/signup" ?
           ( <form action="post" onSubmit={handleSubmit} className='flex flex-col text-[#000]'>
                <label className='mb-6'>
                    <input required ref={email} className='px-4 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type="email" placeholder='Email'/>
                </label>
                <label className='relative'>
                    <input required ref={password} className='px-3 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type={showPas ? 'password' : 'text'} placeholder='Password'/>
                   <div onClick={()=>setShowPass(!showPas)} className='absolute top-1 right-1 cursor-pointer'><IoEyeSharp className='text-[red]'/></div> 
                </label>
                <button className='my-6 bg-[red] rounded-md py-2 text-[#fff]'>Sign Up</button>
            </form>)
            :
            (
            <form action="get" onSubmit={handleSubmit} className='flex flex-col text-[#000]'>
                <label className='mb-6'>
                    <input required ref={email} className='px-4 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type="email" placeholder='Email'/>
                </label>
                <label className='relative'>
                    <input required ref={password} className='px-3 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type={showPas ? 'password' : 'text'} placeholder='Password'/>
                   <div onClick={()=>setShowPass(!showPas)} className='absolute top-1 right-1 cursor-pointer'><IoEyeSharp className='text-[red]'/></div> 
                </label>
                <button className='my-6 bg-[red] rounded-md py-2 text-[#fff]'>Sign In</button>
            </form>)
            }
          {urlAdress.pathname === "/signup"  
                  ?  (<Link to="/signin"><p>Already have an account?<button className='text-[#fff] text ml-1'>Sign in Now.</button></p></Link>)
                  :  (<Link to="/signup"><p>New on Netflix?<button className='text-[#fff] text ml-1'>Sign up Now.</button></p></Link>)
                }
    </div>
    </section>
  )
}