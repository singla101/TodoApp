import Header from "./Components/Header";
import ItemHeader from "./Components/ItemHeader";
import Nothing from "./Components/Nothing";
import TodoItemsContextProvider from "./store/TodoItemsStore";
import TodoItems from "./Components/TodoItems";

function App() {
  return (
    <center className="container">
      <TodoItemsContextProvider>
        <Header value="TODO App" />
        <ItemHeader />
        <Nothing />
        <TodoItems />
      </TodoItemsContextProvider>
    </center>
  );
}

export default App;
