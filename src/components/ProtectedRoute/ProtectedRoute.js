import React from 'react';

import { Navigate } from 'react-router-dom';

function Protected({ loggedIn, children }) {
  if (!loggedIn) {
    return <Navigate to="/signup" replace />
  }
  return children
}
export default Protected;
