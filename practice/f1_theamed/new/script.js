const raceDate = new Date("April 20, 2025 20:30:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = raceDate - now;

  if (distance < 0) {
    timer.innerHTML = "Race has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
