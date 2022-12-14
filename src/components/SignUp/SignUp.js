import React, { useRef } from 'react'

export default function SignUp() {

    const email = useRef();
    const password = useRef();
    const handleSubmit = () =>{
        console.log(email.current.value, password.current.value)
    }
  return (
    <section className='bg-default h-[100vh] flex flex-col items-center justify-center relative bg-center bg-cover text-[grey] z-0 
    after:bg-defaultOpacity after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-[1]' 
    style={{backgroundImage:`url("https://www.pazarlamasyon.com/wp-content/uploads/2019/10/Netflix-4.jpg")`}}>
        
        <div className='cursor-pointer max-h-[80px] absolute top-0 left-0 ml-10 z-10'>
            <img className='max-w-[140px]'src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo Netflix" />
        </div>
        <div className='flex flex-col px-[60px] py-7 bg-[#000000b0] z-10 rounded-md max-w-[400px] w-full m-2'>
            <h2 className='text-4xl mb-6 font-bold text-[#fff]'>Sign Up</h2>
            <form action="#" onSubmit={handleSubmit} className='flex flex-col text-[#000]'>
                <label className='mb-6' htmlFor="">
                    <input ref={email} className='px-4 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type="text" placeholder='Email'/>
                </label>
                <label htmlFor="">
                    <input ref={password} className='px-4 py-3 max-w-[320px] w-full bg-[#8080807f] text-[#fff] rounded-md placeholder:text-[#c4b7b7]' type="text" placeholder='Password'/>
                </label>
                <button className='my-6 bg-[red] rounded-md py-2 text-[#fff]'>Sign Up</button>
            </form>
            <p>New to Netflix?<button className='text-[#fff] text ml-1'>Sign up Now.</button></p>
        </div>
    </section>
  )
}
