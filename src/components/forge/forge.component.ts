import { Component, Input } from '@angular/core';
import { BuildWeapon, Magic, MagicMaterial, PlayerMagicMaterial, PlayerMaterial, WeaponType } from '../../data/interfaces/craftingInterfaces';
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
  selectedMagic: Magic;

  showMaterials: boolean = false;
  showWeapons: boolean = false;
  showMagic: boolean = false;

  setShowOption(option: string) {
    this.showMaterials = option === 'materials' ? !this.showMaterials : false;
    this.showWeapons = option === 'weapons' ? !this.showWeapons : false;
    this.showMagic = option === 'magic' ? !this.showMagic : false;
  }

  setSelectedMaterial(material: PlayerMaterial) {
    if (this.selectedMaterial && this.selectedMaterial.name === material.name) {
      this.selectedMaterial = null;
    } else {
      this.selectedMaterial = material;
    }
  }

  setSelectedWeaponType(weaponType: WeaponType) {
    if (this.selectedWeaponType && this.selectedWeaponType.name === weaponType.name) {
      this.selectedWeaponType = null;
    } else {
      this.selectedWeaponType = weaponType;
    }
  }

  setSelectedMagic(magic: Magic) {
    if (this.selectedMagic && this.selectedMagic.name === magic.name) {
      this.selectedMagic = null;
    } else {
      this.selectedMagic = magic;
    }
  }

  getMaterialRow(): PlayerMaterial[][] {
    return chunk(this.playerData.materials, 4);
  }

  getWeaponsRow(): WeaponType[][] {
    return chunk(this.playerData.weaponTypes, 4);
  }

  getMagicRow(): Magic[][] {
    return chunk(this.playerData.magicList, 4);
  }

  getPlayerMagicMaterial(): PlayerMagicMaterial {
    return this.playerData.magicMaterials.find(mm => mm.name === this.selectedMagic.magicMaterial.name);
  }

  buildWeapon() {
    if (
      this.selectedMaterial.quantity - this.selectedWeaponType.requiredMaterial >= 0 &&
      this.checkRequiredMagic()
    ){
      const newWeapon = new BuildWeapon();
      Object.assign(newWeapon.material, this.selectedMaterial.material);
      Object.assign(newWeapon.weaponType, this.selectedWeaponType);
      this.selectedMaterial.quantity -= this.selectedWeaponType.requiredMaterial;
      
      if (this.selectedMagic) {
        Object.assign(newWeapon.magic, this.selectedMagic);
        const playerMagicMaterial = this.playerData.magicMaterials.find(mm => mm.name === this.selectedMagic.magicMaterial.name);
        playerMagicMaterial.quantity -= this.selectedMagic.magicMaterialRequired;
      }
      
      this.playerData.buildWeapons.push(newWeapon);
      this.selectedMaterial = null;
      this.selectedWeaponType = null;
      this.selectedMagic = null;
      
      this.setShowOption(null);
    }
  }

  checkRequiredMagic(): boolean {
    if (!this.selectedMagic) {
      return true;
    } else {
      const playerMagicMaterial = this.playerData.magicMaterials.find(mm => mm.name === this.selectedMagic.magicMaterial.name);
      if (playerMagicMaterial) {
        return playerMagicMaterial.quantity - this.selectedMagic.magicMaterialRequired >= 0;
      } else {
        return false;
      }
    }
  }
}
