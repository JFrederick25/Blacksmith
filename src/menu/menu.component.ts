import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent  {
  @Input() menu;
  @Input() gameStateData;

  applyMenu(): string[] {
    if (this.gameStateData.gameLoaded) {
      return this.menu.options;
    } else {
      return [this.menu.options[0]];
    }
  }

  setBackground(option): string {
    if (this.menu.selected === option) {
      return 'gray';
    }
  }
}
