import img from "../Components/images/delete.png";
const Card = ({ title, description, id, deleteTask, setTodos }) => {
  return (
    <div className="task">
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <button onClick={() => deleteTask(id, setTodos)}>
        <img src={img} width="20px" />
      </button>
    </div>
  );
};
export default Card;
