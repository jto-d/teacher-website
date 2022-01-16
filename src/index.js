import { initializeApp } from "firebase/app";
import { 
  onSnapshot, getFirestore, collection,
  addDoc
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

console.log('webpack wroking')




 // init firebase app
initializeApp(firebaseConfig)

 // init database
const db = getFirestore()
console.log('success')

 // refer to collection
const colRef = collection(db, "events")

 // real time data collection
onSnapshot(colRef, (snapshot) => {
  let events = []
  snapshot.docs.forEach((doc) => {
    events.push({ ...doc.data(), id: doc.id })
  })
  console.log(events)
})

// add event
const addEventForm = document.querySelector('.add')
addEventForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    classname: addEventForm.classname.value,
    event: addEventForm.name.value,
    type: addEventForm.type.value,
  })
  .then(() => {
    addEventForm.reset()
  })
})

// delete event
const deleteEventForm = document.querySelector('.delete')
deleteEventForm.addEventListener('submit', (e) => {
  e.preventDefault()

})

