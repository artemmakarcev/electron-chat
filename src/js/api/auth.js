import db from '../db/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

const createUserProfile = userProfile =>
  db.collection('profiles').doc(userProfile.uid).set(userProfile);

export const getUserProfile = uid =>
  db
    .collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => snapshot.data());

export const register = async ({ email, password, username, avatar }) => {
  const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  await createUserProfile({ uid: user.uid, username, email, avatar, joinedChats: [] });
};

export const login = async ({ email, password }) => {
  const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
  const userProfile = await getUserProfile(user.uid);
  return userProfile;
};

export const logout = () =>
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('success logout');
    })
    .catch(error => {
      console.log('error logout', error);
    });

export const onAuthStateChanges = onAuth => firebase.auth().onAuthStateChanged(onAuth);
