import { Component } from '@angular/core';
import { GameStateData } from '../data/gameStateData';
import { PlayerData } from '../data/playerData';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  playerData: PlayerData = new PlayerData();
  gameStateData: GameStateData = new GameStateData();

  developerTool(event: any) {
    if (event.ctrlKey) {
      this.playerData.money += 10000;
    }
  }
}
