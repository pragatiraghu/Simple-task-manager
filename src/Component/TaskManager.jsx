import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📌 Simple Task Manager</h1>
      
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>

        <AddTask setTasks={setTasks} tasks={tasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default TaskManager;
