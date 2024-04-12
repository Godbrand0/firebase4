import { initializeApp } from 'firebase/app';
import{
   getFirestore, 
}from 'firebase/firestore'
    
import{
    getAuth,

} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsH0GdD1XSVfFMtQar92g25U6mv1o8iDU",
    authDomain: "fir-4-bf60b.firebaseapp.com",
    projectId: "fir-4-bf60b",
    storageBucket: "fir-4-bf60b.appspot.com",
    messagingSenderId: "933744330572",
    appId: "1:933744330572:web:54f67e2b4c1e176a6ff1e9"
}
initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()
