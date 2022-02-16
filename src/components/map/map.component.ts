import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';
import { uniq, concat } from 'lodash';
import { Actor, Trader, Npc } from '../../data/interfaces/traderInterfaces';
import { GameStateData } from '../../data/gameStateData';

function chunk(arr, chunkSize) {
  if (chunkSize <= 0) throw 'Invalid chunk size';
  var R = [];
  for (var i = 0, len = arr.length; i < len; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
}

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Input() set playerData(player: PlayerData) {
    const traders = player.traders;
    const npcs = player.npcs;
    this._locations = uniq(concat(traders, npcs).map((p) => p.location));
    this._playerData = player;
  }

  @Input() gameStateData: GameStateData;

  _playerData: PlayerData;
  _locations: string[];

  selectedLocation: string;
  selectedActor: Actor;

  setSelectedLocation(location: string) {
    if (this.selectedLocation === location) {
      this.selectedLocation = null;
    } else {
      this.selectedLocation = location;
    }
  }

  setSelectedActor(actor: Actor) {
    if (this.selectedActor === actor) {
      this.selectedActor = null;
    } else {
      const traders = this._playerData.traders.filter(
        (t) => t.location === this.selectedLocation
      );
      const npcs = this._playerData.npcs.filter(
        (t) => t.location === this.selectedLocation
      );
      const foundActor = concat(traders, npcs).find((a) => a === actor);
      this.selectedActor = foundActor.role === 'trader' ? foundActor as Trader : foundActor as Npc;
    }
  }

  getLocationRow(): string[][] {
    return chunk(this._locations, 3);
  }

  getActorRow(): Actor[][] {
    const traders = this._playerData.traders.filter(
      (t) => t.location === this.selectedLocation
    );
    const npcs = this._playerData.npcs.filter(
      (t) => t.location === this.selectedLocation
    );
    return chunk(concat(traders, npcs), 3);
  }
}
