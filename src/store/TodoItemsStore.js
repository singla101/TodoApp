import { createContext, useReducer } from "react";
import { useCallback } from "react";
export const TodoItemsStore = createContext({
  items: [],
  onNewItem: () => {},
  OnDeleteItem: () => {},
  OnDeleteAll: () => {},
});
const itemsreducer = (curritems, action) => {
  let newitems = curritems;
  if (action.type === "ADD_ITEM") {
    const itemname = action.payload.itemName;
    const itemduedate = action.payload.itemdueDate;

    if (!(itemname && itemduedate)) {
      alert("please enter valid details");
    } else {
      newitems = [...curritems, { name: itemname, dueDate: itemduedate }];
    }
  }

  if (action.type === "DELETE_ITEM") {
    const index = action.payload.index;
    newitems = curritems.filter((_, i) => i !== index);
  }

  if (action.type === "DELETE_ALL") {
    const indices = action.payload.indices;
    newitems = curritems.filter((_, index) => !indices.includes(index));
  }
  return newitems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [items, dispatchitems] = useReducer(itemsreducer, []);

  const onNewItem = (itemName, itemdueDate) => {
    const additemreducer = {
      type: "ADD_ITEM",
      payload: {
        itemName,
        itemdueDate,
      },
    };

    dispatchitems(additemreducer);
  };

  const OnDeleteItem = (index) => {
    const deleteitem = {
      type: "DELETE_ITEM",
      payload: {
        index,
      },
    };

    dispatchitems(deleteitem);
  };

  const OnDeleteAll = useCallback(
    (indices) => {
      dispatchitems({
        type: "DELETE_ALL",
        payload: {
          indices,
        },
      });
    },
    [dispatchitems]
  );

  return (
    <TodoItemsStore.Provider
      value={{ items, onNewItem, OnDeleteItem, OnDeleteAll }}
    >
      {children}
    </TodoItemsStore.Provider>
  );
};

export default TodoItemsContextProvider;
