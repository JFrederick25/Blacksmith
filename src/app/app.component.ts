import { Component } from '@angular/core';
import { GameStateData } from '../data/gameStateData';
import { PlayerData } from '../data/playerData';
import { PlayerService } from '../services/playerService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  menu = {
    selected: 'game',
    options: [
      'game',
      'forge',
      'anvil',
      'store',
      'map',
      'trader',
      'crafting skills',
      'trading skills',
      'magic skills'
    ]
  };

  player: PlayerData = new PlayerData();
  gameState: GameStateData;

  constructor(private playerService: PlayerService) {
    playerService.player = this.player;
  }
}
