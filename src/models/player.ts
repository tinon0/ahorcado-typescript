//  #region Clase Jugador

/**
 * Clase que representa a un jugador.
 */
export class Player {
    private name: string
    private tries: number

    // #region Constructor

    /**
     * Crea una nueva instancia del jugador con un nombre vacio y 6 intentos.
     */
    constructor() {
        this.name = ""
        this.tries = 6
    }

    // #endregion

    // #region Metodos para obtener y establecer el nombre

    /**
     * Obtiene el nombre del jugador.
     * @returns {string} El nombre del jugador.
     */
    getName(): string {
        return this.name
    }

    /**
     * Establece el nombre del jugador.
     * @param {string} name - El nombre a establecer.
     */
    setName(name: string) {
        this.name = name
    }

    // #endregion

    // #region Métodos para obtener y establecer los intentos

    /**
     * Obtiene el número de intentos restantes del jugador.
     * @returns {number} El número de intentos restantes.
     */
    getTries(): number {
        return this.tries
    }

    /**
     * Establece el numero de intentos restantes del jugador.
     * @param {number} tries - El numero de intentos a establecer.
     */
    setTries(tries: number) {
        this.tries = tries
    }

    // #endregion

    // #endregion
}
