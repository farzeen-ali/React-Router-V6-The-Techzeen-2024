import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Employee = () => {
  const location = useLocation();
  console.log(location);
    const {name, age} = useParams();
  return (
    <>
     <h1>{name} is a Employee and His age is {age} </h1> 
    </>
  );
}

export default Employee;
