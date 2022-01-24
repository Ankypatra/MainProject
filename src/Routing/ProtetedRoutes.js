import React from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtetedRoutes = () => {
    const isToken=window.sessionStorage.getItem('Token')
  return isToken?<Outlet/> : <Navigate to={"/Login_Page"}/>;
};

export default ProtetedRoutes;
