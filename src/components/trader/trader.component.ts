import { Component, Input, OnInit } from '@angular/core';
import { Trader } from '../../data/interfaces/traderInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'trader',
  templateUrl: './trader.component.html',
  styleUrls: [ './trader.component.css' ]
})
export class TraderComponent implements OnInit {
  @Input() playerData: PlayerData;
  @Input() activeTraderName: string;

  activeTrader: Trader;

  ngOnInit(): void {
      this.activeTrader = this.playerData.traders.find(x => x.name === this.activeTraderName);
    }
}
