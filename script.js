// 1. Wedding date and time — update here with your real wedding date/time
const weddingDate = new Date("2025-05-19T10:30:00");

// 2. Start Experience button: hide hero, show main, play music
function startExperience() {
  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.4;
  music.play();
}

// 3. Update marriage timer every second
function updateMarriageTimer() {
  const now = new Date();
  const diff = now - weddingDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;
}

updateMarriageTimer();
setInterval(updateMarriageTimer, 1000);

// 4. Slideshow photos changing every 5 seconds
const photos = [
  "assets/photo1.jpg",
  "assets/photo2.jpg",
  "assets/photo3.jpg",
  "assets/photo4.jpg",
  "assets/photo5.jpg"
];
let current = 0;
function changeSlide() {
  current = (current + 1) % photos.length;
  document.getElementById("slide").src = photos[current];
}
setInterval(changeSlide, 5000);

// 5. Final button shows the forever message
function showFinal() {
  document.getElementById("forever").classList.remove("hidden");
}

// 6. Sparkle effect follows mouse cursor
document.addEventListener("mousemove", function(e) {
  const sparkle = document.createElement("div");

  sparkle.style.position = "fixed";
  sparkle.style.width = "6px";
  sparkle.style.height = "6px";
  sparkle.style.background = "gold";
  sparkle.style.borderRadius = "50%";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "9999";

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 500);
});
