import db from '../db/firestore';

const extractSnapshotData = (snapshot) => snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

/* export const fetchChats = () => {
  return db
    .collection('chats')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });
      return data;
    });
}; */
export const fetchChats = () => db.collection('chats').get().then(extractSnapshotData);
