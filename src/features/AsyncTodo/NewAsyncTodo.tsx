import NewItem from "components/NewItem";
import { useAppDispatch } from "redux-hooks";
import { createTodo } from "./todoAsyncActions";

export const NewAsyncTodo = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(createTodo(title));
  }

  return (
    <NewItem
      placeholder="add new todo"
      handleClick={handleNewTodo}
    />
  )
}