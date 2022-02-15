import { PlayerData } from './playerData';
import * as materialGameData from '../resources/materialData.json';
import * as weaponGameData from '../resources/weaponTypeData.json';
import * as actorGameData from '../resources/actorsData.json';
import { Magic, Material, PlayerMaterial, WeaponType } from './interfaces/craftingInterfaces';
import { Npc, Trader } from './interfaces/traderInterfaces';

export class GameData {
  static readonly materialData = materialGameData.materials;
  static readonly weaponData = weaponGameData.weaponTypes;
  static readonly actorsData = actorGameData.actors;

  static resetPlayerData(p: PlayerData) {
    p.money = 30;
    p.materials = [
      //                 (material id, quantity)
      GameData.setPMaterial(1, 4), // 1st material basalt
      GameData.setPMaterial(2, 3), // 2nd material oak
      GameData.setPMaterial(3, 2), // 3rd material bronze
      GameData.setPMaterial(4, 1),
      GameData.setPMaterial(5, 1),
      GameData.setPMaterial(6, 1),
      GameData.setPMaterial(7, 1),
      GameData.setPMaterial(8, 1),
      GameData.setPMaterial(9, 1),
      GameData.setPMaterial(10, 1),
      GameData.setPMaterial(11, 1),
      GameData.setPMaterial(12, 1),
      GameData.setPMaterial(13, 1),
      GameData.setPMaterial(14, 1),
      GameData.setPMaterial(15, 1),
      GameData.setPMaterial(16, 1),
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
    p.magicList = [];
    p.buildWeapon = null;

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
      w.value = wData[2] as number;
      return w;
    }
    return null;
  }

  static findMagic(index: number): Magic {
    return null;
  }

  static findTrader(index: number): Trader {
    const actor = GameData.actorsData[index];
    if (actor) {
      const t = new Trader();
      t.name = actor[1] as string;
      t.role = actor[2] as string;
      t.location = actor[3] as string;
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
