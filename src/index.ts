import { Game } from "./models/game";

// Creo una nueva instancia del juego.
const game = new Game()

/**
 * Inicia el juego y maneja el bucle principal del juego.
 */
async function start() {
    // Iniciar el juego y pedir el nombre del jugador.
    await game.startGame()

    // Continuar el juego mientras el jugador no haya ganado o perdido.
    while (!game.checkDeath() && !game.checkWin()) {
        await game.play()
    }

    // Verificar si el jugador ha ganado.
    if (game.checkWin()) {
        console.log(`Ganaste ${game.getPlayerName()}!`)
    // Verificar si el jugador ha perdido.
    } else if (game.checkDeath()) {
        console.log(`Perdiste ${game.getPlayerName()}. Fin del juego!`)
    }
}

// Llamar a la función para iniciar el juego.
start()
