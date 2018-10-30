import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav?: MatSidenav;

  constructor() {}

  ngOnInit() {}
}
