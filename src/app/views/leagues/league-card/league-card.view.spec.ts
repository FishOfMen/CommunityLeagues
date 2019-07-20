import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCardView } from './league-card.view';

describe('LeagueCardView', () => {
  let component: LeagueCardView;
  let fixture: ComponentFixture<LeagueCardView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueCardView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueCardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
