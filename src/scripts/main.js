'use strict';

const Game = require('../modules/Game.class');

const game = new Game();

game.updateBoard();

document.addEventListener('keydown', (e) => {
  const allowedKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

  if (allowedKeys.includes(e.key)) {
    game.move(e.key);
  }
});

document.querySelector('.start').addEventListener('click', () => {
  game.start();
});
