import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  menu = {
    selectedOption: 'game',
    options: [
      'game',
      'anvil',
      'forge',
      'store',
      'map',
      'trader',
      'crafting skills',
      'trading skills',
      'magic skills'
    ]
  }
}
