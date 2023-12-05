import { Todo } from 'types';
import TodoItem from 'components/TodoItem';
import { useAppDispatch, useAppSelector } from 'redux-hooks';
import { removeTodo, toggleTodo } from './todoSlice';

const TodoList = () => {
  const list = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  }

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id));
  }

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

export default TodoList;
