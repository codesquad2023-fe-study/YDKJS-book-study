const dayStart = '07:30';
const dayEnd = '17:45';

// 회의가 근무시간 내에 이루어질 경우 true, 그렇지 않으면 false
function scheduleMeeting(input, duration) {
  // hour, min 을 나눠서 min + duration = sum
  const [hour, min] = input.split(':').map(Number);
  const sum = min + duration;

  const [inputHour, inputMin] = sum >= 60 ? [hour + 1, sum - 60] : [hour, sum];

  const [startHour, startMin] = dayStart.split(':').map(Number);
  const [endHour, endMin] = dayEnd.split(':').map(Number);

  return (
    ((hour === startHour && min >= startMin) || hour > startHour) &&
    ((inputHour === endHour && inputMin <= endMin) || inputHour < endHour)
  );
}

console.log(scheduleMeeting('7:00', 15)); // f
console.log(scheduleMeeting('07:15', 30)); // f
console.log(scheduleMeeting('7:30', 30)); // t
console.log(scheduleMeeting('11:30', 60)); // t
console.log(scheduleMeeting('17:00', 45)); // t
console.log(scheduleMeeting('17:30', 30)); // f
console.log(scheduleMeeting('18:00', 15)); // f
