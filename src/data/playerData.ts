import { BuiltinMethod } from "@angular/compiler/src/compiler";
import { BuildWeapon, Magic, PlayerMaterial, WeaponType } from "./gameData";

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
