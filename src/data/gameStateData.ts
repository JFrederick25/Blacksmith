const gameOptions: string[] = [
  'game',           // 0
  'forge',          // 1
  'anvil',          // 2
  'store',          // 3
  'map',            // 4
  'skills',         // 5
];

export class GameStateData {
  gameLoaded: boolean;
  options: string[];
  selected: string;

  constructor() {
    this.gameLoaded = false;
    this.options = gameOptions;
    this.selected = 'game';
  }

  // from load game in Game Options
  static setGameStateData(g: GameStateData, ng: GameStateData) {
    g.gameLoaded = ng.gameLoaded;
  }
}
