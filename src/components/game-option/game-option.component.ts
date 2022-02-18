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

  x;
  mover(opt) {
    this.x = opt;
  }

  useLocalStorage: boolean = true;
  tf = '';

  newGame() {
    GameData.resetPlayerData(this.playerData);
    this.gameStateData.gameLoaded = true;
  }

  saveGame() {
    let t = JSON.stringify(this.playerData);
    t += '|' + JSON.stringify(this.gameStateData);
    
    if (this.useLocalStorage) {
      localStorage.setItem('BlackSmithLife', btoa(t));
    } else {
      this.tf = btoa(t);
    }
  }

  loadGame() {
    let data = null;
    if (this.useLocalStorage) {
      data = atob(localStorage.getItem('BlackSmithLife')).split('|');
    } else {
      data = atob(this.tf).split('|');
      this.tf = '';
    }
    PlayerData.setPlayerData(this.playerData, JSON.parse(data[0]));
    GameStateData.setGameStateData(this.gameStateData, JSON.parse(data[1]));
  }
}
