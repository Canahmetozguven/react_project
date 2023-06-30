import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

/* bu şekilde ayrı ayrı componentler oluşturup sonra 
hepsini bir yerde toplayıp o şekilde kullanıoyruz? */
const Person = (props) =>{
  return(<>
  <h1> name: {props.name}, </h1>
  <h2>lastName: {props.lastName}, </h2>
  <h2>Location: {props.location}</h2>
  <h3>age: {props.age}</h3>
  </>)
}


function App() {
  let name = null
  let isNameShowing = true
  let [prevCount, setCounter] = useState(0);
  useEffect(() => {
    console.log("cont has changed" + prevCount)
  }, [prevCount])
  return (
    <div className="App">
      <Person name={"can ahmet"} lastName={"özgüven"} location={"turkey"} age={15 + 10}/>
      <Person name="can ahmet" lastName="özgüven" location={"tur" + "key"} age = "25"/>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <span>{prevCount}</span>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
}

export default App;
