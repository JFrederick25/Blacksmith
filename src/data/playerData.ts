import {
  BuildWeapon,
  Magic,
  PlayerMaterial,
  WeaponType,
} from './interfaces/craftingInterfaces';
import { Npc, Trader } from './interfaces/traderInterfaces';

export class PlayerData {
  // crafting interfaces
  money: number;
  materials: PlayerMaterial[];
  weaponTypes: WeaponType[];
  magicList: Magic[];
  buildWeapons: BuildWeapon[];

  // trader interfaces
  traders: Trader[];
  npcs: Npc[];

  constructor() {
    this.money = 0;
    this.materials = [];
    this.weaponTypes = [];
    this.magicList = [];
    this.buildWeapons = [];
  }

  // for loading/saving data
  static setPlayerData(p: PlayerData, np: PlayerData) {
    p.money = np.money;
    p.materials = np.materials;
    p.weaponTypes = np.weaponTypes;
    p.magicList = np.magicList;
    p.buildWeapons = np.buildWeapons;
    p.traders = np.traders;
    p.npcs = np.npcs;
  }
}
