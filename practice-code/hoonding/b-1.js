const dayStart = "07:30";
const dayEnd = "17:45";


function scheduleMeeting(startTime, durationMinutes) {
    let [hour, minute] =  startTime.split(':').map(Number);
    let [startHour, startMinute] = dayStart.split(':').map(Number);
    let [endHour, endMinute] = dayEnd.split(':').map(Number);

    let newMinute = minute + durationMinutes;
    if (newMinute >= 60) {
        hour += 1
        newMinute -= 60
    }

    if (hour >= 7 && hour <= 17){
        if (hour === startHour){
            console.log(startMinute <= minute);
            return 
        }
        if (hour === endHour){
            console.log(endMinute >= minute);
            return
        }
        else{
            console.log(true);
            return
        }
    }
    else{
        console.log(false);
        return
    }

}

scheduleMeeting("7:00", 15);     // false
scheduleMeeting("07:15", 30);    // false
scheduleMeeting("7:30", 30);     // true
scheduleMeeting("11:30", 60);    // true
scheduleMeeting("17:00", 45);    // true
scheduleMeeting("17:30", 30);    // false
scheduleMeeting("18:00", 15);    // false