const refs = {
  days: document.querySelector(".days"),
  hours: document.querySelector(".hours"),
  minutes: document.querySelector(".minutes"),
  seconds: document.querySelector(".seconds"),
};

const endDate = new Date();
endDate.setDate(endDate.getDate() + 61);
endDate.setHours(7, 36, 7);

function updateTimer() {
  const currentDate = new Date();
  const timeLeft = endDate - currentDate;

  if (timeLeft <= 0) {
    refs.days.textContent = "00";
    refs.hours.textContent = "00";
    refs.minutes.textContent = "00";
    refs.seconds.textContent = "00";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = formattedSeconds;
  }
}

updateTimer();
setInterval(updateTimer, 1000);
