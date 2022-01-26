import { Material, PlayerMaterial, WeaponType } from './gameInterfaces';
import { PlayerData } from './playerData';
import * as materialGameData from '../resources/materialData.json';
import * as weaponGameData from '../resources/weaponTypeData.json';

export class GameData {
  static readonly materialData = materialGameData.materials;
  static readonly weaponData = weaponGameData.weaponTypes;

  static resetPlayerData(p: PlayerData) {
    p.money = 30;
    p.materials = [
      GameData.setPMaterial('oak', 4),
      GameData.setPMaterial('basal', 3),
      GameData.setPMaterial('bronze', 2),
    ];
    p.weaponTypes = [
      GameData.findWeaponType('dagger'),
      GameData.findWeaponType('club'),
    ];
    p.magicList = [];
    p.buildWeapon = null;
  }

  static setPMaterial(matName: string, q?: number): PlayerMaterial {
    const pm = new PlayerMaterial(matName, q || 0);
    const m = GameData.findMaterial(matName);
    if (m) {
      pm.material = m;
      pm.value = pm.material.price;
    }
    return pm;
  }

  static findMaterial(name: string): Material {
    const matData = GameData.materialData.find((x) => x[1] === name);
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

  static findWeaponType(name: string): WeaponType {
    const wData = GameData.weaponData.find(x => x[1] === name);
    if (wData) {
      const w = new WeaponType();
      w.name = wData[1] as string;
      w.value = wData[2] as number;
      return w;
    }
    return null;
  }
}
