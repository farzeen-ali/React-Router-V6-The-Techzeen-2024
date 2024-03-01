import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
     <h2>About</h2>
     <li><Link to="/employee/farzeen/23" state={{name:'farzeen ali', age:23}}>Farzeen</Link></li>
      <li><Link to="/employee/huzaifa/22">Huzaifa</Link></li>
    </>
  );
}

export default About;
