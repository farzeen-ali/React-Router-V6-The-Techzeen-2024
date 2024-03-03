import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem('login', true);
        navigate('/')
    }
    useEffect(() => {
        let login = localStorage.getItem('login')
        if(login){
            navigate('/')
        }
    })
  return (
    <>
     <h2>Login</h2>
     <button onClick={handleLogin}>Login</button> 
    </>
  );
}

export default Login;
