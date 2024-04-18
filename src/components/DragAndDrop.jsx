import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "../styles/dragNdrop.css";


function DragAndDrop() {
  const [list, setList] = useState([
    { id: "item1", color: "red" },
    { id: "item2", color: "blue" },
    { id: "item3", color: "green" },
    { id: "item4", color: "yellow" },
  ]);
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    setDraggingItem(id);
  };

  const handleDrop = (e, items, setItems, removeItemFrom) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData("text");
    if (
      droppedItemId === draggingItem &&
      !items.some((item) => item.id === droppedItemId)
    ) {
      setItems((prevItems) => [
        ...prevItems,
        list.find((item) => item.id === droppedItemId),
      ]);
      removeItemFrom((prevList) =>
        prevList.filter((item) => item.id !== droppedItemId)
      );
      setDraggingItem(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className="links">
          <RiArrowGoBackFill className="icons" />
        </Link>
        <h3>DragNDrag Check</h3>
      </div>
      <div className="dragNdrop_container">
        <div
          className="droppable-container"
          onDrop={(e) => handleDrop(e, droppedItems, setDroppedItems, setList)}
          onDragOver={handleDragOver}
        >
          {droppedItems.map((item) => (
            <div
              key={item.id}
              className="draggable-item"
              style={{ backgroundColor: item.color }}
            >
              {item.id}
            </div>
          ))}
        </div>
        <div
          className="droppable-container"
          onDrop={(e) => handleDrop(e, list, setList, setDroppedItems)}
          onDragOver={handleDragOver}
        >
          {list.length > 0 ? (
            list.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                className="draggable-item"
                style={{ backgroundColor: item.color }}
              >
                {item.id}
              </div>
            ))
          ) : (
            <p>Empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop;
