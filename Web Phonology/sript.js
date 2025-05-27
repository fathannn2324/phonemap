function playAudio(symbol) {
  const audio = new Audio(`audio/${symbol}.mp3`);
  audio.play();
}
