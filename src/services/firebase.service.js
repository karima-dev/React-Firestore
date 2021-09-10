import { firestoreDb, firebaseAuth } from "../firebase";

export const firestore = (collectionName) => {
  const db = firestoreDb.collection(collectionName);

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

export const authServise = () => {
  const auth = firebaseAuth;
  const signUp = async (email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      return res.user;
    } catch (err) {


      return err.message
    }
  };
  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then(res => {
        return auth.currentUser
      });
    } catch (err) {

      return err.message;
    }
  };

  return { signIn, signUp }
};
