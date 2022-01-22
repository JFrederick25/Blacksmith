import { Component, Input } from '@angular/core';
import { GameData } from '../../data/gameData';
import { GameStateData } from '../../data/gameStateData';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'game-option',
  templateUrl: './game-option.component.html',
  styleUrls: ['./game-option.component.css'],
})
export class GameOptionComponent {
  @Input() playerData: PlayerData;
  @Input() gameStateData: GameStateData;

  newGame() {
    GameData.resetPlayerData(this.playerData);
    this.gameStateData.gameLoaded = true;
  }

  saveGame() {}

  loadGame() {}
}
