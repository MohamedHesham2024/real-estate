import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestTransactionAreasComponent } from './highest-transaction-areas.component';

describe('HighestTransactionAreasComponent', () => {
  let component: HighestTransactionAreasComponent;
  let fixture: ComponentFixture<HighestTransactionAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighestTransactionAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestTransactionAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
