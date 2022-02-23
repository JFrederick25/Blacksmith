import { Component, Input, OnInit } from '@angular/core';
import { PlayerMagicMaterial, PlayerMaterial } from '../../data/interfaces/craftingInterfaces';
import { Quest, Trader, TraderMagicMaterial, TraderMagicSpell, TraderMaterial, TraderWeaponDesign } from '../../data/interfaces/traderInterfaces';
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
  
  showQuests: boolean = true;
  showMaterials: boolean;
  showMagicMaterials: boolean;
  showWeaponDesigns: boolean;
  showMagicSpells: boolean;

  getAvailableWeaponDesigns(): TraderWeaponDesign[] {
    return this.activeTrader.weaponDesigns
      .filter(w => w.quantity > 0 && !this.playerData.weaponTypes.some(wt => wt.name === w.name));
  }

  getAvailableMagicSpells(): TraderMagicSpell[] {
    return this.activeTrader.magicSpells
      .filter(m => m.quantity > 0 && !this.playerData.magicList.some(mag => mag.name === m.name));
  }

  setShowOption(option: string) {
    this.showQuests = option === 'quests' ? !this.showQuests : false;
    this.showMaterials = option === 'materials' ? !this.showMaterials : false;
    this.showMagicMaterials = option === 'magicMaterials' ? !this.showMagicMaterials : false;
    this.showWeaponDesigns = option === 'weaponDesigns' ? !this.showWeaponDesigns : false;
    this.showMagicSpells = option === 'magicSpells' ? !this.showMagicSpells : false;
  }

  getPlayerMaterialInventory(traderMaterial: TraderMaterial): number {
    const playerMaterial = this.playerData.materials.find(
      (m) => m.name === traderMaterial.name
    );

    return playerMaterial ? playerMaterial.quantity : 0;
  }

  getPlayerMagicMaterialInventory(traderMagicMaterial: TraderMagicMaterial): number {
    const playerMagicMaterial = this.playerData.magicMaterials.find(
      (mm) => mm.name === traderMagicMaterial.name
    );

    return playerMagicMaterial ? playerMagicMaterial.quantity : 0;
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

  buyMagicMaterial(traderMagicMaterial: TraderMagicMaterial) {
    if (
      this.playerData.money - traderMagicMaterial.price > 0 &&
      traderMagicMaterial.quantity > 0
    ) {
      traderMagicMaterial.quantity--;
      this.playerData.money -= traderMagicMaterial.price;

      const playerMagicMaterial = this.playerData.magicMaterials.find(
        (m) => m.name === traderMagicMaterial.name
      );
      // if new player material add to array
      if (!playerMagicMaterial) {
        this.playerData.magicMaterials.push(
          new PlayerMagicMaterial(
            traderMagicMaterial.name,
            1,
            traderMagicMaterial.price
          )
        );
      } else {
        playerMagicMaterial.quantity++;
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

  checkQuestUnlock(quest: Quest): boolean {
    // if unlock === 'quest', get quests from active trader, check if quest by id is complete
    return true;
  }

  checkQuestCompletion(quest: Quest): boolean {
    if (!quest.completion) {
      return true;
    }

    if (quest.completion) {
      if (quest.completion.hasOwnProperty('reputation'))
      return this.playerData.tradingSkills.reputation >= quest.completion['reputation'];
    }
  }

  acceptReward(quest: Quest) {
    if (quest.reward.hasOwnProperty('actor')) {
      if (quest.reward['actor'].role === 'trader') {
        this.playerData.traders.push(quest.reward['actor']);
      } else {
        this.playerData.npcs.push(quest.reward['actor']);
      }
    }
    quest.accepted = true;
  }
}
