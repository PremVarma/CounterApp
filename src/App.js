import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Button } from './components/Button';
import {incrementCount, decrementCount} from './redux/actions/counter';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const onClickHandler=(operation)=>{
    if(operation==="+"){
      dispatch(incrementCount())
    }else{
      dispatch(decrementCount())
    }
  }

  return (
    <div className="App">
        <h3>You can see live count ↓ </h3>
        <div className="countContainer">{count}</div>
        <Button title="+" onClickHandler={onClickHandler}/>
        <Button className="button error" title="-" onClickHandler={onClickHandler}/>
    </div>
  );
}

export default App;
