import { Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { Suspense } from 'react';

import FormSign from "./components/FormSign/FormSign";
import Main from "./components/Main/Main";

import Protected from "./components/ProtectedRoute/ProtectedRoute";
import { reqApiUrl } from "./utils/fetch";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";
import { UserData } from "./context/Context";

import instance from './utils/fetch';
import requests from './utils/requests';

import LoaderProfiles from './Loaders/LoaderProfiles/LoaderProfiles'
import UserFrame from "./components/UserFrame/UserFrame";

const User = React.lazy(()=> import("./components/UserFrame/User/User"));

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false); // state of auth
  const [messageError, setMessageError] = React.useState(''); // state of error for SIGNIN and SIGNUP
  const [user, setUser] = React.useState({}); // current user's data ???
  
  const [profiles, setProfiles] = React.useState([]); // set USER'S PROFILES
  const [movie,setMovie] = React.useState([]); // set random mobvie background img

  const redirect = useNavigate(); // navigation on the webpage

  React.useEffect(()=>{       // rendering random background images from movie api
    async function fetchData(){
       const request = await instance.get(requests.fetchNetflixOriginals);
       setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]
       )
       return request;
    }
    fetchData();
  },[])

  const checkToken = React.useCallback(() => { //  to load data if there is a jwt token in cookies
     axios.get(reqApiUrl+"/me",{ withCredentials: true })
      .then((user) => {
        setLoggedIn(true);
        redirect('/movie');
        setProfiles(user.data.profiles);
      })
      .catch((error) => {
        setLoggedIn(false);
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  React.useEffect(()=>{ // immediately start function while page is loaded
    checkToken()
  },[checkToken])
  
  async function handleSubmitSignUp({email,password}){    // function to make new user
    await axios.post(reqApiUrl+"/signup",{email,password},{ withCredentials: true })
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        setMessageError("Account created!");
        redirect("/signin");
      }
      if (res.status === 400) {
          console.log("Такой email уже существует");
      }
      }).catch((err) => {
          if(err.response.status === 409){
            setMessageError("email уже используется!");
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
        setLoggedIn(true);
        redirect("/");
      })
      .catch((err)=>{
        if(err.response.status === 401){
            setMessageError( "Неправильные почта или пароль");
        }
      })
  }

  const handleSignOut = () =>{ // signOut and delete cookies and localstorage
    return axios.get(reqApiUrl+"/signout",{ withCredentials: true })
    .then(()=>{
      setLoggedIn(false);
      localStorage.clear();
      redirect("/signup");
      setProfiles([]);
    })
  }

  const createProfile = async(name) =>{     // post new profile in data base
   await axios.post(reqApiUrl+"/createProfile",{name},{ withCredentials: true })
   .then((res)=>{
    setProfiles([...profiles, {name}])
   })
  }

  return (
  <UserData.Provider value={user}>
    <Routes>
        <Route
          path="/"
          element={<Protected loggedIn={loggedIn}>
                    <Suspense fallback={<UserFrame><LoaderProfiles/></UserFrame>}>
                      <User createProfile={createProfile} profiles={profiles}/>
                    </Suspense>
                  </Protected> }
        />
        <Route
          path="/movie"
          element={<Protected loggedIn={loggedIn}>
                      <Main requests={requests} movie={movie} handleSignOut={handleSignOut}/>
                  </Protected>}
        />
        <Route path="/signup" element={<FormSign register={handleSubmitSignUp} messageError={messageError}/>} />
        <Route path="/signin" element={<FormSign login={handleSubmitSignIn} messageError={messageError}/>} />
        <Route path="*" element={<ErrorScreen/>}></Route>
    </Routes>
  </UserData.Provider>
  )
}