import { NewAsyncTodo } from 'features/AsyncTodo/NewAsyncTodo';
import './App.css';
import TodoList from './features/Todo/TodoList';
import { NewTodo } from 'features/Todo/NewTodo';
import AsyncTodoList from 'features/AsyncTodo/AsyncTodoList';

function App() {
  

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then((data: Todo[]) => {
  //       setTodos(data);
  //     })
  // }, [])

  return (
    <div className="App">
      <NewTodo />
      <TodoList />

      <hr />

      <NewAsyncTodo />
      <AsyncTodoList />
    </div>
  );
}

export default App;
