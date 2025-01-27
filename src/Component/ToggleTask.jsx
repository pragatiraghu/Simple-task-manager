import React from "react";

const ToggleTask = ({ task, setTasks }) => {
  const toggleCompletion = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <button
      onClick={toggleCompletion}
      className={`p-2 rounded-lg ${
        task.completed ? "bg-gray-400" : "bg-blue-500"
      } text-white`}
    >
      {task.completed ? "✅ Done" : "🔄 Mark Done"}
    </button>
  );
};

export default ToggleTask;
