const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB Atlas (replace with your connection string)
mongoose.connect("mongodb+srv://dbuser:dbpass@cluster0.5dsgzq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

// Home page: show all todos
app.get("/", async (req, res) => {
  const todos = await Task.find();
  res.render("list", { todos });
});

// Add todo
app.post("/", async (req, res) => {
  const { element, priority } = req.body;
  if (element && element.trim()) {
    await Task.create({ text: element.trim(), priority: priority || "medium" });
    res.redirect("/");
  } else {
    res.send('<script>alert("Please enter a todo item."); window.location.href="/";</script>');
  }
});

// Edit todo
app.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { text } = req.body;
  if (text && text.trim()) {
    await Task.findByIdAndUpdate(id, { text: text.trim() });
    res.status(200).json({ message: "Todo updated successfully." });
  } else {
    res.status(400).json({ message: "Todo cannot be empty." });
  }
});

// Delete todo
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully." });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
