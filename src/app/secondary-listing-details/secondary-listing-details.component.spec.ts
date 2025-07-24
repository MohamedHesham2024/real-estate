import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryListingDetailsComponent } from './secondary-listing-details.component';

describe('SecondaryListingDetailsComponent', () => {
  let component: SecondaryListingDetailsComponent;
  let fixture: ComponentFixture<SecondaryListingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryListingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryListingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
