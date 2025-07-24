import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryListingComponent } from './secondary-listing.component';

describe('SecondaryListingComponent', () => {
  let component: SecondaryListingComponent;
  let fixture: ComponentFixture<SecondaryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
