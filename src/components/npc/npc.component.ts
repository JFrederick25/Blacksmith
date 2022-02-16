import { Component, Input } from '@angular/core';
import { Npc } from '../../data/interfaces/traderInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'npc',
  templateUrl: './npc.component.html',
  styleUrls: [ './npc.component.css' ]
})
export class NpcComponent  {
  @Input() playerData: PlayerData;
  @Input() activeTraderName: string;
}
