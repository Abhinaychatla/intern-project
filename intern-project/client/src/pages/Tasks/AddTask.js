import { useState } from "react";
import api from "../../utils/api";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/tasks", form);
    navigate("/tasks");
  };

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "240px" }}>
        <Navbar />

        <div className="container mt-4">
          <h2>Add Task</h2>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Title"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <textarea
              className="form-control mb-3"
              placeholder="Description"
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />

            <button className="btn btn-success w-100">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
