import { Todo } from 'types';
import TodoItem from 'components/TodoItem';
import { useAppDispatch } from 'redux-hooks';
import { useSelector } from 'react-redux';
import { selectAsyncTodos } from './AsyncTodoSelectors';
import { useEffect } from 'react';
import { fetchAllTodos } from './todoAsyncActions';

const AsyncTodoList = () => {
  const {list} = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    // dispatch(removeTodo(id));
  }

  const handleToggleTodo = (id: Todo['id']) => {
    // dispatch(toggleTodo(id));
  }

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [])

  return (
    <ul>
      {list.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            removeTodo={handleRemoveTodo}
            toggleTodo={handleToggleTodo}
          />
        );
      })}
    </ul>
  );
};

export default AsyncTodoList;
