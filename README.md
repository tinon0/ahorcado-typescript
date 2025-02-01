
# 🤖 **Juego del Ahorcado**

Bienvenido a este proyecto el cual está desarrollado en **TypeScript** y utiliza una estructura orientada a clases para organizar el código, haciendo que el juego sea fácil de entender y modificar.

## 🛠️ **Descripción del Proyecto**

Este es un juego clásico de **Ahorcado** donde debes adivinar una palabra secreta ingresando letras. Solo tienes un número limitado de intentos antes de que el juego termine. El sistema genera una palabra aleatoria desde una API y te desafía a adivinarla.

## 🌐 **Arquitectura del Juego**

### **Clases Principales**

1. **Player (Jugador)**:
   - Representa al jugador, con su nombre y el número de intentos restantes (6 intentos en total).
   - **Métodos**:
     - `getName()`: Obtiene el nombre del jugador.
     - `setName(name: string)`: Establece el nombre del jugador.
     - `getTries()`: Obtiene el número de intentos restantes.
     - `setTries(tries: number)`: Establece los intentos restantes.

2. **Game (Juego)**:
   - Controla la lógica del juego, incluyendo la palabra secreta, los intentos, y el estado del juego.
   - **Métodos**:
     - `startGame()`: Inicia el juego, pide el nombre del jugador y carga la palabra secreta.
     - `play()`: Permite al jugador ingresar una letra e interactúa con el estado del juego.
     - `checkLetter(letter: string)`: Verifica si la letra ingresada está en la palabra secreta y actualiza el estado.
     - `showStatus()`: Muestra el estado actual del juego, incluyendo la palabra adivinada y los intentos restantes.

---

## 🚀 **Características del Juego**

- **Adivina la Palabra**: Cada vez que ingresas una letra, el sistema te dirá si la letra está en la palabra secreta o no. 
- **Sistema de Intentos**: Tienes un número limitado de intentos (6). Si fallas demasiadas veces, el juego termina.
- **Palabra Aleatoria**: El juego elige una palabra aleatoria de un conjunto de palabras en español a través de una API.
- **Interfaz de Consola**: Todo se maneja a través de la consola, donde puedes interactuar con el juego ingresando letras.

---

## ⚙️ **Cómo Jugar**

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/ahorcado.git
   ```

2. **Instala las dependencias**:
   Si no has instalado las dependencias, puedes hacerlo con el siguiente comando:
   ```bash
   npm install
   ```

3. **Ejecuta el juego**:
   Simplemente ejecuta el archivo principal para comenzar a jugar:
   ```bash
   npm run start
   ```

4. **Interacción**:
   El juego te pedirá que ingreses tu nombre, luego comenzarás a adivinar letras. Cada vez que adivines correctamente, verás la palabra actualizada. Si te quedas sin intentos, el juego terminará.

---

# 🤖 **Hangman Game**

Welcome to this project, which is developed in **TypeScript** and uses a class-based structure to organize the code, making the game easy to understand and modify.

## 🛠️ **Project Description**

This is a classic **Hangman** game where you must guess a secret word by entering letters. You only have a limited number of attempts before the game ends. The system generates a random word from an API and challenges you to guess it.

## 🌐 **Game Architecture**

### **Main Classes**

1. **Player**:
   - Represents the player, with their name and the number of remaining attempts (6 attempts in total).
   - **Methods**:
     - `getName()`: Gets the player's name.
     - `setName(name: string)`: Sets the player's name.
     - `getTries()`: Gets the number of remaining attempts.
     - `setTries(tries: number)`: Sets the remaining attempts.

2. **Game**:
   - Controls the game logic, including the secret word, attempts, and game state.
   - **Methods**:
     - `startGame()`: Starts the game, asks for the player's name, and loads the secret word.
     - `play()`: Allows the player to enter a letter and interacts with the game state.
     - `checkLetter(letter: string)`: Checks if the entered letter is in the secret word and updates the state.
     - `showStatus()`: Displays the current game state, including the guessed word and remaining attempts.

---

## 🚀 **Game Features**

- **Guess the Word**: Every time you enter a letter, the system will tell you if the letter is in the secret word or not. 
- **Attempt System**: You have a limited number of attempts (6). If you fail too many times, the game ends.
- **Random Word**: The game selects a random word from a set of Spanish words via an API.
- **Console Interface**: Everything is managed through the console, where you interact with the game by entering letters.

---

## ⚙️ **How to Play**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hangman.git
   ```

2. **Install the dependencies**:
   If you haven't installed the dependencies yet, you can do so with the following command:
   ```bash
   npm install
   ```

3. **Run the game**:
   Simply run the main file to start playing:
   ```bash
   npm run start
   ```

4. **Interaction**:
   The game will ask for your name, and then you will begin guessing letters. Every time you guess correctly, you will see the updated word. If you run out of attempts, the game will end.
