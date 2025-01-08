import { useContext, useRef } from "react";
import styles from "../css-modules/ItemHeader.module.css";
import { MdOutlineAddComment } from "react-icons/md";
import { TodoItemsStore } from "../store/TodoItemsStore";

function ItemHeader() {
  const text = useRef("");
  const date = useRef("");
  const { onNewItem } = useContext(TodoItemsStore);

  const handleAddClick = (event) => {
    event.preventDefault();
    onNewItem(text.current.value, date.current.value);
    text.current.value = "";
    date.current.value = "";
  };

  return (
    <form className="row" onSubmit={handleAddClick}>
      <div className="col-6">
        <input
          type="text"
          ref={text}
          placeholder="Enter TODO here"
          className={styles.elementStyle}
        />
      </div>
      <div className="col-4">
        <input type="date" className={styles.elementStyle} ref={date} />
      </div>
      <div className="col-2">
        <button
          type="Submit"
          className={`${styles.buttonStyle} btn btn-success`}
        >
          <MdOutlineAddComment />
        </button>
      </div>
    </form>
  );
}

export default ItemHeader;
