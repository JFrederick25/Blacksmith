import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'crafting-skills',
  templateUrl: './crafting-skills.component.html',
  styleUrls: [ './crafting-skills.component.css' ]
})
export class CraftingSkillsComponent  {
  @Input() playerData: PlayerData;
}
