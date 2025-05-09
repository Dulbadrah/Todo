import { useState } from "react";
export const Form = ({ setTaskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    setInputValue("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <h1>To-Do List</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <input
          value={inputValue}
          style={{
            borderRadius: "6px",
            width: "180px",
          }}
          placeholder="Add a new task"
          onChange={handleChange}
        />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "6px",
            width: "60px",
            height: "30px",
          }}
          onClick={handleAdd}
        >
          add
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "60px",
            height: "30px",
            borderRadius: "6px",
          }}
        >
          All
        </button>
        <button
          style={{
            borderRadius: "6px",
          }}
        >
          Active
        </button>
        <button
          style={{
            borderRadius: "6px",
          }}
        >
          Completed
        </button>
      </div>
      <div></div>
    </div>
  );
};
