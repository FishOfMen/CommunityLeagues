import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueView } from './league.view'

describe('LeagueView', () => {
  let component: LeagueView;
  let fixture: ComponentFixture<LeagueView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
