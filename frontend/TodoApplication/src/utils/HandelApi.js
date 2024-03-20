// utils/HandleApi.js
import axios from "axios";

const baseUrl = "http://localhost:5001";

const getTodos = async (setTodos) => {
  try {
    await axios
      .get(`${baseUrl}/api/v1`)
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  } catch (error) {
    console.log(error);
  }
};

const addTodo = async (
  title,
  description,
  setTitle,
  setDescription,
  setTodos
) => {
  try {
    await axios.post(`${baseUrl}/api/v1/save`, { title, description });
    console.log("Data sent successfully");
    setTitle("");
    setDescription("");
    getTodos(setTodos);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

const deleteTodo = async (id, setTodos) => {
  try {
    console.log(id);
    await axios.post(`${baseUrl}/api/v1/delete`, { _id: id });
    console.log("data deleted succesfully");
    getTodos(setTodos);
  } catch (error) {
    console.log(error);
  }
};

export { getTodos, addTodo, deleteTodo };
