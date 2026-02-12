import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");

  // 🔹 Fetch Tasks
  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/tasks",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTasks(
        Array.isArray(response.data)
          ? response.data
          : response.data.tasks || []
      );
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // 🔹 Create Task
  const createTask = async () => {
    if (!title || !description) return alert("Fill all fields");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks",
        { title, description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTasks([...tasks, response.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Delete Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <div className="header">Task Management System</div>

    <div className="container">
      <h2>Task List</h2>

      {/* Create Task Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={createTask}>Add Task</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <div>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TaskList;
