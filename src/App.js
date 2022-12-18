import { Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

import FormSign from "./components/FormSign/FormSign";
import Movies from "./components/movies/Movies";
import User from "./components/User/User";
import Protected from "./components/ProtectedRoute/ProtectedRoute";
import { reqApiUrl } from "./utils/fetch";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const redirect = useNavigate(); // hook to redirect when user  created
  const [messageError, setMessageError] = useState('');
  
  async function handleSubmitSignUp({email,password}){ // function to make new user
    await axios.post(reqApiUrl+"/signup",{email,password})
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        setMessageError("Account created!")
          redirect("/signin")
      }
      if (res.status === 400) {
          console.log("Такой email уже существует")
      }
      }).catch((err) => {
          if(err.response.status === 409){
            setMessageError("email уже используется!")
          }
      })
  }
  async function handleSubmitSignIn({email,password}){// log in function
      axios.post(reqApiUrl+"/signin",{email,password})
      .then((res) => {
        if(!res){
          setMessageError("Что то пошло не так")
        }
        setLoggedIn(true)
        redirect("/")
      })
      .then((res)=>{})
  }
  return (
  <Routes>
      <Route
        path="/"
        element={<Protected loggedIn={loggedIn}><User/></Protected> }
      />
      <Route
        path="/movie"
        element={<Protected loggedIn={loggedIn}> <Movies/> </Protected>}
      />
      <Route path="/signup" element={<FormSign register={handleSubmitSignUp} messageError={messageError}/>} />
      <Route path="/signin" element={<FormSign login={handleSubmitSignIn}/>} />
  </Routes>
  )
}