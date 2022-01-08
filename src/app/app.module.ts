import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { GameOptionComponent } from '../components/game-option/game-option.component';
import { AnvilComponent } from '../components/anvil/anvil.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    MenuComponent,
    GameOptionComponent,
    AnvilComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
