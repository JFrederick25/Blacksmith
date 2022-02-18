import { PlayerData } from './playerData';
import * as materialGameData from '../resources/materialData.json';
import * as weaponGameData from '../resources/weaponTypeData.json';
import * as actorGameData from '../resources/actorsData.json';
import * as magicGameData from '../resources/magicData.json';
import { Magic, MagicMaterial, Material, PlayerMagicMaterial, PlayerMaterial, WeaponType } from './interfaces/craftingInterfaces';
import { Npc, Trader, TraderMagicMaterial, TraderMaterial, TraderWeaponDesign } from './interfaces/traderInterfaces';
import { NgForOf } from '@angular/common';

export class GameData {
  static readonly materialData = materialGameData.materials;
  static readonly weaponData = weaponGameData.weaponTypes;
  static readonly actorsData = actorGameData.actors;
  static readonly magicData = magicGameData.magic;
  static readonly magicMaterialData = magicGameData.magicMaterials;

  static resetPlayerData(p: PlayerData) {
    p.money = 30;
    p.materials = [
      //                 (material id, quantity)
      GameData.setPMaterial(1, 4), // 1st material basalt
      GameData.setPMaterial(2, 3), // 2nd material oak
      GameData.setPMaterial(3, 2), // 3rd material bronze
      GameData.setPMaterial(4, 1),
      GameData.setPMaterial(5, 0),
      GameData.setPMaterial(6, 0),
      GameData.setPMaterial(7, 0),
      GameData.setPMaterial(8, 0),
      GameData.setPMaterial(9, 0),
      GameData.setPMaterial(10, 0),
      GameData.setPMaterial(11, 0),
      GameData.setPMaterial(12, 0),
      GameData.setPMaterial(13, 0),
      GameData.setPMaterial(14, 0),
      GameData.setPMaterial(15, 0),
      GameData.setPMaterial(16, 0),
    ];
    p.magicMaterials = [
      GameData.setPMagicMaterial(1, 2),
    ];
    p.weaponTypes = [
      GameData.findWeaponType(1), 
      GameData.findWeaponType(2), 
      GameData.findWeaponType(3), 
      GameData.findWeaponType(4), 
      GameData.findWeaponType(5), 
      GameData.findWeaponType(6), 
      GameData.findWeaponType(7), 
      GameData.findWeaponType(8), 
      GameData.findWeaponType(9), 
      GameData.findWeaponType(10), 
      GameData.findWeaponType(11), 
      GameData.findWeaponType(12), 
      GameData.findWeaponType(13), 
      GameData.findWeaponType(14), 
      GameData.findWeaponType(15), 
      GameData.findWeaponType(16), 
    ];
    p.magicList = [
      GameData.findMagic(1),
      GameData.findMagic(2),
      GameData.findMagic(3),
      GameData.findMagic(4),
      GameData.findMagic(5),
      GameData.findMagic(6),
      GameData.findMagic(7),
      GameData.findMagic(8),
    ];
    p.buildWeapons = [];

    p.traders = [
      GameData.findTrader(1), // town trader
      GameData.findTrader(2), // market vendor
      // GameData.findTrader(3),
      // GameData.findTrader(4),
      // GameData.findTrader(5),
      // GameData.findTrader(8),
      // GameData.findTrader(9),
      // GameData.findTrader(10),
      // GameData.findTrader(11),
    ];

    p.npcs = [
      GameData.findNpc(6), // king consort
      GameData.findNpc(7), // the king
    ]
  }


  static setPMaterial(index: number, q?: number): PlayerMaterial {
    const material = GameData.findMaterial(index);
    if (material) {
      const pm = new PlayerMaterial(material.name, q || 0);
      pm.material = material;
      pm.value = pm.material.price;
      return pm;
    }
    return null;
  }

  static setPMagicMaterial(index: number, q?: number): PlayerMagicMaterial {
    const magicMaterial = GameData.findMagicMaterial(index);
    if (magicMaterial) {
      const pmm = new PlayerMagicMaterial(magicMaterial.name, q || 0);
      pmm.magicMaterial = magicMaterial;
      
      pmm.value = pmm.magicMaterial.value;
      return pmm;
    }
    return null;
  }

  static findMaterial(index: number): Material {
    const matData = GameData.materialData[index];
    if (matData) {
      const m = new Material();
      m.name = matData[1] as string;
      m.baseType = matData[2] as string;
      m.craftingRank = matData[3] as number;
      m.price = matData[4] as number;
      m.description = matData[5] as string;
      return m;
    }
    return null;
  }

  static findWeaponType(index: number): WeaponType {
    const wData = GameData.weaponData[index];
    if (wData) {
      const w = new WeaponType();
      w.name = wData[1] as string;
      w.rank = wData[2] as number;
      w.value = wData[3] as number;
      w.requiredMaterial = wData[4] as number;
      return w;
    }
    return null;
  }

  static findMagic(index: number): Magic {
    const mData = GameData.magicData[index];
    if (mData) {
      const m = new Magic();
      m.name = mData[1] as string;
      m.rank = mData[2] as number;
      m.value = mData[3] as number;
      m.magicMaterial = GameData.findMagicMaterial(mData[4] as number);
      m.magicMaterialRequired = mData[5] as number;
      return m;
    }
    return null;
  }

  static findMagicMaterial(index: number): MagicMaterial {
    const mmData = GameData.magicMaterialData[index];
    if (mmData) {
      const mm = new MagicMaterial();
      mm.name = mmData[1] as string;
      mm.rank = mmData[2] as number;
      mm.value = mmData[3] as number;
      return mm;
    }
    return null;
  }

  static findTrader(index: number): Trader {
    const actor = GameData.actorsData[index];
    if (actor) {
      const t = new Trader();
      t.name = actor[1] as string;
      t.role = actor[2] as string;
      t.location = actor[3] as string;
      
      // 4 is materials
      if (actor[4]) {
        for(let mat of actor[4] as number[][]) {
          const mData = GameData.findMaterial(mat[0]);
          t.materials.push(new TraderMaterial(mData.name, mat[1], mData.price));
        }
      }

      // 5 is magic materials
      if (actor[5]) {
        for(let mm of actor[5] as number [][]) {
          const mmData = GameData.findMagicMaterial(mm[0]);
          const tmm = new TraderMagicMaterial(mmData.name, mmData.value, mm[1]);
          tmm.magicMaterial = mmData;
          t.magicMaterials.push(tmm);
        }
      }

      // 6 is weapon designs
      if (actor[6]) {
        for(let wep of actor[6] as number[][]) {
          const wData = GameData.findWeaponType(wep[0]);
          const weaponDesign = new TraderWeaponDesign(wData.name, wep[1]);
          weaponDesign.weapontype = wData;
          weaponDesign.quantity = 1;
          t.weaponDesigns.push(weaponDesign);
        }
      }

      // 7 is magic magicSpells

      // 8 is dialogs
      return t;
    }
    return null;
  }

  static findNpc(index: number): Npc {
    const actor = GameData.actorsData[index];
    if (actor) {
      const n = new Npc();
      n.name = actor[1] as string;
      n.role = actor[2] as string;
      n.location = actor[3] as string;
      return n;
    }
    return null;
  }
}
