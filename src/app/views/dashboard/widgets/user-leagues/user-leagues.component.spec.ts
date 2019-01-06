import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeaguesComponent } from './user-leagues.component';

describe('UserLeaguesComponent', () => {
  let component: UserLeaguesComponent;
  let fixture: ComponentFixture<UserLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
