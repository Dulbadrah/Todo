import { useState } from "react";


export const Form = ({ setTaskList, taskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };

    setTaskList([...taskList, newTask]);
    setInputValue("");
  };

  return (
    <div style={{ display: "flex",
      gap: "6px"}}>
      <div>
        <input
        style={{width: "248px",
          padding: "12px 16px",
        borderRadius:"10px"}}
          value={inputValue}
          placeholder="Add a new task..."
      
          onChange={handleChange}
        />
      </div>
      <div>       
        <button style={{ padding:" 12px 16px",borderRadius:"10px",backgroundColor:"blue",color:"white"}} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};
