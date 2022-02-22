import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'trading-skills',
  templateUrl: './trading-skills.component.html',
  styleUrls: [ './trading-skills.component.css' ]
})
export class TradingSkillsComponent  {
  @Input() playerData: PlayerData;
}
