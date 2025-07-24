import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryVsSecondaryMarketComponent } from './primary-vs-secondary-market.component';

describe('PrimaryVsSecondaryMarketComponent', () => {
  let component: PrimaryVsSecondaryMarketComponent;
  let fixture: ComponentFixture<PrimaryVsSecondaryMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryVsSecondaryMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryVsSecondaryMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
