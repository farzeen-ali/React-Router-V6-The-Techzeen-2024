import React from 'react';
import { useParams } from 'react-router-dom';

const Employee = () => {
    const {name, age} = useParams();
  return (
    <>
     <h1>{name} is a Employee and His age is {age} </h1> 
    </>
  );
}

export default Employee;
