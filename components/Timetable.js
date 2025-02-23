"use client";

import { useState, useEffect } from "react";
import NotificationPopup from "../components/NotificationPopup";

export default function Timetable() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // Load tasks from local storage on page load
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Check for notifications every minute
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentTime = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");

      tasks.forEach((t) => {
        if (t.time === currentTime) {
          setPopupMessage(`Reminder: ${t.task}`);
          setShowPopup(true);

          // Hide notification after 5 seconds
          setTimeout(() => setShowPopup(false), 5000);
        }
      });
    };

    const interval = setInterval(checkReminders, 60000);
    return () => clearInterval(interval);
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (task.trim() && time) {
      const newTasks = [...tasks, { task, time }];
      setTasks(newTasks);
      setTask("");
      setTime("");
    }
  };

  // Remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-blue-700">Daily Timetable</h1>
        <p className="text-gray-600 mt-2">Plan your day and get reminders when it's time.</p>

        {/* Input Fields */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-700">Add a Task</h2>
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          />
          <button
            onClick={addTask}
            className="w-full bg-blue-600 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="mt-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-700">Today's Tasks</h2>
          <ul className="mt-3 bg-white p-4 rounded-lg shadow-md">
            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks added yet.</p>
            ) : (
              tasks.map((t, index) => (
                <li key={index} className="flex justify-between items-center border-b p-2">
                  <span>{t.task} - <span className="font-semibold">{t.time}</span></span>
                  <button onClick={() => removeTask(index)} className="text-red-600 font-bold">X</button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {showPopup && <NotificationPopup message={popupMessage} onClose={() => setShowPopup(false)} />}
    </div>
  );
}
