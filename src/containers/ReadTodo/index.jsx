import { useSelector } from "react-redux";

const ReadTodo = () => {
  const todoList = useSelector((store) => store.tasksState.taskList);

  return (
    <div>
      <h2> Finished Tasks</h2>{" "}
      {todoList
        .filter((item) => item.isDone)
        .map((item, index) => (
          <li key={index}>{item.task.title}</li>
        ))}
    </div>
  );
};
export default ReadTodo;
