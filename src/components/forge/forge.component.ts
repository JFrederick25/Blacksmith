import { Component, Input, OnInit } from '@angular/core';
import { PlayerMaterial, WeaponType } from '../../data/gameInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'forge',
  templateUrl: './forge.component.html',
  styleUrls: [ './forge.component.css' ]
})
export class ForgeComponent implements OnInit  {
  @Input() playerData: PlayerData;
  
  selectedMaterial: PlayerMaterial;
  selectedWeaponType: WeaponType;

  ngOnInit() {

  }

  setSelectedMaterial(material) {
    if (this.selectedMaterial && this.selectedMaterial.name === material.name) {
      this.selectedMaterial = null;
    } else {
      this.selectedMaterial = material;
    }
  }

  setSelectedWeaponType(weaponType) {
    if (this.selectedWeaponType && this.selectedWeaponType.name === weaponType.name) {
      this.selectedWeaponType = null;
    } else {
      this.selectedWeaponType = weaponType;
    }
  }
}
