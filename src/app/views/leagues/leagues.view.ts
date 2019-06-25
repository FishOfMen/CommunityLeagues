import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cl-leagues',
  templateUrl: './leagues.view.html',
  styleUrls: ['./leagues.view.scss']
})
export class LeaguesView implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
