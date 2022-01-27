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
      GameData.setPMaterial(1, 4), // 1st material basalt
      GameData.setPMaterial(2, 3), // 2nd material oak
      GameData.setPMaterial(3, 2), // 3rd material bronze
    ];
    p.weaponTypes = [
      GameData.findWeaponType('dagger'),
      GameData.findWeaponType('club'),
    ];
    p.magicList = [];
    p.buildWeapon = null;
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

  static findWeaponType(name: string): WeaponType {
    const wData = GameData.weaponData.find((x) => x[1] === name);
    if (wData) {
      const w = new WeaponType();
      w.name = wData[1] as string;
      w.value = wData[2] as number;
      return w;
    }
    return null;
  }
}
