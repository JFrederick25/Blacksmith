import { startingPlayerData } from "../data/gameData";
import { PlayerMaterial } from "../data/gameInterfaces";
import { PlayerData } from "../data/playerData";

export class PlayerService {
  player: PlayerData;

  resetPlayer() {
    Object.assign(this.player, startingPlayerData);
  }
}
