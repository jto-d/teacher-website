const date = new Date();

const leapYears = [2024,2028,2032,2036,2040,2044]
if(leapYears.includes(date.getFullYear)) {
    months[1][1]=29
}

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

document.querySelector(".date p").innerHTML = date.toDateString();

const calDays = document.querySelector(".days")

const initDate = new Date(date.getFullYear(), date.getMonth(), 0).getDay()-1
const finDate = new Date(date.getFullYear(), date.getMonth(), months[currentMonth][1]).getDay()-1


var days = [];
for(var day = 1; day<=months[currentMonth][1]; day++) {
    if(day == date.getDate())
        days.push(`<div class="today">${day}</div>`)
    else
        days.push(`<div>${day}</div>`)
}


var prevDays = [];
for(var day = initDate; day>=0; day--) {
    prevDays.push(`<div class="prev-date">${months[currentMonth-1][1]-day}</div>`)
}

var nextDays = [];
for(var day = 1; day <= 42 - (prevDays.length + days.length); day++){
    nextDays.push(`<div class="next-date">${day}</div>`)
}


calDays.innerHTML = prevDays.join('') + days.join('') + nextDays.join('');



