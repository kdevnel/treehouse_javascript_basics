const game = new Game();
const btnBeginGame = document.getElementById("begin-game");

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
btnBeginGame.addEventListener("click", (e) => {
  game.startGame();

  e.target.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
