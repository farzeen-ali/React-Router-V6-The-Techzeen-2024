import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Company = () => {
  return (
    <>
     <h2>Company</h2> 
     <Link to='admin'>Admin</Link>
     <Link to='faculty'>Faculty</Link>
     <Link to='student'>Student</Link>
     <Outlet />
    </>
  );
}

export default Company;
