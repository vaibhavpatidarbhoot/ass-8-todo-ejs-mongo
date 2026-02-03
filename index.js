require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// Show all tasks
app.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ _id: -1 });
  res.render("index", { tasks });
});

// Add new task
app.post("/add", async (req, res) => {
  const { title, priority } = req.body;

  if (!title || title.trim() === "") {
    return res.send(
      "<script>alert('Task title cannot be empty'); window.location='/'</script>"
    );
  }

  await Task.create({ title, priority });
  res.redirect("/");
});

// Delete task
app.post("/delete/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send(
    "<script>alert('Task deleted successfully'); window.location='/'</script>"
  );
});

// Edit page
app.get("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render("edit", { task });
});

// Update task
app.post("/update/:id", async (req, res) => {
  const { title, priority } = req.body;

  await Task.findByIdAndUpdate(req.params.id, { title, priority });
  res.send(
    "<script>alert('Task updated successfully'); window.location='/'</script>"
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
