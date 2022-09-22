import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function decrement(){
    setCount(count - 1)
  }

  function increment(){
    setCount(prevCount => prevCount + 1)
  } 

  const [state, setState] = useState({num: 0, bole: false });
  const [truer, setTruer] = useState("true")

  function incrementNum(){
    setState(prevState => { 
      return {...prevState, num: prevState.num + 1}
    })
  } 

  function changeBole(){
    setState(prevState => { 
      return {...prevState, bole: !prevState.bole}
    }) 
    if(state.bole === true){
     setTruer("true")
    }
    if(state.bole === false){
      setTruer("false")
     }
  } 

  return (
    <div className="App">
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={incrementNum}>+</button>
        <span>{state.num}</span>
        <button onClick={changeBole}>?</button>
        <span>{truer}</span>
      </div>   
    </div>
  );
}

export default App;
