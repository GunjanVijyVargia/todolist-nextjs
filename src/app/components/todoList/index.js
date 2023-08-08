import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoList({ listItem, handleDeleteItems }) {
  return (
    <div className="bg-white rounded-lg px-3 py-3 border border-purple-400 my-4">
      <h1 className="text-center font-semibold text-lg mb-2">List Item</h1>
      {listItem.map((item, i) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between border px-3 py-2 capitalize rounded-lg "
          >
            {item.input}
            <FontAwesomeIcon
              onClick={() => handleDeleteItems(item.id)}
              icon={faTrash}
              className="fas fa-trash bg-[#dc2626] py-3 px-3 rounded text-white"
            ></FontAwesomeIcon>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
