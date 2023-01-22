import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';

function Protected({ children }) {
  const {isLoggedIn} = useSelector(data => data.user); // currect data from redux

  if (!isLoggedIn) {
    return <Navigate to="/signup" replace />;
    
  }
  return children ? children : <Outlet/> ;
}
export default Protected;
