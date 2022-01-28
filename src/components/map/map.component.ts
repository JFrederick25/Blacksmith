import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';
import { uniq, concat } from 'lodash';
import { Actor, Trader } from '../../data/interfaces/traderInterfaces';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})
export class MapComponent  {
  @Input() set playerData(player: PlayerData) {
    this._locations = uniq(player.traders.map(p => p.location));
    this._playerData = player;
  };

  _playerData: PlayerData;
  _locations: string[];

  selectedLocation: string;

  setSelectedLocation(location: string) {
    if (this.selectedLocation === location) {
      this.selectedLocation = null;
    } else {
      this.selectedLocation = location;
    }
  }

  getLocationRow(): string[][] {
    return chunk(this._locations, 3);
  }

  getTraderRow(): Trader[][] {
    return chunk(this._playerData.traders.filter(t => t.location === this.selectedLocation), 3);
  }
}

function chunk(arr, chunkSize) {
  if (chunkSize <= 0) throw "Invalid chunk size";
  var R = [];
  for (var i=0,len=arr.length; i<len; i+=chunkSize)
    R.push(arr.slice(i,i+chunkSize));
  return R;
}