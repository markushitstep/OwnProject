import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchTodos, getTodos } from './store/redux/thunk/todoThunk';


const test = fetchTodos()

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //test()
    fetchTodos()
    dispatch(fetchTodos());
  },[])

  return <div>yo</div>;
};

export default App;
