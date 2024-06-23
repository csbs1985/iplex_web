import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFilmsComponent } from './menu-films.component';

describe('MenuFilmsComponent', () => {
  let component: MenuFilmsComponent;
  let fixture: ComponentFixture<MenuFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
