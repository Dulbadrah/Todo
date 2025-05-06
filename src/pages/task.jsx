export const Task = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        height: "62px",
        width: "345px",
        backgroundColor: "rgb(208, 210, 213)",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <input type="checkbox" placeholder="new text" />
        <div style={{ paddingTop: "20px" }}></div>
      </div>
      <div
        style={{
          width: "67px",
          height: "30px",
          paddingTop: "20px",
        }}
      >
        <button>delete</button>
      </div>
    </div>
  );
};
