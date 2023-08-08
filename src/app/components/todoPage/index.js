"use client";
import React, { useEffect, useState } from "react";
import TodoFrom from "../todoFrom";
import TodoList from "../todoList";
function TodoPage() {
  const [listItem, setListItem] = useState([]);
  const addTodo = (input) => {
    setListItem([...listItem, { id: listItem.length + 1, input }]);
  };
  const handleDeleteItems = (id) => {
    setListItem(listItem.filter((data) => data.id !== id));
  };
  localStorage.setItem("items", JSON.stringify(listItem));

  return (
    <div className=" border-purple-500 border rounded px-4 py-4 bg-white shadow ">
      <span className="m-0 text-center font-semibold text-lg mb-2">
        Todo List
      </span>
      <div>
        <TodoFrom addTodo={addTodo} />
        <TodoList listItem={listItem} handleDeleteItems={handleDeleteItems} />
      </div>
    </div>
  );
}

export default TodoPage;
