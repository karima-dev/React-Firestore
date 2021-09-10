import { actionsType } from "./constants";


export const pushTasks = (payload) => {
  return {
    type: actionsType.PUSH_TASKS,
    payload
  };
};

export const removeAllTask = () => {
  return {
    type: actionsType.REMOVE_ALL
  };
};
