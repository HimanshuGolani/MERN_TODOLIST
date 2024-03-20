import { React, useEffect, useState } from "react";
import Card from "./Card";
import { getTodos, addTodo, deleteTodo } from "../utils/HandelApi";
const Home = () => {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="submit"
          onClick={() =>
            addTodo(title, description, setTitle, setDescription, setTodos)
          }
        >
          ADD
        </button>
      </form>

      {todos.map((item, index) => {
        return (
          <Card
            key={item._id}
            title={item.title}
            description={item.description}
            id={item._id}
            deleteTask={deleteTodo}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default Home;
