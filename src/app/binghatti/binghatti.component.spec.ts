import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BINGHATTIComponent } from './binghatti.component';

describe('BINGHATTIComponent', () => {
  let component: BINGHATTIComponent;
  let fixture: ComponentFixture<BINGHATTIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BINGHATTIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BINGHATTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
