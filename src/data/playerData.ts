import {
  BuildWeapon,
  Magic,
  PlayerMagicMaterial,
  PlayerMaterial,
  WeaponType,
} from './interfaces/craftingInterfaces';
import { CraftingSkills, MagicSkills, TradingSkills } from './interfaces/skillsInterfaces';
import { Npc, Trader } from './interfaces/traderInterfaces';

export class PlayerData {
  // crafting interfaces
  money: number;
  materials: PlayerMaterial[];
  magicMaterials: PlayerMagicMaterial[];
  weaponTypes: WeaponType[];
  magicList: Magic[];
  buildWeapons: BuildWeapon[];

  // trader interfaces
  traders: Trader[];
  npcs: Npc[];

  // skills interfaces
  craftingSkills: CraftingSkills;
  tradingSkills: TradingSkills;
  magicSkills: MagicSkills

  constructor() {
    this.money = 0;
    this.materials = [];
    this.magicMaterials = [];
    this.weaponTypes = [];
    this.magicList = [];
    this.buildWeapons = [];
    this.traders = [];
    this.npcs = [];
  }

  // for loading/saving data
  static setPlayerData(p: PlayerData, np: PlayerData) {
    p.money = np.money;
    p.materials = np.materials;
    p.magicMaterials = np.magicMaterials;
    p.weaponTypes = np.weaponTypes;
    p.magicList = np.magicList;
    p.buildWeapons = np.buildWeapons;
    p.traders = np.traders;
    p.npcs = np.npcs;
  }
}
