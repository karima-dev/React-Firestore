import "./index.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { textInputProps } from "../../constants";
import { buttonProps, collections } from "../../constants";
import TodoCard from "../../components/TodoCard";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllTask } from "./actions";
import { useFirestore } from "../../hooks";


const TodoApp = () => {
  const [todo, setTodo] = useState({ title: "", heure: "" });

  const todoList = useSelector((store) => store.tasksState.taskList);
  const { create, update, remove } = useFirestore(collections.todo);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case textInputProps.timeTodo.name:
        setTodo({ ...todo, heure: e.target.value });
        break;
      case textInputProps.texttodo.name:
        setTodo({ ...todo, title: e.target.value });
        break;

      default:
        break;
    }
  };


  const handleClick = (e) => {
    if (e.target.name === "delete") {
      dispatch(removeAllTask());
      return;
    }
    if (!todo.title || !todo.heure) {
      alert("Add a task");
      return;
    }

    create({
      task: { ...todo },
      isDone: false,
    })
      .then((response) => {
        setTodo({ title: "", heure: "" });
      })
      .catch((error) => {
      });
  };



  const handleCardAction = (e) => {
    switch (e.target.id) {
      case `validate_btn`:
        update(e.target.name,{isDone:true});
       // dispatch(confirmTask(e.target.name));
        break;

      case `delete_btn`:
        remove(e.target.name)
          .then((response) => {
          })
          .catch((error) => {
          });
        break;

      default:
        break;
    }
  };



  const showResult = (todo) => {
    const cardProps = {
      backgroundColor: todo.isDone ? "#b7ebc6" : "",
      key: todo.id,
      title: todo.task.title,
      heure: todo.task.heure,
    };
    return (
      <TodoCard {...cardProps}>
        <span>
          <CustomButton
            style={{ display: todo.isDone ? "none" : "" }}
            name={todo.id}
            id={"validate_btn"}
            color={buttonProps.color.outlineSuccess}
            text={buttonProps.text.todoDone}
            onClick={handleCardAction}
          />
          <CustomButton
            name={todo.id}
            color={buttonProps.color.outlineDanger}
            text={buttonProps.text.todosupp}
            id={"delete_btn"}
            onClick={handleCardAction}
          />
        </span>
      </TodoCard>
    );
  };


  return (
    <div className="container">
      <h1>ToDo Application</h1>
      <CustomInput
        label={textInputProps.texttodo.label}
        type={textInputProps.texttodo.type}
        placeholder={textInputProps.texttodo.placeholder}
        name={textInputProps.texttodo.name}
        className={textInputProps.texttodo.className}
        onChange={handleChange}
        value={todo.title}
      />
      <CustomInput
        label={textInputProps.timeTodo.label}
        type={textInputProps.timeTodo.type}
        placeholder={textInputProps.timeTodo.placeholder}
        className={textInputProps.timeTodo.className}
        name={textInputProps.timeTodo.name}
        onChange={handleChange}
        value={todo.title}
      />

      <CustomButton
        className={buttonProps.className.classpad}
        color={buttonProps.color.warning}
        text={buttonProps.text.ajouter}
        onClick={handleClick}
      />
      <CustomButton
        className={buttonProps.className.classpad}
        color={buttonProps.color.outlineDanger}
        text={buttonProps.text.delete}
        name={"delete"}
        onClick={handleClick}
      />
      <br></br>
      <br></br>
      {todoList.map((todo) => showResult(todo))}
    </div>
  );
};
export default TodoApp;
