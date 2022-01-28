import { Component, Input } from '@angular/core';
import { GameStateData } from '../data/gameStateData';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent  {
  @Input() gameStateData;

  applyMenu(): string[] {
    if (this.gameStateData.gameLoaded) {
      return this.gameStateData.options;
    } else {
      return [this.gameStateData.options[0]];
    }
  }

  setBackground(option): string {
    if (this.gameStateData.selected === option) {
      return 'gray';
    }
  }

  setSelection(option: string) {
    this.gameStateData.selected = option;

    // reset options if selected !== map or trader or npc
    if (!['map', 'trader', 'npc'].includes(this.gameStateData.selected)) {
      GameStateData.resetOptions(this.gameStateData);
    }
  }
}
