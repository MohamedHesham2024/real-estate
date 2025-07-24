import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeholdVsLeaseholdComponent } from './freehold-vs-leasehold.component';

describe('FreeholdVsLeaseholdComponent', () => {
  let component: FreeholdVsLeaseholdComponent;
  let fixture: ComponentFixture<FreeholdVsLeaseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeholdVsLeaseholdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeholdVsLeaseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
