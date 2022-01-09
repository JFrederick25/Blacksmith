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
}
