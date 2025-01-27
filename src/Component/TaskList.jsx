import React from "react";
import ToggleTask from "./ToggleTask";
import DeleteTask from "./DeleteTask";

const TaskList = ({ tasks = [], setTasks }) => {
  if (!tasks.length) {
    return <p className="text-center text-gray-500 mt-4">📭 No tasks available.</p>;
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`p-4 rounded-lg shadow-md flex justify-between items-center border-l-4 ${
            task.priority === "High"
              ? "border-red-500"
              : task.priority === "Medium"
              ? "border-yellow-500"
              : "border-green-500"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold">
              {task.title}{" "}
              <span className="text-sm text-gray-500">({task.priority})</span>
            </h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-400">📅 Due: {task.dueDate}</p>
          </div>

          <div className="flex space-x-2">
            <ToggleTask task={task} setTasks={setTasks} />
            <DeleteTask taskId={task.id} setTasks={setTasks} tasks={tasks} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
