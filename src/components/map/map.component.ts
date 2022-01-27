import { Component, Input } from '@angular/core';
import { PlayerData } from '../../data/playerData';
import { uniq } from 'lodash';

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
  
}

