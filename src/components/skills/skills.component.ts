import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: [ './skills.component.css' ]
})
export class SkillsComponent  {
  @Input() playerData: PlayerData;

  showSkill = '';
  x;
  mover(opt) {
    this.x = opt;
  }
}
