const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let yesSize = 1.5;
let noSize = 1.2;
let noClicks = 0;

const noTexts = [
  "Are you sure? 😭",
  "Really sure?? 🥺",
  "Are you Fr?? 💔",
  "Last chance 😢",
  "Hauuu muntuwami 😭😭"
];

noBtn.addEventListener("click", () => {
  noClicks++;

  // Grow YES
  yesSize += 0.5;
  yesBtn.style.fontSize = yesSize + "rem";

  // Shrink NO
  noSize -= 0.2;
  if (noSize > 0) {
    noBtn.style.fontSize = noSize + "rem";
  }

  // Change NO text
  if (noClicks < noTexts.length) {
    noBtn.innerText = noTexts[noClicks];
  } else {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <!-- Full screen background video -->
    <video autoplay muted loop class="bg-video">
      <source src="love.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Foreground content -->
    <div class="final">
      
      <h2>I LOVE YOU SOO MUCH MY BABY 🥹🥹</h2>
      <img src="baby.jpeg" alt="My Valentine">
      <p>We will def enjoy this Valentine's day 😍</p>
    </div>
  `;
});