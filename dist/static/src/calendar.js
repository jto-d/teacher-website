// Firebase initialization
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection, query, orderBy } from "firebase/firestore";


// Set the configuration for your app
// TODO: Replace with your app's config object
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

initializeApp(firebaseConfig)

// init database
const db = getFirestore()
console.log('success')

// refer to collection
const colRef = collection(db, "events")

// queries, sort by date
const q = query(colRef, orderBy('date'))

let events = []

// real time data collection
// get a snapshot of events from the database reference (sorted by date)
onSnapshot(q, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    events.push({ ...doc.data(), id: doc.id })
  })
  console.log(events)
})

// get(child(dbRef, `events/${0}`)).then((snapshot) => {
//     if(snapshot.exists()) {
//       let snap = snapshot.val()
//       console.log("Event Found")
//       let e = new Date(snap["year"],snap["month"],snap["day"])
//       events.push(e)
//     } else {
//       console.log("No data available")
//     }
//   }).catch((error) => {
//     console.error(error)
//   })

//Calendar initialization
//

const date = new Date()

const presMonth = date.getMonth()

// create calendar
const calendar = () => {   
    // document.getElementById("event-left").style.visibility="hidden"
    // document.getElementById("event-right").style.visibility="hidden"
    console.log("Calendar run")
    const months = [
        ["January", 31],
        ["February", 28],
        ["March", 31],
        ["April", 30],
        ["May", 31],
        ["June", 30],
        ["July", 31],
        ["August", 31],
        ["September", 30],
        ["October", 31],
        ["November", 30],
        ["December", 31]
    ]
    
    // account for leap years
    // add a 29th day to February
    const leapYears = [2024,2028,2032,2036,2040,2044]
    if(leapYears.includes(date.getFullYear)) {
        months[1][1]=29
    }

    const currentMonth = date.getMonth()
    
    
    document.querySelector(".date h1").innerHTML = months[currentMonth][0]

    if(currentMonth==presMonth){
        document.querySelector(".date p").innerHTML = date.toDateString()
    } else {
        document.querySelector(".date p").innerHTML = date.getFullYear()
    }


    const calDays = document.querySelector(".days")

    const initDate = new Date(date.getFullYear(), date.getMonth(), 0).getDay()-1
    const finDate = new Date(date.getFullYear(), date.getMonth(), months[currentMonth][1]).getDay()-1


    var days = []
    
    // fill in the calendar with days
    for(var day = 1; day<=months[currentMonth][1]; day++) {
        let added = false
        
        // check if the day is today and add if true
        if(day == date.getDate() && currentMonth==presMonth) {
            days.push(`<div class="today">${day}</div>`)
            added = true
        }
      
        // run through the list of arrays, if there is an event on that date, add with event tag
        try {
            for(let el of events) { 
                if(day.toString()==el.getDate() && currentMonth==el.getMonth()) {
                    days.push(`<div class="calEvent">${day}</div>`)
                    added = true
                }
            }        
        } catch (error){
            console.error(error)
        }
      
        // if not today and no event add without a tag
        if(!added) 
            days.push(`<div>${day}</div>`)        
    }

    if(currentMonth == 0)
        var lastMonth = 11
    else
        var lastMonth = currentMonth-1


    var prevDays = []
    for(var day = initDate; day>=0; day--) {
        prevDays.push(`<div class="prev-date">${months[lastMonth][1]-day}</div>`)
    }

    var nextDays = []
    for(var day = 1; day <= 42 - (prevDays.length + days.length); day++){
        nextDays.push(`<div class="next-date">${day}</div>`)
    }


    calDays.innerHTML = prevDays.join('') + days.join('') + nextDays.join('')

    const calEvents = document.querySelectorAll(".calEvent")
    for(let el of calEvents) {
        el.addEventListener("click", () => {
            document.getElementById("event-left").style.visibility="visible"
            document.getElementById("event-right").style.visibility="visible"
        })
    }
}

// click previous arrow, reinitialize calendar with previous month
document.getElementById("prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)
    calendar()
  })

// click next arrow, reinitialize calendar with next month
document.getElementById("next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    calendar()
  })

// initialize calendar
calendar()
