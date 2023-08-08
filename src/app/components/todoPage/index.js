"use client";
import React, { useState } from "react";
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
  return (
    <>
      <h1>Todo List</h1>
      <div>
        <TodoFrom addTodo={addTodo} />
        <TodoList listItem={listItem} handleDeleteItems={handleDeleteItems} />
      </div>
    </>
  );
}

export default TodoPage;
