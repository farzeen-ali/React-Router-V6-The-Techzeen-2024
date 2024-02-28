import React from 'react';
import {useSearchParams} from 'react-router-dom'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const myName = searchParams.get('name')
    const myAge = searchParams.get('age')
  return (
    <>
     <h2>Search Params</h2> 
     <h4>My Name Is {myName} and My Age is {myAge} </h4>
     <input placeholder='Enter Your Details' type='text' onChange={(e) => setSearchParams({name:e.target.value, age:21})} />
     <button onClick={() => setSearchParams({name: 'farzeen', age: 25})}>Set Details</button>
    </>
  );
}

export default Search;
