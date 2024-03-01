import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
     <h2>Home</h2>
    </>
  );
}

export default Home;
