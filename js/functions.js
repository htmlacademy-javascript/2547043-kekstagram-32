
const clockTimeToMinutes = (timeString) =>
  timeString.split(':').map((current) => Number(current)).reduce((total, current, index) => {
    total += (index === 0 ? current * 60 : current);
    return total;
  }, 0);

const isMeetingNotExceeding = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartInMinutes = clockTimeToMinutes(workStart);
  const workEndInMinutes = clockTimeToMinutes(workEnd);
  const meetingStartInMinutes = clockTimeToMinutes(meetingStart);
  if(meetingStartInMinutes > workEndInMinutes || meetingStartInMinutes < workStartInMinutes) {
    return false;
  }
  if(meetingStartInMinutes + meetingDuration > workEndInMinutes) {
    return false;
  }
  return true;
};

isMeetingNotExceeding('08:00', '17:30', '14:00', 90); // true
isMeetingNotExceeding('8:0', '10:0', '8:0', 120); // true
isMeetingNotExceeding('08:00', '14:30', '14:00', 90); // false
isMeetingNotExceeding('14:00', '17:30', '08:0', 90); // false
isMeetingNotExceeding('8:00', '17:30', '08:00', 900); // false
