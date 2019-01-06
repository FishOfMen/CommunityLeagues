import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'cl-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.scss']
})
export class UpcomingGamesComponent implements OnInit {
  displayedColumns = [
    'awayTeamId',
    'location',
    'date',
    'time',
  ];
  dataSource = GAME_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const GAME_DATA: Game[] = [
  {
    id: '1',
    date: new Date(),
    time: new Date(),
    awayTeamId: 'Fighting Owls',
    homeTeamId: 'My Team',
    location: 'Heinz Field',
  },
];
