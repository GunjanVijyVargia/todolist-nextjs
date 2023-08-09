import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";

function TodoList({
  listItem,
  handleDeleteItems,
  markAsComplete,
  handleEditListItems,
  handleEditListText,
  editListItemText,
  editListItem,
  handleSubmitEditText,
}) {
  return (
    <div className="bg-white rounded-lg px-3 py-3 border border-purple-400 my-4">
      <h1 className="text-center font-semibold text-lg mb-2">List Item</h1>
      {listItem.map((item, i) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between border px-3 py-2 capitalize rounded-lg my-2 "
            style={{ display: item.complete ? "none " : "flex" }}
          >
            {editListItem == item.id ? (
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className="mr-3 border"
                  onChange={handleEditListText}
                  // value={editListItemText}
                  defaultValue={item.text}
                />
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <input
                  type="checkbox"
                  className="mr-3"
                  onChange={() => markAsComplete(item.id)}
                  checked={item.complete}
                />
                {item.text}
              </div>
            )}
            <div className="flex items-center justify-between">
              {editListItem == item.id ? (
                <FontAwesomeIcon
                  onClick={() => handleSubmitEditText(item.id)}
                  icon={faSave}
                  className="fas fa-trash bg-[#dc2626] py-3 px-3 rounded text-white mr-2"
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  onClick={() => handleEditListItems(item.id)}
                  icon={faEdit}
                  className="fas fa-trash bg-[#dc2626] py-3 px-3 rounded text-white mr-2"
                ></FontAwesomeIcon>
              )}
              <FontAwesomeIcon
                onClick={() => handleDeleteItems(item.id)}
                icon={faTrash}
                className="fas fa-trash bg-[#dc2626] py-3 px-3 rounded text-white"
              ></FontAwesomeIcon>
            </div>
          </div>
        );
      })}

      <div>
        <h2 className="text-center font-semibold text-lg mb-2 border-t-2">
          Complete Todo's
        </h2>
        {listItem.map((item, i) => {
          if (item.complete) {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between border px-3 py-2 capitalize rounded-lg my-2 "
              >
                <s>{item.text}</s>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TodoList;
