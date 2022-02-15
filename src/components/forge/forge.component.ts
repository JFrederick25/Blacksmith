import { Component, Input } from '@angular/core';
import { PlayerMaterial, WeaponType } from '../../data/interfaces/craftingInterfaces';
import { PlayerData } from '../../data/playerData';

function chunk(arr, chunkSize) {
  if (chunkSize <= 0) throw 'Invalid chunk size';
  var R = [];
  for (var i = 0, len = arr.length; i < len; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
}

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

  getMaterialRow(): PlayerMaterial[][] {
    return chunk(this.playerData.materials, 4);
  }

  getWeaponsRow(): WeaponType[][] {
    return chunk(this.playerData.weaponTypes, 4);
  }
}
