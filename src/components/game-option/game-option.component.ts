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

  tf = '';

  newGame() {
    GameData.resetPlayerData(this.playerData);
    this.gameStateData.gameLoaded = true;
  }

  saveGame() {
    let t = JSON.stringify(this.playerData);
    t += '|' + JSON.stringify(this.gameStateData);
    this.tf = btoa(t);
  }

  loadGame() {
    const data = atob(this.tf).split('|');
    PlayerData.setPlayerData(this.playerData, JSON.parse(data[0]));
    GameStateData.setGameStateData(this.gameStateData, JSON.parse(data[1]));
    this.tf = '';
  }
}
