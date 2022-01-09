import { PlayerMaterial } from "./gameInterfaces";
import { PlayerData } from "./playerData";

export const startingPlayerData = {
  money: 30,
  materials: [
    new PlayerMaterial('wood'),
    new PlayerMaterial('stone'),
    new PlayerMaterial('bronze')
  ],
  weaponTypes: [

  ],
  magicList: [

  ],
  buildWeapon: null
};

