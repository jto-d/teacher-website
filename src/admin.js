import { initializeApp } from "firebase/app";
import { 
  onSnapshot, getFirestore, collection,
  setDoc, query, orderBy, deleteDoc, where, doc,
  getDoc, updateDoc, addDoc
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

// refer to collection
const colRef = collection(db, "events")

// queries
const q = query(colRef, orderBy('classname'))

let events = []

// real time data collection
// instead of colRef, use q to synthesize with queries
onSnapshot(q, (snapshot) => {
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
    description: addEventForm.description.value,
    event: addEventForm.name.value,
    type: addEventForm.type.value,
    date: addEventForm.date.value
  })
  .then(() => {
    addEventForm.reset()
  })
})

// delete event
// ***** COPY FOR UPDATE FORM *****
const deleteEventForm = document.querySelector('.delete')

const deleteID = document.getElementById("deleteID")
let deleteOptions = []
for(let i=0;i<events.length;i++) {
  options.push(`<option value=${events[i].id.value}>${events[i].name.value}</option>`)
}

deleteID.innerHTML = deleteOptions.join('')


// submit button for delete form
deleteEventForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'events', deleteEventForm.deleteID.value)

  deleteDoc(docRef)
    .then(() => {
      deleteEventForm.reset()
    })

})

// get a single document
const docRef = doc(db, 'events', '6uERDX0Iet8cg8JZENij')

getDoc(docRef)
  .then((doc) => {
    console.log(doc.data(), doc.id)
  })

// update a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'events', updateForm.id.value)

  //make html update form
  //work on accordion css for all

  //update form should include field of update and what to update it to
  updateDoc(docRef, {
    title: 'updated'
  })
  .then(() => {
    updateForm.reset()
  })
})
