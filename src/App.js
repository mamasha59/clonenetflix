import { Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { Suspense } from 'react';

import FormSign from "./components/FormSign/FormSign";
import Main from "./components/Main/Main";

import Protected from "./components/ProtectedRoute/ProtectedRoute";
import { reqApiUrl } from "./utils/fetch";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";

import LoaderProfiles from './Loaders/LoaderProfiles/LoaderProfiles'
import UserFrame from "./components/UserFrame/UserFrame";

import { useDispatch } from 'react-redux';
import { setUser, removeUser, addProfile } from './redux/slicers/userSlice'
import { useGetMoviesNetflixQuery } from "./redux/movies.api";
import { clearMovies, setMovies } from "./redux/slicers/moviesSlicer";

const User = React.lazy(()=> import("./components/UserFrame/User/User"));

export default function App() {
  const [messageError, setMessageError] = React.useState(''); // state of error for SIGNIN and SIGNUP

  const redirect = useNavigate(); // navigation on the webpage
  const dispatch = useDispatch(); // dispatch data to redux

  const {data, error, isLoading } = useGetMoviesNetflixQuery(); // fetch movie - netflix trend

  React.useEffect(()=>{ // rendering random background images from movie api
    if(isLoading){
      console.log("loading..");
    }else if(error){
      console.log(error.error);
    }else{
      dispatch(setMovies(data.results[Math.floor(Math.random() * data.results.length)]));
    }
  },[data,error,isLoading,dispatch]);

  const checkToken = React.useCallback(() => { //  to load data if there is a jwt token in cookies`
     axios.get(reqApiUrl+"/me",{ withCredentials: true })
      .then((user) => {
        dispatch(setUser({email:user.data.email, id:user.data._id, profiles:user.data.profiles, isLoggedIn:true}))
        redirect('/movie');
      })
      .catch((error) => {
        dispatch(setUser({isLoggedIn:true}))
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  React.useEffect(()=>{ // immediately start function while page is loaded
    checkToken()
  },[checkToken])

  function validateEmail(string) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(string).toLowerCase());
  }

  async function handleSubmitSignUp({email,password}){    // function to make new user
    if(validateEmail(email)){
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
      setMessageError("")
    }else{
      setMessageError("email should looks like - name@mail.com")
    }
  }

  async function handleSubmitSignIn({email,password}){    // log in function
     await axios.post(reqApiUrl+"/signin",{email,password},{ withCredentials: true })
      .then((res) => {
        if(!res){
          setMessageError("Что то пошло не так")
        }
        dispatch(setUser({email:res.data.data.email, id:res.data.data._id, profiles:res.data.data.profiles, isLoggedIn:true}))
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
      dispatch(setUser({isLoggedIn:true}))
      localStorage.clear();
      redirect("/signup");
      dispatch(removeUser());
      dispatch(clearMovies());
    })
  }

  const createProfile = async(name) =>{     // post new profile in data base
   await axios.post(reqApiUrl+"/createProfile",{name},{ withCredentials: true })
   .then((res)=>{
    dispatch(addProfile({name}))
   })
  }

  return (
    <Routes>
        <Route
          path="/"
          element={<Protected>
                    <Suspense fallback={<UserFrame><LoaderProfiles/></UserFrame>}>
                      <User createProfile={createProfile}/>
                    </Suspense>
                  </Protected> }
        />
        <Route
          path="/movie"
          element={<Protected>
                      <Main handleSignOut={handleSignOut}/>
                  </Protected>}
        />
        <Route path="/signup" element={<FormSign register={handleSubmitSignUp} messageError={messageError}/>} />
        <Route path="/signin" element={<FormSign login={handleSubmitSignIn} messageError={messageError}/>} />
        <Route path="*" element={<ErrorScreen/>}></Route>
    </Routes>
  )
}