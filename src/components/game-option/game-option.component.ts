import { Component, Input } from '@angular/core';
import { GameStateData } from '../../data/gameStateData';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'game-option',
  templateUrl: './game-option.component.html',
  styleUrls: [ './game-option.component.css' ]
})
export class GameOptionComponent  {
  @Input() player: PlayerData;
  @Input() gameStateData: GameStateData;

  newGame() {
    this.gameStateData.gameLoaded = true;
  }

  saveGame() {

  }

  loadGame() {

  }
}
