import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';
import { PlayerService } from '../../services/playerService';

@Component({
  selector: 'game-option',
  templateUrl: './game-option.component.html',
  styleUrls: [ './game-option.component.css' ]
})
export class GameOptionComponent  {
  @Input() player: PlayerData

  newGame() {
    this.player.money = 30;
  }

  saveGame() {

  }

  loadGame() {

  }
}
