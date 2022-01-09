import { Component, Input, OnInit } from '@angular/core';
import { PlayerMaterial } from '../../data/gameInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'forge',
  templateUrl: './forge.component.html',
  styleUrls: [ './forge.component.css' ]
})
export class ForgeComponent implements OnInit  {
  @Input() player: PlayerData;
  
  materials: PlayerMaterial[];

  ngOnInit() {
    if (this.player) {
      this.materials = this.player.materials;
    }
  }
}
