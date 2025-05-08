import { Task } from "@/components/Task";
import { Form } from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "solid 1px black",
        width: "377px",
        height: "462px",
        borderRadius: "40px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Form setTaskList={setTaskList} taskList={taskList} />
      {taskList.map((task) => (
        <Task task={task} />
      ))}
      <div style={{ display: "flex", gap: "5px" }}>
        <div>Powered by</div>
        <a href="">Pinecone academy</a>
      </div>
    </div>
  );
}
