const gameOptions: string[] = [
  'game',           // 0
  'forge',          // 1
  'anvil',          // 2
  'store',          // 3
  'map',            // 4
  'crafting skills', // 5
  'trading skills',  // 6
  'magic skills',    // 7
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

  static resetOptions(g: GameStateData) {
    GameStateData.deleteMenuOption(g, 'npc');
    GameStateData.deleteMenuOption(g, 'trader');
  }

  static insertMenuOption(g: GameStateData, option: string) {
    g.options.splice(5, 0, option);
    console.log(g.options);
  }

  static deleteMenuOption(g: GameStateData, option: string) {
    const index = g.options.findIndex(o => o === option);
    if (index > 0) {
      g.options.splice(index, 1);
    }
  }
}
