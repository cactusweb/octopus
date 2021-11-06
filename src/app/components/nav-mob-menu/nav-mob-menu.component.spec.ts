import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMobMenuComponent } from './nav-mob-menu.component';

describe('NavMobMenuComponent', () => {
  let component: NavMobMenuComponent;
  let fixture: ComponentFixture<NavMobMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMobMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMobMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
