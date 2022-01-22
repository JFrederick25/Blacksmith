import { PlayerMaterial } from './gameInterfaces';
import { PlayerData } from './playerData';

export class GameData {
  static resetPlayerData(p: PlayerData) {
    p.money = 30;
    p.materials = [
      new PlayerMaterial('wood'),
      new PlayerMaterial('stone'),
      new PlayerMaterial('bronze'),
    ];
    p.weaponTypes = [];
    p.magicList = [];
    p.buildWeapon = null;
  }
}
