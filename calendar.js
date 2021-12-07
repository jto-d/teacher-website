const date = new Date()

const leapYears = [2024,2028,2032,2036,2040,2044]
if(leapYears.includes(date.getFullYear)) {
    months[1][1]=29
}

const presMonth = date.getMonth()

let events = []
let e = new Date(2021, 11, 4)
events.push(e)

console.log(events)


const calendar = () => {
    
    
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
    for(var day = 1; day<=months[currentMonth][1]; day++) {
        if((day == date.getDate() && currentMonth==presMonth) || (day==e.getDate() && date.getMonth()==e.getMonth()))
            days.push(`<div class="today">${day}</div>`)
        else
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
}

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)
    calendar()
  })
  
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    console.log(date)
    calendar()
  })
  
calendar()


