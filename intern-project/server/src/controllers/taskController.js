import Task from "../models/Task.js";

// ✅ GET TASKS
export const getTasks = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 5;
    const search = req.query.search || "";

    const query = {
      user: req.user._id,
      title: { $regex: search, $options: "i" },
    };

    const total = await Task.countDocuments(query);

    const tasks = await Task.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      tasks,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("GET TASKS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

// ✅ CREATE TASK
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      user: req.user._id,
      title,
      description,
    });

    res.status(201).json(task);
  } catch {
    res.status(500).json({ message: "Failed to create task" });
  }
};

// ✅ UPDATE TASK
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    if (task.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.completed =
      req.body.completed ?? task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch {
    res.status(500).json({ message: "Failed to update task" });
  }
};

// ✅ DELETE TASK
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    if (task.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    await task.deleteOne();

    res.json({ message: "Task removed" });
  } catch {
    res.status(500).json({ message: "Failed to delete task" });
  }
};
