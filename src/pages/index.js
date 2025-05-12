import { Filter } from "@/components/filter";
import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleCheckBox = (id) => {
    const toggledTask = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTaskList(toggledTask);
  };

  const filteredTask = taskList.filter((task) => {
    if (filter === "active" && task.isCompleted === false) {
      return task;
    }
    if (filter === "completed" && task.isCompleted === true) {
      return task;
    }
    if (filter === "all") {
      return task;
    }
  });

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "345px",
        width: "100%",
        margin: "auto",
        gap: "10px",
        border: "solid 1px black",
        borderRadius: "30px",
        backgroundColor: "linen",
        
      }}
    >
      <h1>Todo List</h1>

      <Form setTaskList={setTaskList} taskList={taskList} />

      <Filter filter={filter} setFilter={setFilter} />

      {filteredTask.map((task, id) => (
        <Task
          key={id}
          task={task}
          removeTaskById={handleDelete}
          toggleCheckBox={toggleCheckBox}
        />
      ))}
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Poowered By</p>
        <a href="" style={{ paddingTop: "15px" }}>
          Pinecone academy
        </a>
      </div>
    </div>
  );
}
