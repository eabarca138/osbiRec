import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '../Firebase'

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}