import firebase from "../firebase";

export const firestore = (collectionName) => {
  const db = firebase.collection(collectionName);

  const getAll = () => {
    return db;
  };
  const create = (data) => {
    return db.add(data);
  };
  const update = (id, value) => {
    return db.doc(id).update(value);
  };
  const remove = (id) => {
    return db.doc(id).delete();
  };

  return { getAll, create, update, remove };
};

export const auth = () => {};
