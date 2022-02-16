import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'anvil',
  templateUrl: './anvil.component.html',
  styleUrls: [ './anvil.component.css' ]
})
export class AnvilComponent  {
  @Input() playerData: PlayerData;
}
