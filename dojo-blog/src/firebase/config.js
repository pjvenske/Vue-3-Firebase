import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAFwA_UQK0_H6FJZRDvYdoJE6diIjYs1Fw",
  authDomain: "udemy-vue-firebase-30b2a.firebaseapp.com",
  projectId: "udemy-vue-firebase-30b2a",
  storageBucket: "udemy-vue-firebase-30b2a.appspot.com",
  messagingSenderId: "891324292532",
  appId: "1:891324292532:web:e2cc3598c23ef21648a6e1",
  measurementId: "G-PG4KC0TPQL"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// export firestore
export { projectFirestore }
