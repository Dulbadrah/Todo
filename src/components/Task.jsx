export const Task = ({ task, removeTaskById, ToggleCheckBox }) => {
  const handleToggleCheckBox = () => {
    ToggleCheckBox(task.id);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        height: "62px",
        width: "345px",
        borderRadius: "20px",
        backgroundColor: "rgb(208, 210, 213)",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <input
          type="checkbox"
          placeholder="new text"
          checked={task.isCompleted}
          onChange={handleToggleCheckBox}
        />
        <div style={{ paddingTop: "20px" }}>{task.taskName}</div>
      </div>
      <div
        style={{
          width: "67px",
          height: "30px",
          paddingTop: "20px",
        }}
      >
        <button onClick={() => removeTaskById}>delete</button>
      </div>
    </div>
  );
};
