export class GameStateData {
  gameLoaded: boolean;

  constructor() {
    this.gameLoaded = false;
  }

  static setGameStateData(g: GameStateData, ng: GameStateData) {
    g.gameLoaded = ng.gameLoaded;
  }
}