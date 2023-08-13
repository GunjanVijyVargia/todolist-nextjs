"use client";
import React, { useEffect, useState } from "react";
import TodoFrom from "../todoFrom";
import TodoList from "../todoList";
function TodoPage() {
  const [listItem, setListItem] = useState([]);
  const [editListItem, setEditListItem] = useState(null);
  const [editListItemText, setEditListItemText] = useState("");

  const addTodo = (text) => {
    setListItem([...listItem, { id: listItem.length + 1, text }]);
  };
  const handleDeleteItems = (id) => {
    setListItem(listItem.filter((data) => data.id !== id));
  };
  // localStorage.setItem("items", JSON.stringify(listItem));
  const markAsComplete = (id) => {
    setListItem(
      [...listItem].map((item) => {
        if (item.id == id) {
          item.complete = !item.complete;
        }
        return item;
      })
    );
  };
  const handleEditListItems = (id) => {
    setEditListItem(id);
  };
  const handleEditListText = (e) => {
    setEditListItemText(e.target.value);
  };
  const handleSubmitEditText = (id) => {
    setListItem(
      [...listItem].filter((item) => {
        if (item.id === id) {
          item.text = editListItemText;
        }
        return item;
      })
    );
    setEditListItem(null);
    setEditListItemText("");
  };
  return (
    <div className=" border-purple-500 border rounded px-4 py-4 bg-white shadow  lg:w-[40%] xs:w-[100%] ">
      <span className="m-0 text-center font-semibold text-lg mb-2">
        Todo List
      </span>
      <div className="w-full">
        <TodoFrom addTodo={addTodo} />
        <TodoList
          listItem={listItem}
          handleDeleteItems={handleDeleteItems}
          markAsComplete={markAsComplete}
          handleEditListItems={handleEditListItems}
          handleEditListText={handleEditListText}
          editListItemText={editListItemText}
          editListItem={editListItem}
          handleSubmitEditText={handleSubmitEditText}
        />
      </div>
    </div>
  );
}

export default TodoPage;
