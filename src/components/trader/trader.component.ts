import { Component, Input } from '@angular/core';
import { Trader } from '../../data/interfaces/traderInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'trader',
  templateUrl: './trader.component.html',
  styleUrls: [ './trader.component.css' ]
})
export class TraderComponent  {
  @Input() playerData: PlayerData;
  @Input() activeTrader: Trader;
}
