import { PlayerData } from './playerData';
import * as materialGameData from '../resources/materialData.json';
import * as weaponGameData from '../resources/weaponTypeData.json';
import * as actorGameData from '../resources/actorsData.json';
import { Magic, Material, PlayerMaterial, WeaponType } from './interfaces/craftingInterfaces';
import { Trader } from './interfaces/traderInterfaces';

export class GameData {
  static readonly materialData = materialGameData.materials;
  static readonly weaponData = weaponGameData.weaponTypes;
  static readonly actorsData = actorGameData.actors;

  static resetPlayerData(p: PlayerData) {
    p.money = 30;
    p.materials = [
      GameData.setPMaterial(1, 4), // 1st material basalt
      GameData.setPMaterial(2, 3), // 2nd material oak
      GameData.setPMaterial(3, 2), // 3rd material bronze
    ];
    p.weaponTypes = [
      GameData.findWeaponType(1), // dagger
      GameData.findWeaponType(2), // club
    ];
    p.magicList = [];
    p.buildWeapon = null;

    p.traders = [
      GameData.findTrader(1), // town trader
      GameData.findTrader(2), // market vendor
      // GameData.findTrader(4),
      // GameData.findTrader(6),
      // GameData.findTrader(7),
    ];
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
}
