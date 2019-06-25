import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesView } from './leagues.view';

describe('LeaguesView', () => {
  let component: LeaguesView;
  let fixture: ComponentFixture<LeaguesView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
