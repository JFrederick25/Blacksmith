import { Component, Input } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: [ './skills.component.css' ]
})
export class SkillsComponent  {
  showSkill = '';
  x;
  mover(opt) {
    this.x = opt;
  }
}
