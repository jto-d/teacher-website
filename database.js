import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

const date = new Date(2021, 12, 12)

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyDDAyYzkAmrhWAblRWYbn2fi2L_i0JhHqY",
  authDomain: "calendar-7a864.firebaseapp.com",
  databaseURL: "https://calendar-7a864-default-rtdb.firebaseio.com/",
  storageBucket: "calendar-7a864.appspot.com"
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const database = getDatabase(firebaseApp);
const dbRef = ref(getDatabase())

function writeEvent(eventId, name, year, month, day, type) {
  set(ref(database, 'events/' + eventId), {
    name: name,
    year: year,
    month: month,
    day: day,
    type: type,
  });
}

writeEvent(0, "help me please", date.getFullYear(), date.getMonth(), date.getDay(), "test")

get(child(dbRef, `events/${0}`)).then((snapshot) => {
  if(snapshot.exists()) {
    let snap = snapshot.val()
    console.log(snap["day"])
  } else {
    console.log("No data available")
  }
}).catch((error) => {
  console.error(error)
})