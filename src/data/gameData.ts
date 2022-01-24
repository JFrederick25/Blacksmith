import { Material, PlayerMaterial } from './gameInterfaces';
import { PlayerData } from './playerData';

export class GameData {
  static resetPlayerData(p: PlayerData) {
    p.money = 30;
    p.materials = [
      GameData.setPMaterial('wood', 4),
      GameData.setPMaterial('stone', 3),
      GameData.setPMaterial('bronze', 2),
    ];
    p.weaponTypes = [];
    p.magicList = [];
    p.buildWeapon = null;
  }

  static setPMaterial(matName: string, q?: number): PlayerMaterial {
    const pm = new PlayerMaterial(matName, q || 0);
    pm.material = GameData.findMaterial(matName);
    return pm;
  }

  static findMaterial(name: string): Material {
    const matData = GameData.materialData.find((x) => x[1] === name);
    const m = new Material();
    m.name = matData[1] as string;
    m.baseType = matData[2] as string;
    m.rank = matData[3] as number;
    m.price = matData[4] as number;
    return m;
  }

  static readonly materialData = [
    // 0 , 1            , 2        , 3   , 4
    // id, name         , base type, rank, price,
    [1, 'slate', 'stone', 1, 1], // stone commonly found
    [2, 'oak', 'wood', 1, 2], // wood from an oak tree
    [3, 'bronze', 'metal', 1, 4], // an alloy of copper and tin
    [4, 'iron wood', 'wood', 1, 6], // wood from trees grown on the iron hills
    [5, 'obsidian', 'stone', 1, 10], // stone fired within a mountain
    [6, 'steel', 'metal', 1, 15], // carbonized iron
    [7, 'orc stone', 'stone', 2, 17], // a tough stone from the land of orcs
    [8, 'titanium', 'metal', 2, 21], // a strong metal found deep within the mountain
    [9, 'fey wood', 'wood', 2, 32], // wood from an enchanted forest
    [10, 'troll bone', 'stone', 2, 45], // bone of a mighty troll
    [11, 'mythril', 'metal', 2, 55], // a mythical metal for lightweight and strength
    [12, 'hyperion wood', 'wood', 3, 75], // wood of hyperion trees from the high land
    [13, 'adamantium', 'metal', 3, 90], // metal purified by the gods
    [14, 'necrosteel', 'metal', 3, 110], // steel strengthened with mighty souls
    [15, 'dragon bone', 'stone', 3, 145], // bone of an ancient dragon
    [16, 'bezaleel', 'wood', 3, 200], // wood from the god tree
  ];
}
