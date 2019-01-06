import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';

@Component({
  selector: 'cl-user-leagues',
  templateUrl: './user-leagues.component.html',
  styleUrls: ['./user-leagues.component.scss']
})
export class UserLeaguesComponent implements OnInit {

  leagues: League[] = LEAGUE_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const LEAGUE_DATA: League[] = [
  {
    id: '1',
    adminId: '1',
    name: 'My Sports League',
    sportId: '1',
    address: {},
  },
  {
    id: '2',
    adminId: '1',
    name: 'My Other Sports League',
    sportId: '1',
    address: {},
  },
];
