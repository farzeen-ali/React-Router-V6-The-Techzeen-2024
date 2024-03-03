import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (prop) => {
    let navigate = useNavigate();
    const {Component} = prop;
    useEffect(() => {
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })
  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
