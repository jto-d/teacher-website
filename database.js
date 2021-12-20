import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";



// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyDDAyYzkAmrhWAblRWYbn2fi2L_i0JhHqY",
  authDomain: "calendar-7a864.firebaseapp.com",
  projectId: "calendar-7a864",
  storageBucket: "calendar-7a864.appspot.com",
  messagingSenderId: "216742489510",
  appId: "1:216742489510:web:840b2e987c89ce4204b367",
  measurementId: "G-7YPVCGYMBX"
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const database = getDatabase(firebaseApp);

function writeEvent(eventId, name, type) {
  set(ref(database, 'users/' + eventId), {
    name: name,
    type: type,
  });
}

console.log(writeEvent(3, "help me please", "test"))

