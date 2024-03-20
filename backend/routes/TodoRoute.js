const { Router } = require("express");
const {
  getToDo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/TodoController");
const router = Router();

// routes
router.get("/", getToDo);
router.post("/save", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
