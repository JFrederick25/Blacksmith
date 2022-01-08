import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { GameOptionComponent } from '../components/game-option/game-option.component';
import { AnvilComponent } from '../components/anvil/anvil.component';
import { ForgeComponent } from '../components/forge/forge.component';
import { StoreComponent } from '../components/store/store.component';
import { MapComponent } from '../components/map/map.component';
import { TraderComponent } from '../components/trader/trader.component';
import { CraftingSkillsComponent } from '../components/crafting-skills/crafting-skills.component';
import { TradingSkillsComponent } from '../components/trading-skills/trading-skills.component';
import { MagicSkillsComponent } from '../components/magic-skills/magic-skills.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    MenuComponent,
    GameOptionComponent,
    ForgeComponent,
    AnvilComponent,
    StoreComponent,
    MapComponent,
    TraderComponent,
    CraftingSkillsComponent,
    TradingSkillsComponent,
    MagicSkillsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
