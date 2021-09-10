import { firestore } from "../services/firebase.service";

export const useFirestore = (collectionName) => firestore(collectionName);