import React, { useRef, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { IoEyeSharp } from 'react-icons/io5';

export default function FormSign({register, login, messageError}) {

    const email = useRef(null); // input email
    const password = useRef(null);// input password
    const [showPas, setShowPass] = useState(false);// state to show password or hide

    const urlAdress = useLocation(); // hook to determine currently url name

    const showError = (text) =>{ // function to set message of form and then hide it
        setTimeout(()=>{text("")},5000) // after 5seconds it'l hide
    }
  // function validateEmail(string) {
    //     var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //     return re.test(String(string).toLowerCase());
    // }
    function signUp(e){         // function to make new user
        e.preventDefault();
        register({email: email.current.value,password: password.current.value})
    }
    function signIn(e){         // log in function
        e.preventDefault()
        login({email: email.current.value,password: password.current.value})
    }
  return (
    <section className='bg-default h-[100vh] flex flex-col items-center justify-center relative bg-center bg-cover text-[grey] z-0 
    after:bg-defaultOpacity after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-[1]' 
    style={{backgroundImage:`url("https://www.pazarlamasyon.com/wp-content/uploads/2019/10/Netflix-4.jpg")`}}>
        
        <div className='cursor-pointer max-h-[80px] absolute top-0 left-0 ml-10 z-10'>
            <img className='max-w-[140px]'src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo Netflix" />
        </div>

    <div className='flex flex-col px-[60px] py-7 bg-[#000000b0] z-10 rounded-md max-w-[400px] w-full m-2 relative'>
            <span className='text-[#ff0000a5] absolute right-0 top-1 first-letter:uppercase transition-all mr-2 underline'>{messageError}</span>

    {urlAdress.pathname === "/signup" 
    ? (<h2 className='text-4xl mb-6 font-bold text-[#fff]'>Sign Up</h2>)
    : (<h2 className='text-4xl mb-6 font-bold text-[#fff]'>Sign In</h2>)
    }

       {urlAdress.pathname === "/signup" ?
           ( <form action="post" onSubmit={signUp} className='flex flex-col text-[#000]'>
                <label className='mb-6'>
                    <input autoComplete='on' required ref={email} className='px-4 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type="email" placeholder='Email'/>
                </label>
                <label className='relative'>
                    <input required ref={password} className='px-3 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type={showPas ? 'password' : 'text'} placeholder='Password'/>
                   <div onClick={()=>setShowPass(!showPas)} className='absolute top-1 right-1 cursor-pointer'><IoEyeSharp className='text-[red]'/></div> 
                </label>
                <button className='my-6 bg-[red] rounded-md py-2 text-[#fff]'>Sign Up</button>
            </form>)
            :
            (
            <form action="get" onSubmit={signIn} className='flex flex-col text-[#000]'>
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
                  ?  (<p>Already have an account?<Link to="/signin"><button className='text-[#fff] text ml-1'>Sign in Now.</button></Link></p>)
                  :  (<p>New on Netflix?<Link to="/signup"><button className='text-[#fff] text ml-1'>Sign up Now.</button></Link></p>)
                }
    </div>
    </section>
  )
}