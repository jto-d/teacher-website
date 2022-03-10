import { initializeApp } from "firebase/app";
import { 
  onSnapshot, getFirestore, collection,
  setDoc, query, orderBy, deleteDoc, where, doc,
  getDoc, updateDoc
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

// // queries
const q = query(colRef, orderBy('classname'))



// real time data collection
// instead of colRef, use q to synthesize with queries
onSnapshot(q, (snapshot) => {
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

  setDoc(colRef, 'events', addEventForm.name.value), {
    classname: addEventForm.classname.value,
    event: addEventForm.name.value,
    type: addEventForm.type.value,
    date: addEventForm.date.value
  }
  .then(() => {
    addEventForm.reset()
  })
})

// delete event
const deleteEventForm = document.querySelector('.delete')

let select = document.queryElementById("selectid")
let options = []
for(let i=0;i<events.length;i++) {
  options.append(events[i].name.value)
}
for(let i = 0; i< options.length; i++) {
  let opt = options[i]
  let el = document.createElemnet("option")
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

deleteEventForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'events', deleteEventForm.id.value)

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