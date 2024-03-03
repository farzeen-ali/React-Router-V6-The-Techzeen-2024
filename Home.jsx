import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
const Home = () => {
  // const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('login');
    navigate('/login')
  }
  return (
    <>
     <h2>Home</h2>
     <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
