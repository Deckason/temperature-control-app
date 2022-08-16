import {useState} from "react";
import './App.css';

function App() {
  const [temp, setTemp] = useState(10)
  return (
    <div className="App">
      <div className="container">
        <div style={{background: temp > 15 ? "#fc8301" : "#14148d"}} className="degrees">
          <p>{temp}<sup>o</sup>C</p>
        </div>
        <div className="buttons">
          <button onClick={()=>{setTemp(temp === 0 ? 0 : temp-1)}}>-</button>
          <button onClick={()=>{setTemp(temp === 30 ? 30 : temp+1)}}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
