import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { actionsType } from "./constants";
const initialState = {
  taskList: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.PUSH_TASKS:
      return {
        taskList: action.payload
      };

    case actionsType.ADD_TASK:
      return {
        taskList: [...state.taskList, action.payload]
      };

    case actionsType.CONFIRM_TASK:
      return {
        taskList: state.taskList.map((item) => {
          if (item.id === action.payload) item.isDone = true;

          return item;
        })
      };
    case actionsType.REMOVE_TASK:
      return {
        taskList: state.taskList.filter((item) => item.id !== action.payload)
      };

    case actionsType.REMOVE_ALL:
      return {
        taskList: []
      };

    default:
      return initialState;
  }
};

export default todoReducer;
