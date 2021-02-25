import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [state, setstate] = useState(0)

  const onClickHandler=(value)=>{
    setstate( prevValue=> prevValue + value);
  }

  return (
    <div className="App">
        <h3>You can see live count ↓ </h3>
        <div className="countContainer">{state}</div>
        <Button title="+" onClickHandler={onClickHandler}/>
        <Button className="button error" title="-" onClickHandler={onClickHandler}/>
    </div>
  );
}

export default App;
