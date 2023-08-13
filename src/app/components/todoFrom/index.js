import React, { useState } from "react";
import { toast } from "react-toastify";
function TodoFrom({ addTodo }) {
  const [text, setText] = useState("");
  const handleAddItem = (e) => {
    e.preventDefault();
    if (text == "") {
      toast.error("Please Enter Item");
    } else {
      addTodo(text);
      setText("");
    }
  };
  return (
    <div className="border-2 border-purple-600 rounded-lg  w-full">
      <input
        className="placeholder-white  lg:w-[60%] xs:w-[100%] placeholder-opacity-100 text-white px-9 py-4 border-none appearance-none focus:border-none outline-none bg-purple-600"
        type="text"
        placeholder="Add Todo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={handleAddItem}
        className="  bg-purple-800 text-white px-9 py-4  lg:w-[40%] xs:w-[100%] focus:none rounded-r-[6px] "
      >
        Add
      </button>
    </div>
  );
}

export default TodoFrom;
