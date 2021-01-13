console.log("hello");
window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => key.addEventListener("transitionend", removeStyle));
  function removeStyle(e) {
    key.classList.remove("playing");
  }
});
