const dDay = new Date("Nov 13, 2025 08:10:00"); // D-Day date
const HTMLdDay = document.querySelector(".dDay");

function getTimeRemaining(endtime) {
  const now = new Date().getTime();
  const t = endtime - now;
  if (t <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

function updateCountdown() {
  const time = getTimeRemaining(dDay);
  HTMLdDay.innerHTML = `11.13 2026학년도 대학수학능력시험까지 </br> ${time.days}일 ${time.hours}시간 ${time.minutes}분 ${time.seconds}초 남았습니다!`;
}

setInterval(updateCountdown, 1000); // updates the countdown every second
