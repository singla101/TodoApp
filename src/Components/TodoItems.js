import { useState, useEffect, useContext } from "react";
import styles from "../css-modules/TodoItems.module.css";
import { TodoItemsStore } from "../store/TodoItemsStore";

function TodoItems() {
  const { items } = useContext(TodoItemsStore);
  const { OnDeleteItem } = useContext(TodoItemsStore);
  const { OnDeleteAll } = useContext(TodoItemsStore);
  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );

  useEffect(() => {
    setCheckedItems(new Array(items.length).fill(false));
  }, [items]);

  const handleCheckboxChange = (index) => {
    setCheckedItems((checkedItems) => {
      const updatedCheckedItems = [...checkedItems];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      return updatedCheckedItems;
    });
  };

  const handleDeleteAllChecked = () => {
    const itemsToDelete = items
      .map((item, index) => (checkedItems[index] ? index : null))
      .filter((index) => index !== null);

    OnDeleteAll(itemsToDelete);
  };

  return (
    <>
      <div className="container row">
        {items.map((item, index) => (
          <div className={`${styles.elementStyle} row`} key={index}>
            <div className="form-check col-6">
              <input
                className={styles.checkStyle}
                type="checkbox"
                id={`checkbox-${index}`}
                checked={checkedItems[index] || false} // Ensures the checkbox is controlled
                onChange={() => handleCheckboxChange(index)}
              />
              <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                {item.name}
              </label>
            </div>
            <div className="col-4">{item.dueDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => OnDeleteItem(index)} // Call the individual delete handler
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 || (
        <button
          type="button"
          className="btn btn-danger mt-3"
          onClick={handleDeleteAllChecked}
        >
          Delete All Checked
        </button>
      )}
    </>
  );
}

export default TodoItems;
