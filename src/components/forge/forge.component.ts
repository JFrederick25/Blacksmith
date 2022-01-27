import { Component, Input } from '@angular/core';
import { PlayerMaterial, WeaponType } from '../../data/interfaces/craftingInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'forge',
  templateUrl: './forge.component.html',
  styleUrls: [ './forge.component.css' ]
})
export class ForgeComponent {
  @Input() playerData: PlayerData;
  
  selectedMaterial: PlayerMaterial;
  selectedWeaponType: WeaponType;

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
