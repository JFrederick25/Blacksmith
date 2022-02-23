import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';
import { uniq, concat } from 'lodash';
import { Actor, Trader, Npc } from '../../data/interfaces/traderInterfaces';
import { GameStateData } from '../../data/gameStateData';
import { chunk } from '../../resources/utils/helper';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Input() playerData: PlayerData;
  @Input() gameStateData: GameStateData;

  get _locations(): string[] {
      const traders = this.playerData.traders;
    const npcs = this.playerData.npcs;
    return uniq(concat(traders, npcs).map((p) => p.location));
  }

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
      const traders = this.playerData.traders.filter(
        (t) => t.location === this.selectedLocation
      );
      const npcs = this.playerData.npcs.filter(
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
    const traders = this.playerData.traders.filter(
      (t) => t.location === this.selectedLocation
    );
    const npcs = this.playerData.npcs.filter(
      (t) => t.location === this.selectedLocation
    );
    return chunk(concat(traders, npcs), 3);
  }
}
