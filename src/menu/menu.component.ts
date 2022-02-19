import { Component, Input } from '@angular/core';

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
  }
}
