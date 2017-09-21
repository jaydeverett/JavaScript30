document.addEventListener("DOMContentLoaded", function() {

  function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return;
    }
    this.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


    if (!audio) {
        console.log('not a valid key');
        return;
      }

    console.log(key.innerText)
    audio.currentTime= 0;

    audio.play();
    key.classList.add('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  document.addEventListener('keydown', playSound);

});
