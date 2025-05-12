export const Task = ({ task, removeTaskById, toggleCheckBox }) => {
  const handleToggleCheckBox = () => {
    toggleCheckBox(task.id);
  };

  const handleDelete = () => {
    removeTaskById(task.id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "300px",
        backgroundColor: "#F3F4F6",
        padding: "12px 16px",
        alignItems: "center",
        borderRadius: "8px",
        marginBottom: "8px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleToggleCheckBox}
        />
        <p
          style={{
            margin: 0,
            textDecoration: task.isCompleted ? "line-through" : "none",
            color: task.isCompleted ? "#9CA3AF" : "#111827",
          }}
        >
          {task.taskName}
        </p>
      </div>{" "}
      <button
        style={{ borderRadius: "5px",}}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
