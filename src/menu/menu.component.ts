import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent  {
  @Input() menu;

  setBackground(option): string {
    if (this.menu.selected === option) {
      return 'gray';
    }
  }
}

