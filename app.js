window.addEventListener("keydown", playSound);

function playSound(e) {
  // get the audio element, that the data-key attr matches with the keyCode the user presses
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) return;

	audio.currentTime = 0;

	audio.play();

	// Adds and removes the playing class. In order to apply the css style effect
	key.classList.add("playing");
	setTimeout(() => {
		key.classList.remove("playing");
	}, 100);
}
