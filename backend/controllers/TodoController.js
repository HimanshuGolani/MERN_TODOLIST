const TodoModel = require("../models/TodoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.send(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.saveTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await TodoModel.create({ title, description });
    console.log("data added successfully");
    console.log(newTodo);
    res.send(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports.updateTodo = async (req, res) => {
  try {
    const { _id, title, description } = req.body;
    const updatedTodo = await TodoModel.findByIdAndUpdate(_id, {
      title,
      description,
    });
    console.log("data updated successfully");
    console.log(updatedTodo);
    res.send(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    await TodoModel.findByIdAndDelete(_id);
    res.send("Data deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
