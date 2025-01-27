import React from "react";

const DeleteTask = ({ taskId, setTasks }) => {
  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <button
      onClick={deleteTask}
      className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
    >
      ❌ Delete
    </button>
  );
};

export default DeleteTask;
