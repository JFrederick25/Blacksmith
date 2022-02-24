import { Component, HostListener } from '@angular/core';
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

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key === 'p') {
      console.log(navigator.userAgent);
    }
  }

  developerTool(event: any) {
    if (event.ctrlKey) {
      this.playerData.money += 10000;      
    }
  }
}
