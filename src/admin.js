
import { initializeApp } from "firebase/app";
import { 
  onSnapshot, getFirestore, collection,
  setDoc, query, orderBy, deleteDoc, where, doc,
  getDocs, updateDoc, addDoc
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
const q = query(colRef, orderBy('date'))



// real time data collection
// instead of colRef, use q to synthesize with queries
onSnapshot(q, (snapshot) => {
  let events = []
  let options = []



  const deleteId = document.getElementById("deleteId")
  
  
  snapshot.docs.forEach((doc) => {
    events.push({ ...doc.data(), id: doc.id })
  })
  console.log(events)

  // create delete options
  events.forEach((event) => {
    options.push(`<option value='${event.id}'>${event.event}</option>`)
  })
  
  console.log(options)

  // delete event
  // ***** COPY FOR UPDATE FORM *****
  deleteId.innerHTML = options.join('')

  // create update options
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



const deleteEventForm = document.querySelector('.delete')
// submit button for delete form
deleteEventForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'events', deleteEventForm.deleteId.value)

  deleteDoc(docRef)
    .then(() => {
      deleteEventForm.reset()
    })

})

// // get a single document
// const docRef = doc(db, 'events', '6uERDX0Iet8cg8JZENij')

// getDoc(docRef)
//   .then((doc) => {
//     console.log(doc.data(), doc.id)
//   })


//make html update form
//work on accordion css for all

  //update form should include field of update and what to update it to

