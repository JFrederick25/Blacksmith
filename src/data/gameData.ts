import { PlayerMaterial } from './gameInterfaces';
import { PlayerData } from './playerData';

export class GameData {
  static resetPlayerData(p: PlayerData) {
    p.money = 30;
    p.materials = [
      new PlayerMaterial('wood', 4),
      new PlayerMaterial('stone', 3),
      new PlayerMaterial('bronze', 2),
    ];
    p.weaponTypes = [];
    p.magicList = [];
    p.buildWeapon = null;
  }
}
