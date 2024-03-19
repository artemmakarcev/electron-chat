import db from '../db/firestore';
import firebase from 'firebase/app';

const extractSnapshotData = snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

export const fetchChats = () => db.collection('chats').get().then(extractSnapshotData);

export const createChat = chat =>
  db
    .collection('chats')
    .add(chat)
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
      return docRef.id;
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });

export const joinChat = async (userId, chatId) => {
  const userRef = db.doc(`profiles/${userId}`);
  const chatRef = db.doc(`chats/${chatId}`);
  await userRef
    .update({ joinedChats: firebase.firestore.FieldValue.arrayUnion(chatRef) })
    .then(() => {
      console.log('User join chat successfully updated!');
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('Error updating user chatid: ', error);
    });
  await chatRef
    .update({ joinedUsers: firebase.firestore.FieldValue.arrayUnion(userRef) })
    .then(() => {
      console.log('Chat join user successfully updated!');
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('Error updating chat userid: ', error);
    });
};

export const subscribeToChat = (chatId, onSubscribe) =>
  db
    .collection('chats')
    .doc(chatId)
    .onSnapshot(snapshot => {
      const chat = { id: snapshot.id, ...snapshot.data() };
      onSubscribe(chat);
    });

export const subscribeToProfile = (uid, onSubscribe) =>
  db
    .collection('profiles')
    .doc(uid)
    .onSnapshot(snapshot => onSubscribe(snapshot.data()));
