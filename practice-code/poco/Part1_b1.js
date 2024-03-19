// B.1 비교 연습하기

const dayStart = '07:30';
const dayEnd = '17:45';

const getTime = (time) => {
  const [hour, minute] = time.split(':');

  return parseInt(hour) * 60 + parseInt(minute);
};

const scheduleMeeting = (startTime, durationMinutes) => {
  const dayStartTime = getTime(dayStart);
  const dayEndTime = getTime(dayEnd);

  const meetingStartTime = getTime(startTime);
  const meetingEndTime = meetingStartTime + durationMinutes;

  return meetingEndTime <= dayEndTime && meetingStartTime >= dayStartTime;
};

console.log(scheduleMeeting('7:00', 15)); // false
console.log(scheduleMeeting('07:15', 30)); // false
console.log(scheduleMeeting('7:30', 30)); // true
console.log(scheduleMeeting('11:30', 60)); // true
console.log(scheduleMeeting('17:00', 45)); // true
console.log(scheduleMeeting('17:30', 30)); // false
console.log(scheduleMeeting('18:00', 15)); // false

// 매개변수
// startTime : "hh:mm" 형태의 회의 시작시간
// durationMinutes : 회의 지속 시간

// 출력
// 회의가 근무시간 내에 이뤄질 경우 true, 아니면 false 반환
