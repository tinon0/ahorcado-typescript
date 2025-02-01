"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    name;
    tries;
    constructor() {
        this.name = "";
        this.tries = 6;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getTries() {
        return this.tries;
    }
    setTries(trie) {
        this.tries = trie;
    }
}
exports.Player = Player;
