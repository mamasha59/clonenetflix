import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

function Protected({ loggedIn, children }) {
  if (!loggedIn) {
    return <Navigate to="/signup" replace />;
    
  }
  return children ? children : <Outlet/> ;
}
export default Protected;
