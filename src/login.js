// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

import { initializeApp } from "firebase/app";
import { 
  onSnapshot, getFirestore, collection,
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDAyYzkAmrhWAblRWYbn2fi2L_i0JhHqY",
    authDomain: "calendar-7a864.firebaseapp.com",
    databaseURL: "https://calendar-7a864-default-rtdb.firebaseio.com",
    projectId: "calendar-7a864",
    storageBucket: "calendar-7a864.appspot.com",
    messagingSenderId: "216742489510",
    appId: "1:216742489510:web:840b2e987c89ce4204b367",
    measurementId: "G-7YPVCGYMBX"
  };

// init firebase app
initializeApp(firebaseConfig)

// init database
const db = getFirestore()
console.log('success')

// access login-info
const colRef = collection(db, "login-info")

// print login-info
onSnapshot(colRef, (snapshot) => {
  let info = []
  snapshot.docs.forEach((doc) => {
    info.push({ ...doc.data(), id: doc.id, password: doc.password, user: doc.user })
  })
  console.log(info)
})