import { BuildWeapon, Magic, PlayerMaterial, WeaponType } from "./gameInterfaces";

export class PlayerData {
  money: number;
  materials: PlayerMaterial[];
  weaponTypes: WeaponType[];
  magicList: Magic[];
  buildWeapon: BuildWeapon;

  constructor() {
    this.money = 0;
    this.materials = [];
    this.weaponTypes = [];
    this.magicList = [];
    this.buildWeapon = null;
  }

  static setPlayerData(p: PlayerData, np: PlayerData) {
    p.money = np.money;
    p.materials = np.materials;
    p.weaponTypes = np.weaponTypes;
    p.magicList = np.magicList;
    p.buildWeapon = np.buildWeapon;
  }
}
