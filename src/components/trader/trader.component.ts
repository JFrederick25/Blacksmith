import { Component, Input, OnInit } from '@angular/core';
import { PlayerMaterial } from '../../data/interfaces/craftingInterfaces';
import { Trader, TraderMaterial, TraderWeaponDesign } from '../../data/interfaces/traderInterfaces';
import { PlayerData } from '../../data/playerData';

@Component({
  selector: 'trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css'],
})
export class TraderComponent implements OnInit {
  @Input() playerData: PlayerData;
  @Input() activeTraderName: string;

  activeTrader: Trader;

  ngOnInit(): void {
    this.activeTrader = this.playerData.traders.find(
      (x) => x.name === this.activeTraderName
    );
  }
  
  showMaterials: boolean;
  showMagicMaterials: boolean;
  showWeaponDesigns: boolean;
  showMagicSpells: boolean;

  getavailableWeaponDesigns(): TraderWeaponDesign[] {
    return this.activeTrader.weaponDesigns.filter(w => w.quantity > 0);
  }

  setShowOption(option: string) {
    this.showMaterials = option === 'materials' ? !this.showMaterials : false;
    this.showMagicMaterials = option === 'magicMaterials' ? !this.showMagicMaterials : false;
    this.showWeaponDesigns = option === 'weaponDesigns' ? !this.showWeaponDesigns : false;
    this.showMagicSpells = option === 'magicSpells' ? !this.showMagicSpells : false;
  }

  getPlayerItemInventory(traderMaterial: TraderMaterial): number {
    const playerMaterial = this.playerData.materials.find(
      (m) => m.name === traderMaterial.name
    );

    return playerMaterial ? playerMaterial.quantity : 0;
  }

  buyMaterial(traderMaterial: TraderMaterial) {
    if (
      this.playerData.money - traderMaterial.material.price > 0 &&
      traderMaterial.quantity > 0
    ) {
      traderMaterial.quantity--;
      this.playerData.money -= traderMaterial.material.price;

      const playerMaterial = this.playerData.materials.find(
        (m) => m.name === traderMaterial.name
      );
      // if new player material add to array
      if (!playerMaterial) {
        this.playerData.materials.push(
          new PlayerMaterial(
            traderMaterial.name,
            1,
            traderMaterial.value,
            traderMaterial.material.description
          )
        );
      } else {
        playerMaterial.quantity++;
      }
    }
  }

  buyWeaponDesign(weaponDesign: TraderWeaponDesign) {
    if (this.playerData.money - weaponDesign.price > 0) {
      weaponDesign.quantity--;
      this.playerData.money -= weaponDesign.price;
      this.playerData.weaponTypes.push(weaponDesign.weapontype);
    }
  }
}
