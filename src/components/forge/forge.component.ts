import { Component, Input, OnInit } from '@angular/core';
import { PlayerMaterial } from '../../data/gameInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'forge',
  templateUrl: './forge.component.html',
  styleUrls: [ './forge.component.css' ]
})
export class ForgeComponent implements OnInit  {
  @Input() playerData: PlayerData;
  
  materials: PlayerMaterial[];
  selectedMaterial: PlayerMaterial;

  ngOnInit() {
    if (this.playerData) {
      this.materials = this.playerData.materials;
    }
  }
}
