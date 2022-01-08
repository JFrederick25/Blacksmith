import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { GameOptionComponent } from '../components/game-option/game-option.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    MenuComponent,
    GameOptionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
