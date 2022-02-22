import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'magic-skills',
  templateUrl: './magic-skills.component.html',
  styleUrls: [ './magic-skills.component.css' ]
})
export class MagicSkillsComponent  {
  @Input() playerData: PlayerData;
}
