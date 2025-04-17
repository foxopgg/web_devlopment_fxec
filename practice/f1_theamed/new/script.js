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

async function fetchSpeedData() {
  try {
    const response = await fetch('https://api.openf1.org/v1/car_data?driver_number=55&session_key=9159');
    const data = await response.json();
    const fastData = data.filter(entry => entry.speed >= 315);

    if (fastData.length > 0) {
      const latest = fastData[fastData.length - 1];
      document.getElementById('speedDisplay').innerText = `Speed: ${latest.speed} km/h`;
    } else {
      document.getElementById('speedDisplay').innerText = "No speed above 315 km/h at the moment.";
    }
  } catch (error) {
    console.error("Error fetching speed data:", error);
    document.getElementById('speedDisplay').innerText = "Error loading data.";
  }
}
fetchSpeedData();
setInterval(fetchSpeedData, 10000);