import NewItem from "components/NewItem";
import { useAppDispatch } from "redux-hooks";
import { addTodo } from "./todoSlice";

export const NewTodo = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(addTodo(title));
  }

  return (
    <NewItem
      placeholder="add new todo"
      handleClick={handleNewTodo}
    />
  )
}