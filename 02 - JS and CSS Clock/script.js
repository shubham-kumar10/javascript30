const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const secondsInDegree = (seconds / 60) * 360 + 90;
  const minutes = currentDate.getMinutes();
  const minutesInDegrees = (minutes / 60) * 360 + 90;
  const hours = currentDate.getHours();
  const hoursInDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsInDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;

  console.log(seconds, minutes, hours);
}

setInterval(setDate, 1000);
