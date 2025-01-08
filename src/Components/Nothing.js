import { useContext } from "react";
import { TodoItemsStore } from "../store/TodoItemsStore";

function Nothing() {
  const { items } = useContext(TodoItemsStore);
  return items.length === 0 && <h1>There is nothing to do.</h1>;
}

export default Nothing;
