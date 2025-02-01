"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const player_1 = require("./player");
const promises_1 = require("readline/promises");
class Game {
    wordToGuess;
    wordInProgress = [];
    wordsUsed = [];
    player;
    constructor() {
        this.player = new player_1.Player();
    }
    async startGame() {
        const readLine = this.getInterface();
        const newName = await readLine.question("Bienvenido al Ahorcado" + "\n" + "Cual es su nombre?" + "\n");
        readLine.close();
        this.player.setName(newName);
        await this.loadWordToGuess();
        this.loadWordInProgress();
        this.showStatus();
    }
    async loadWordToGuess() {
        try {
            const response = await fetch("https://random-word-api.herokuapp.com/word?number=1&lang=es");
            const randomWord = await response.json();
            this.wordToGuess = randomWord[0];
        }
        catch (error) {
            console.error("Error al obtener la palabra: ", error);
        }
    }
    async play() {
        const readLine = this.getInterface();
        let input = '';
        while (true) {
            input = await readLine.question("Ingresa una letra: ");
            if (input.length !== 1) {
                console.log("Debe ingresar solo una letra");
            }
            if (!/^[a-zA-Z]$/.test(input)) {
                console.log("Debe ingresar una letra valida");
            }
            else if (this.letterRepeated(input)) {
                console.log("Letra ya repetida, usa otra");
            }
            else {
                console.log(`Has ingresado la letra: ${input}`);
                break;
            }
        }
        readLine.close();
        this.checkLetter(input);
        this.showStatus();
    }
    loadWordInProgress() {
        this.wordInProgress = [];
        for (let i = 0; i < this.wordToGuess.length; i++) {
            this.wordInProgress[i] = "_";
        }
    }
    showStatus() {
        this.clearConsole();
        console.log("-------------------------------\n");
        console.log("hack:", this.wordToGuess);
        console.log(this.wordInProgress.join(" ") + "\n");
        console.log("Tus vidas: " + this.player.getTries());
        console.log("Palabras usadas: " + this.wordsUsed.join(" - "));
        console.log("-------------------------------\n");
    }
    getInterface() {
        const readLine = (0, promises_1.createInterface)({
            input: process.stdin,
            output: process.stdout,
        });
        return readLine;
    }
    checkLetter(letter) {
        let foundLetter = false;
        for (let i = 0; i < this.wordToGuess.length; i++) {
            if (letter.toLocaleLowerCase() === this.wordToGuess.charAt(i).toLocaleLowerCase()) {
                console.log("Esa letra SI esta!");
                foundLetter = true;
                this.wordInProgress[i] = letter;
                this.pushLetter(letter);
            }
        }
        if (!foundLetter) {
            console.log("Esa letra NO esta!");
            this.pushLetter(letter);
            this.player.setTries(this.player.getTries() - 1);
        }
    }
    letterRepeated(letter) {
        return this.wordsUsed.includes(letter);
    }
    pushLetter(letter) {
        if (!this.letterRepeated(letter)) {
            this.wordsUsed.push(letter);
        }
    }
    clearConsole() {
        process.stdout.write('\x1Bc');
    }
    getPlayerName() {
        return this.player.getName();
    }
    checkDeath() {
        return this.player.getTries() <= 0;
    }
    checkWin() {
        return this.wordInProgress.join("") === this.wordToGuess;
    }
}
exports.Game = Game;
