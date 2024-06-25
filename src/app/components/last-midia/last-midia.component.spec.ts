import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMidiaComponent } from './last-midia.component';

describe('LastMidiaComponent', () => {
  let component: LastMidiaComponent;
  let fixture: ComponentFixture<LastMidiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastMidiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastMidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
