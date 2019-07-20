import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cl-league-card',
  templateUrl: './league-card.view.html',
  styleUrls: ['./league-card.view.scss']
})
export class LeagueCardView implements OnInit {

  @Input() league: any;

  constructor() { }

  ngOnInit() {
  }

}
