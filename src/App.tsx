import { useEffect } from 'react';
import './App.css';
import { getTodos } from './store/redux/thunk/todoThunk';
import { useAppDispatch, useAppSelector } from './hooks/redux';

const App = () => {
  const dispatch = useAppDispatch();

  const {todos} = useAppSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  },[])

  return <div>yo</div>;
};

export default App;
