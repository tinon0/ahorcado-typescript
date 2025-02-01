"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./models/game");
const game = new game_1.Game();
game.startGame();
async function start() {
    await game.startGame();
    while (!game.checkDeath() && !game.checkWin()) {
        await game.play();
    }
    if (game.checkWin()) {
        console.log(`Ganaste ${game.getPlayerName()}!`);
    }
    else if (game.checkDeath()) {
        console.log(`Perdiste ${game.getPlayerName()}. Fin del juego!`);
    }
}
start();
