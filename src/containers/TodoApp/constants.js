export const actionsType = {
  ADD_TASK: "ADD_TASK",
  CONFIRM_TASK: "CONFIRM_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  REMOVE_ALL: "REMOVE_ALL",
  PUSH_TASKS: "PUSH_TASKS"
};

export const initialList = new Array(12).fill().map((item, index) => {
  return {
    task: { title: `TITLE_${index}`, heure: "12:00" },
    isDone: false,
    id: `${index}`
  };
});
