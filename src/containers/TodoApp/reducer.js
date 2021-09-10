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

    case actionsType.REMOVE_ALL:
      return {
        taskList: []
      };

    default:
      return initialState;
  }
};

export default todoReducer;
