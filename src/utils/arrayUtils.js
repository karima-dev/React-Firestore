export const remplirListe = (items) => {
  if (!items && !items.docs) return [];
  const list = [];
  items.docs.forEach((item) => {
    const id = item.id;
    const data = item.data();

    list.push({
      id: id,
      task: { title: data.task.title, heure: data.task.heure },

      isDone: data.isDone,
    });
  });
  return list;
};
