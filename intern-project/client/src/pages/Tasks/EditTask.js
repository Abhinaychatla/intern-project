import { useEffect, useState } from "react";
import api from "../../utils/api";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    api.get("/tasks").then((res) => {
      const task = res.data.find((t) => t._id === id);
      if (task) setForm(task);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/tasks/${id}`, form);
    navigate("/tasks");
  };

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "240px" }}>
        <Navbar />

        <div className="container mt-4">
          <h2>Edit Task</h2>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <textarea
              className="form-control mb-3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button className="btn btn-warning w-100">Update Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
