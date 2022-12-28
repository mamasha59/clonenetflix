import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';
import React from 'react';

import FormSign from "./components/FormSign/FormSign";
import Movies from "./components/movies/Movies";
import User from "./components/User/User";
import Protected from "./components/ProtectedRoute/ProtectedRoute";
import { reqApiUrl } from "./utils/fetch";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";
import { UserData } from "./context/Context";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false); // state of auth
  const [messageError, setMessageError] = React.useState('');
  const [user, setUser] = React.useState({}); // current user's data
  const redirect = useNavigate(); // navigation on the webpage

  const checkToken = React.useCallback(() => { //  to load data if there is a jwt token in cookies
     axios.get(reqApiUrl+"/me",{ withCredentials: true })
      .then((user) => {
        setLoggedIn(true);
        <Navigate replace={true} to='/movies'/>
        redirect('/movie')
        setUser(user.data);
      })
      .catch((error) => {
        setLoggedIn(false);
        console.log(error)
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  React.useEffect(()=>{ // immediately start function while page is loaded
    checkToken()
  },[checkToken])
  
  async function handleSubmitSignUp({email,password}){ // function to make new user
    await axios.post(reqApiUrl+"/signup",{email,password},{ withCredentials: true })
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
  async function handleSubmitSignIn({email,password}){    // log in function
     await axios.post(reqApiUrl+"/signin",{email,password},{ withCredentials: true })
      .then((res) => {
        if(!res){
          setMessageError("Что то пошло не так")
        }
        setUser(res.data);
        setLoggedIn(true)
        redirect("/")
      })
      .catch((err)=>{
        if(err.response.status === 401){
            setMessageError( "Неправильные почта или пароль")
        }
      })
  }
  const handleSignOut = () =>{
    return axios.get(reqApiUrl+"/signout",{ withCredentials: true })
    .then(()=>{
      setLoggedIn(false)
      localStorage.clear()
      redirect("/signup")
    })
  }

  const createProfile = async(name) =>{ // post new profile in data base
   await axios.post(reqApiUrl+"/createProfile",{name},{ withCredentials: true })
  }

  return (
  <UserData.Provider value={user}>
    <Routes>
        <Route
          path="/"
          element={<Protected loggedIn={loggedIn}><User createProfile={createProfile}/></Protected> }
        />
        <Route
          path="/movie"
          element={<Protected loggedIn={loggedIn}> <Movies handleSignOut={handleSignOut}/> </Protected>}
        />
        <Route path="/signup" element={<FormSign register={handleSubmitSignUp} messageError={messageError}/>} />
        <Route path="/signin" element={<FormSign login={handleSubmitSignIn} messageError={messageError}/>} />
        <Route path="*" element={<ErrorScreen/>}></Route>
    </Routes>
  </UserData.Provider>
  )
}