import { useState } from "react";
import { Task } from "@/pages/task";
export default function Home() {
  const componont = 0;
  const [text, setText] = useState([]);
  const onChangeText = (event) => {
    const typedText = event.target.value;

    setText(typedText);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          borderRadius: "40px",
          border: "solid 1px black",
          width: "377px",
          height: "462px",
        }}
      >
        <h1>To-Do List</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            style={{
              borderRadius: "6px",
              width: "180px",
            }}
            onChange={onChangeText}
            placeholder="Add a new task"
          />
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "6px",
            }}
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
              width: "40px",
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
        <div>
          <Task />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <div>Powered by</div>
          <a href="">Pinecone academy</a>
        </div>
      </div>
    </div>
  );
}
