import { Player } from "./player"
import { createInterface } from 'readline/promises'

// #region Clase Game

/**
 * Clase que representa el juego del Ahorcado.
 */
export class Game {
    //  #region Atributos

    /**
     * Palabra que se debera adivinar
     */
    private wordToGuess!: string

    /**
     * Palabra que ve el jugador y que se rellena en el proceso
     */
    private wordInProgress: string[] = []

    /**
     * Arreglo de las letras usadas
     */
    private lettersUsed: string[] = []

    /**
     * Jugador del juego
     */
    private player: Player

    //  #endregion

    // #region Constructor

    /**
     * Crea una nueva instancia del juego.
     */
    constructor() {
        this.player = new Player()
    }

    // #endregion

    // #region Métodos Juego

    /**
     * Inicia el juego y pide el nombre del jugador.
     */
    async startGame() {
        const readLine = this.getInterface()
        const newName = await readLine.question("Bienvenido al Ahorcado\nCual es su nombre?\n")
        readLine.close()
        this.player.setName(newName)

        await this.loadWordToGuess()
        this.loadWordInProgress()
        this.showStatus()
    }

    /**
     * Carga una palabra en castellano al azar desde una API.
     */
    private async loadWordToGuess() {
        try {
            const response = await fetch("https://random-word-api.herokuapp.com/word?number=1&lang=es")
            const randomWord: string[] = await response.json()
            this.wordToGuess = randomWord[0]
        } catch (error) {
            console.error("Error al obtener la palabra: ", error)
        }
    }

    /**
     * Inicia el bucle del juego, permitiendo al jugador ingresar letras.
     */
    async play() {
        const readLine = this.getInterface()
        let input: string = ''

        while (true) {
            input = await readLine.question("Ingresa una letra: ")

            if (input.length !== 1) {
                console.log("Debe ingresar solo una letra")
            } else if (!/^[a-zA-Z]$/.test(input)) {
                console.log("Debe ingresar una letra válida")
            } else if (this.letterRepeated(input)) {
                console.log("Letra ya repetida, usa otra")
            } else {
                console.log(`Has ingresado la letra: ${input}`)
                break
            }
        }

        readLine.close()
        this.checkLetter(input)
        this.showStatus()
    }

    // #endregion

    // #region Metodos Auxiliares

    /**
     * Inicializa la palabra en progreso con guiones bajos.
     */
    private loadWordInProgress() {
        this.wordInProgress = []
        for (let i = 0; i < this.wordToGuess.length; i++) {
            this.wordInProgress[i] = "_"
        }
    }

    /**
     * Muestra el estado del juego en la consola.
     */
    private showStatus() {
        this.clearConsole()
        console.log("-------------------------------\n")
        console.log(this.showHangman())
        console.log("hack:", this.wordToGuess)
        console.log(this.wordInProgress.join(" ") + "\n")
        console.log("Tus vidas: " + this.player.getTries())
        console.log("Palabras usadas: " + this.lettersUsed.join(" - "))
        console.log("-------------------------------\n")
    }

    /**
     * Crea una interfaz de entrada/salida para la consola.
     * @returns {Interface} La interfaz de entrada/salida.
     */
    private getInterface() {
        const readLine = createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        return readLine
    }

    /**
     * Verifica si una letra esta en la palabra a adivinar y actualiza el estado del juego.
     * @param {string} letter - La letra ingresada por el jugador.
     */
    private checkLetter(letter: string) {
        let foundLetter = false
        for (let i = 0; i < this.wordToGuess.length; i++) {
            if (letter.toLocaleLowerCase() === this.wordToGuess.charAt(i).toLocaleLowerCase()) {
                console.log("Esa letra SI esta!")
                foundLetter = true
                this.wordInProgress[i] = letter
                this.pushLetter(letter)
            }
        }
        if (!foundLetter) {
            console.log("Esa letra NO esta!")
            this.pushLetter(letter)
            this.player.setTries(this.player.getTries() - 1)
        }
    }

    /**
     * Verifica si una letra ya ha sido utilizada.
     * @param {string} letter - La letra a verificar.
     * @returns {boolean} Verdadero si la letra ya ha sido utilizada, falso en caso contrario.
     */
    private letterRepeated(letter: string) {
        return this.lettersUsed.includes(letter)
    }

    /**
     * Añade una letra al conjunto de letras utilizadas.
     * @param {string} letter - La letra a añadir.
     */
    private pushLetter(letter: string) {
        if (!this.letterRepeated(letter)) {
            this.lettersUsed.push(letter)
        }
    }

    /**
     * Limpia la consola.
     */
    private clearConsole() {
        process.stdout.write('\x1Bc')
    }

    /**
     * Muestra el dibujo del ahorcado segun el número de vidas restantes.
     */
    private showHangman() {
        const hangmanStages = [
            `
            ------
            |    |
                |
                |
                |
                |
            =========`,
            
            `
            ------
            |    |
            O    |
                |
                |
                |
            =========`,
            
            `
            ------
            |    |
            O    |
            |    |
                |
                |
            =========`,
            
            `
            ------
            |    |
            O    |
            /|    |
                |
                |
            =========`,
            
            `
            ------
            |    |
            O    |
            /|\\   |
                |
                |
            =========`,
            
            `
            ------
            |    |
            O    |
            /|\\   |
            /     |
                |
            =========`,
            
            `
            ------
            |    |
            O    |
            /|\\   |
            / \\   |
                |
            =========`
        ]
        return hangmanStages[6 - this.player.getTries()]
    }


    // #endregion
    
    // #region Metodos Estado Jugador

    /**
     * Obtiene el nombre del jugador.
     * @returns {string} El nombre del jugador.
     */
    getPlayerName() {
        return this.player.getName()
    }

    /**
     * Verifica si el jugador ha perdido todas sus vidas.
     * @returns {boolean} Verdadero si el jugador ha perdido todas sus vidas, falso en caso contrario.
     */
    checkDeath() {
        return this.player.getTries() <= 0
    }

    /**
     * Verifica si el jugador ha adivinado la palabra completa.
     * @returns {boolean} Verdadero si el jugador ha adivinado la palabra, falso en caso contrario.
     */
    checkWin() {
        return this.wordInProgress.join("") === this.wordToGuess
    }

    // #endregion
}

// #endregion
