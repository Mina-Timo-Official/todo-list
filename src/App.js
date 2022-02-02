import './App.css';
import { useDispatch} from 'react-redux'
import { todoActions } from './todo/actions';

import TodoPupup from './components/TodoPupup'; 
import TodoList from './components/TodoList'; 
import { Button } from 'antd';

function App() { 
  const dispatch = useDispatch()

  const openClosePopup = () => {
      dispatch(todoActions.openCloseTodoPupup())
  }

  return (
    <div className="App">
      <Button className='AddTask' onClick={() => openClosePopup()}>
      <i className="fas fa-plus"></i>Add Task</Button>
      <TodoPupup />
      <TodoList />
    </div>
  );
}

export default App;
