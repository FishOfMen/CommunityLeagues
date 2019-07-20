import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeagueView} from './create-league.view';

describe('CreateLeagueComponent', () => {
  let component: CreateLeagueView;
  let fixture: ComponentFixture<CreateLeagueView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLeagueView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLeagueView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
