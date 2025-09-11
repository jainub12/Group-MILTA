document.querySelectorAll(".spotify-player").forEach(player => {
  const audio = player.querySelector("audio");
  const disc = player.querySelector(".disc");

  audio.addEventListener("play", () => {
    disc.classList.add("spin");
  });

  audio.addEventListener("pause", () => {
    disc.classList.remove("spin");
  });

  audio.addEventListener("ended", () => {
    disc.classList.remove("spin");
  });
});