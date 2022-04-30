import logo from './logo.svg';
import './App.css';

function App() {
  let counter = 0;
  let number = document.getElementById('number');
  number.innerHTML = counter;


  const addHandle = ()=>{
    counter++;
    number.innerHTML = counter;

  }

  const decreaseHandle = ()=>{
    counter--;
    number.innerHTML = counter;
  }

  const resetHandle = ()=>{
    counter = 0;
    number.innerHTML = counter;

  }


  return (
    <div className="App">
      

  <div className = "counter-card">
    <h1>ROCKSON ADJAH-TETTEH'S NEW REACT-APP</h1>
    <p id='number'></p>
    <div>
      <br></br>
      <button id= "Add" onClick= {addHandle}>Add</button>

      <button id= "Decrease" onClick = {decreaseHandle}>Decrease</button>
      <button id="Reset" onClick = {resetHandle}>Reset</button>
    </div>
  </div>
    </div>
  );
}

export default App;

