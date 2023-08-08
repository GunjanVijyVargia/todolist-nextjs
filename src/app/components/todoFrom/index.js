import React, { useState } from "react";
import { toast } from "react-toastify";
function TodoFrom({ addTodo }) {
  const [input, setInput] = useState("");
  const handleAddItem = (e) => {
    e.preventDefault();
    if (input == "") {
      toast.error("Please Enter Item");
    } else {
      addTodo(input);
      setInput("");
    }
  };
  return (
    <div className="border-2 border-purple-600 rounded-lg ">
      <input
        className="placeholder-white  placeholder-opacity-100 text-white px-9 py-4 border-none appearance-none focus:border-none outline-none bg-purple-600"
        type="text"
        placeholder="Enter Item Name"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={handleAddItem}
        className="  bg-purple-400 text-white px-9 py-4  focus:none rounded-r-[6px] "
      >
        add item
      </button>
    </div>
  );
}

export default TodoFrom;
